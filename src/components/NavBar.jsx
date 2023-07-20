import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer, Center } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <Box>
      <Flex>
        <Center w='200px' h='20' bg='black.500' >
          HeyCats!
        </Center>
        <Spacer />
        <Center w='200px' h='20' bg='black.500' >
          <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Productos
              </MenuButton>
                  <MenuList>
                      <MenuItem>Producto A</MenuItem>
                      <MenuItem>Producto B</MenuItem>
                      <MenuItem>Producto C</MenuItem>
                  </MenuList>
          </Menu>
        </Center>
        <Spacer />
        <Center w='200px' h='20' bg='black.500' >
          <CartWidget/>
        </Center>
      </Flex>
    </Box>
  )
}

export default NavBar