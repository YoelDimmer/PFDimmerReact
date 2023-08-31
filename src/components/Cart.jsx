import React, { useContext } from 'react';
import { Card, CardBody, CardFooter, Stack, Heading, ButtonGroup, Button, Center, Divider, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../index.css';
import { CartContext } from '../context/ShoppingCartContext';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const eliminarItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  }

  return (
    <>
    <Center className='card-center' >
      {cart.map((item) => (
        <Card key={item.id} maxW='sm' >
          <CardBody>
            <div>
              <img src={item.img} alt={item.nombre} />
            </div>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{item.nombre}</Heading>
              <Text fontSize='25px' align='end'>
                {item.cantidad}x {item.precio}
              </Text>
              <Text>Subtotal</Text>
              <Text align='end'>${item.cantidad * item.precio}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='gray' onClick={() => eliminarItem(item.id)}>
                Eliminar
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Center>
    </>
  );
};

export default Cart;
