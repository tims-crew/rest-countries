import { Flex, InputGroup, InputLeftAddon, Input, Button } from "@chakra-ui/react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

import { ChevronDownIcon } from "@chakra-ui/icons"

const SearchPanel = () => {
    return (
        <Flex alignItems="center" flexDirection="row" justifyContent="space-between" p="3% 10%">
            <InputGroup w="30%" mb={3}>
                <InputLeftAddon children=' 🔎' />
                <Input type='text' placeholder='Search for a country...' size="md" />
            </InputGroup>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Filter by Regions
                </MenuButton>
                <MenuList>
                    <MenuItem>Africa</MenuItem>
                    <MenuItem>America</MenuItem>
                    <MenuItem>Asia</MenuItem>
                    <MenuItem>Europe</MenuItem>
                    <MenuItem>Oceania</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default SearchPanel  