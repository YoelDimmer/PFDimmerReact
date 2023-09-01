import React, { useContext } from 'react';
import { Card, CardBody, CardFooter, Stack, Heading, ButtonGroup, Button, Center, Divider, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../index.css';
import { CartContext } from '../context/ShoppingCartContext';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const eliminarItem = (itemId) => {
    if (itemId === "all") {
      setCart([]);
    } else {
      const updatedCart = cart.filter(item => item.id !== itemId);
      setCart(updatedCart);
    }
  }

  const total = cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0);

  console.log(cart)
  if (cart.length === 0) {
    return (
      <Center className='card-center'>
        <div style={{ textAlign: 'center' }}>
          <Text fontSize='24px' fontWeight='bold'>El carrito está vacío</Text>
          <img src="https://hips.hearstapps.com/hmg-prod/images/gatos-instagram-1568280221.gif" alt="Carrito Vacío" style={{ maxWidth: '100%', marginTop: '20px' }} />
          <Link to='/home' style={{ textDecoration: 'none' }}>
            <Button colorScheme='gray' mt='4'>
              Ir al inicio
            </Button>
          </Link>
        </div>
      </Center>
    )
  }

  return (
    <>
    <Center className='card-center' >
      {cart.map((item) => (
        <Card key={item.id} maxW='sm' >
          <CardBody>
            <div>
              <img src={item.imagen} alt={item.nombre} />
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
    <Center>
      <div style={{ padding: '50px', fontSize: '24px', fontWeight: 'bold'}}>
        Total a pagar: ${total.toFixed(2)}
      </div>
      <div style={{ padding: '10px', }}>
      <Link to={`/purchase`} style={{ textDecoration: 'none' }}>
        <Button colorScheme='gray' onClick={() => setCart([])}>
          Finalizar compra
        </Button>
      </Link>
      </div>
      <div style={{ padding: '10px' }}>
        <Button colorScheme='gray' onClick={() => eliminarItem("all")}>
          Limpiar carrito
        </Button>
      </div>
    </Center>
    </>
  );
};

export default Cart;
