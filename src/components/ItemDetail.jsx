import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Stack, CardBody, CardFooter, Heading, Text, Center, Divider, Image } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ productos }) => {
    const { id } = useParams();

    const productoActual = productos.find((producto) => producto.id === parseInt(id));

    return (
        <div>
            {productoActual && (
                <div key={productoActual.id}>
                    <Center className='card-center'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={productoActual.img}
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{productoActual.nombre}</Heading>
                                    <Text>{productoActual.descripcion}</Text>
                                    <Text fontSize='25px' align='end'>
                                        ${productoActual.precio}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ItemCount producto={productoActual} />
                            </CardFooter>
                        </Card>
                    </Center>
                </div>
            )}
        </div>
    );
}

export default React.memo(ItemDetail)
