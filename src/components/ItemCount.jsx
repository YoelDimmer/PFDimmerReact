import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button, IconButton, Center } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { CartContext } from '../context/ShoppingCartContext';

const ItemCount = ({ producto }) => {
  const [counter, setCounter] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [cart, setCart] = useContext(CartContext)

  useEffect(() => {
    console.log(cart); // Verifica el contenido del carrito cada vez que cambie
  }, [cart]);

  const increment = () => {
    if (counter < 15) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(0);
  };

  const onAdd = () => {
    const newProduct = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: counter,
    };

    setCart([...cart, newProduct]);
    setIsButtonDisabled(true);
  };

  return (
    <>
      <Center>
        <ButtonGroup size='md' isAttached variant='outline'>
          <IconButton onClick={decrement} icon={<MinusIcon />} />
          <Button onClick={onAdd} isDisabled={isButtonDisabled}>
            {counter}
          </Button>
          <IconButton onClick={increment} icon={<AddIcon />} />
        </ButtonGroup>
      </Center>
      <Button onClick={reset}>Reset</Button>
      <Button>
        <Link to={`/cart`}>Carrito</Link>
      </Button>
    </>
  );
};

export default ItemCount;
