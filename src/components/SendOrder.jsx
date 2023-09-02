import { FormControl, FormLabel, Input, Button, Alert, AlertIcon, AlertTitle, AlertDescription, Center, Link } from '@chakra-ui/react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import '../index.css';

const SendOrder = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [orderId, setOrderId] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const db = getFirestore();
    const ordersCollection = collection(db, 'orden');

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id);
            setFormSubmitted(true);
        });
    };

    const order = {
        name,
        email,
        number,
    };

    return (
        <>
            {formSubmitted ? (
                <>
                    <Alert
                        status="success"
                        variant="subtle"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                        height="200px"
                        bgColor="gray.200"
                    >
                        <AlertIcon boxSize="40px" mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize="lg">
                            Compra realizada!
                        </AlertTitle>
                        <AlertDescription maxWidth="sm">
                            Gracias por realizar su compra, {name}!. Su numero de orden es: {orderId}. Nos contactaremos en breve vía e-mail
                        </AlertDescription>
                    </Alert>
                    <Center>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://media.tenor.com/f-pzyh_lVwQAAAAd/gato-moviendo-la-cabeza.gif"
                                alt="Compra realizada"
                                style={{ maxWidth: '100%', marginTop: '20px' }}
                            />
                        </div>
                    </Center>
                    <Center style={{ marginTop: '30px' }}>
                        <Link to={`/home`} style={{ textDecoration: 'none' }}>
                            <Button colorScheme="gray">Volver al inicio</Button>
                        </Link>
                    </Center>
                </>
            ) : (
                <form>
                    <div className="card-center">
                        <h1>Ya casi terminamos! Por favor, dejanos tus datos a continuación para finalizar la compra</h1>
                    </div>
                    <div>
                        <FormControl isRequired>
                            <FormLabel>Nombre y apellido</FormLabel>
                            <Input
                                style={{ backgroundColor: 'white', maxWidth: '500px' }}
                                placeholder="Ingresa tu nombre y apellido"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl isRequired>
                            <FormLabel>E-mail</FormLabel>
                            <Input
                                style={{ backgroundColor: 'white', maxWidth: '500px' }}
                                placeholder="Ingresa tu e-mail"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <FormLabel>Numero de telefono</FormLabel>
                            <Input
                                style={{ backgroundColor: 'white', maxWidth: '500px' }}
                                placeholder="Ingresa tu numero de telefono"
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </FormControl>
                    </div>
                    <div className="btn-order">
                        <Button mt={4} colorScheme="gray" type="submit" onClick={handleSubmit}>
                            Enviar
                        </Button>
                    </div>
                </form>
            )}
        </>
    );
};

export default SendOrder;
