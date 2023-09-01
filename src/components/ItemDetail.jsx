import React from 'react';
import { Card, Stack, CardBody, CardFooter, Heading, Text, Center, Divider, Image } from '@chakra-ui/react';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
  return (
    <div>
      {producto && (
        <div key={producto.id}>
          <Center className='card-center'>
            <Card maxW='sm'>
              <CardBody>
                <Image src={producto.imagen} alt={producto.nombre} borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{producto.nombre}</Heading>
                  <Text>{producto.descripcion}</Text>
                  <Text fontSize='25px' align='end'>
                    ${producto.precio}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ItemCount producto={producto} />
              </CardFooter>
            </Card>
          </Center>
        </div>
      )}
    </div>
  );
};

export default React.memo(ItemDetail);
