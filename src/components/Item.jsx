import React from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, ButtonGroup, Button, Center, Divider, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../index.css' 



const Item = ({   nombre,
    id,
    precio,
    imagen}) => {

  return (
    <Center className='card-center'>
        <Card maxW='sm'>
            <CardBody>
                <div>
                    <img src={imagen} alt={nombre} />
                </div>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{nombre}</Heading>
                        <Text fontSize='25px' align='end'>
                        ${precio}
                        </Text>
                </Stack>
            </CardBody>
                <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='gray'>
                    <Link to={`/item/${id}`}>
                    Detalles
                    </Link>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </Center>

  )
}

export default Item