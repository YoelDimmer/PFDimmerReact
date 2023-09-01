import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
  const { category } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const prodCollection = collection(db, 'ARTICULOS');
    const q = query(prodCollection, where('category', '==', category));

    getDocs(q)
      .then((querySnapshot) => {
        const productosData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosData);
      })
      .catch((error) => {
        console.error('Error getting documents:', error);
      });
  }, [category]);

  return (
    <Flex>
      <ItemList productos={productos} />
    </Flex>
  );
};

export default ItemListContainer;
