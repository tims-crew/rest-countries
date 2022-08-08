import { Flex, Text, Button, InputGroup, InputLeftAddon, Input, useColorMode, useColorModeValue } from "@chakra-ui/react"

const Header = () => {
    const {toggleColorMode} = useColorMode()
    const colorMode = useColorModeValue("gray.50", "gray.600")
    return (
        <Flex boxShadow='md' bg={colorMode} height="8vh"  color="gray.400" alignItems="center" flexDirection="row" justifyContent="space-between" p="3% 10%">
            <Text fontSize="3xl">Where in the world?</Text>
            <Button variant="outline" onClick={toggleColorMode}>🌙 Night Mode</Button>
        </Flex>
    )
}

export default Header  