import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Flex } from '@chakra-ui/react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const prodRef = doc(db, 'ARTICULOS', id);

    getDoc(prodRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log('No se encontro el documento');
        }
      })
      .catch((error) => {
        console.error('Error getting document:', error);
      });
  }, [id]);

  return (
    <Flex>
      {producto && <ItemDetail producto={producto} />}
    </Flex>
  );
};

export default ItemDetailContainer;
