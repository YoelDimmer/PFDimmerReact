import React from 'react'
import { Box, AspectRatio, Image} from '@chakra-ui/react'

const Home = () => {
  return (
    <>
      <Box fontSize="50px" padding="20px">Bienvenidos a HeyCats!</Box>
      <Box fontSize="30px" marginLeft="20px">En este lugar vas a encontrar todos los productos para tu gato!</Box>
      <Box fontSize="30px" marginLeft="20px">Para empezar, selecciona una categoria de productos</Box>

      <Box marginLeft="20px" marginTop="20px">
        <AspectRatio maxW='400px' ratio={4 / 3}>
          <Image src='https://media.tenor.com/OKLkZ1Um5HIAAAAC/mad-typing.gif' alt='gato' objectFit='cover' />
        </AspectRatio>
      </Box>

    
    </>
  )
}

export default Home