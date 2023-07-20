import React from 'react'
import {Flex} from '@chakra-ui/react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <Flex>
        <ShoppingCartIcon/>
        <p>2</p>
    </Flex>
  )
}

export default CartWidget