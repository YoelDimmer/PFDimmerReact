import React from 'react'
import {Flex} from '@chakra-ui/react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const CartWidget = () => {

  const [cart, setCart] = useContext(CartContext)

  let totalProductos = 0

  for (const producto of cart){
    totalProductos += producto.cantidad;
  }

  console.log(totalProductos)

  return (
    <Flex>
        <ShoppingCartIcon/>
        <p>{totalProductos}</p>
    </Flex>
  )
}

export default CartWidget
