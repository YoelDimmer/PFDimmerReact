import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Stack, CardBody, CardFooter, Heading, Text, Center, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react';


const ItemDetail = ({ productos }) => {
    const { id } = useParams();


    const filtrarProductos = productos.filter((producto) => producto.id == id)



    return (
        <div>
            {filtrarProductos.map((p) => {
                
                return (
                    <div key={p.id}>
                        
                        <Center className='card-center'>

                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                src={p.img}
                                alt=''
                                borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='md'>{p.nombre}</Heading>
                                <Text>
                                    {p.descripcion}
                                </Text>
                                <Text fontSize='25px' align='end'>
                                    {p.precio}
                                </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Center>
                                    <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='gray'>
                                        Comprar
                                    </Button>
                                    </ButtonGroup>
                                </Center>
                            </CardFooter>
                            </Card>
                        </Center>

                    </div>
                    )
            })}

        </div>
    )
}

export default ItemDetail;
