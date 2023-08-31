import React from 'react'
import { Alert, AlertIcon, AlertTitle, AlertDescription, Button, Center, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../index.css' 

const Purchase = () => {
  return (
    <>
    <Alert
    status='success'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='200px'
    bgColor='gray.200'
    >
    <AlertIcon boxSize='40px' mr={0} />
    <AlertTitle mt={4} mb={1} fontSize='lg'>
        Compra realizada!
    </AlertTitle>
    <AlertDescription maxWidth='sm'>
        Gracias por realizar su compra, nos contactaremos en breve via e-mail
    </AlertDescription>
    </Alert>
    <Center>
        <div style={{ textAlign: 'center' }}>
            <img src="https://media.tenor.com/f-pzyh_lVwQAAAAd/gato-moviendo-la-cabeza.gif" alt="Compra realizada" style={{ maxWidth: '100%', marginTop: '20px' }} />
        </div>
    </Center>
    <Center style={{ marginTop: '30px' }}>
    <Link to={`/home`} style={{ textDecoration: 'none'} }>
        <Button colorScheme='gray'>
          Volver al inicio
        </Button>
    </Link>
    </Center>
    </>

  )
}

export default Purchase