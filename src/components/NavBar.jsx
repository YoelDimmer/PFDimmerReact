import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer, Center, Stack } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import brand from '../../media/brand.png'
import { Link } from 'react-router-dom'
import '../index.css' 


const NavBar = () => {
  return (
    <Box className="navbar">
      <Flex>
        <Center w='300px' h='20' bg='black.500' >
          <Link to={"/"}>
          <img src={brand} alt=""/>
          </Link>
        </Center>
        <Spacer />
        <Center w='200px' h='20' bg='black.500' >
          <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Productos
              </MenuButton >
                  <MenuList>
                      <MenuItem>
                      <Link to={`/category/${'cat1'}`}>
                        Alimentos
                      </Link>
                      </MenuItem>
                      <MenuItem>
                      <Link to={`/category/${'cat2'}`}>
                        Rascadores
                      </Link>
                      </MenuItem>
                      <MenuItem>
                      <Link to={`/category/${'cat3'}`}>
                        Camas/Sillones
                      </Link>
                      </MenuItem>
                      <MenuItem>
                      <Link to={`/category/${'cat4'}`}>
                        Juguetes
                      </Link>
                      </MenuItem>
                      <MenuItem>
                      <Link to={`/category/${'cat5'}`}>
                        Ropa
                      </Link>
                      </MenuItem>
                  </MenuList>
          </Menu>
        </Center>
        <Spacer />
        <Center w='200px' h='20' bg='black.500' >
          <Link to={"/cart"}>
            <CartWidget/>
          </Link>
        </Center>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'} >
            Iniciar Sesion
          </Button>
          <Button
            marginTop={5}
            marginRight={5}
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={400}
            bg={'gray.100'}
            href={'#'}
            _hover={{
              bg: 'gray.300',
            }}>
            Registrarse
          </Button>
        </Stack>
      </Flex>
    </Box>
  )
}

export default NavBar