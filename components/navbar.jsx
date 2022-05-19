import { Box, Text } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
export default function Navbar() {
    return (
        <Box bg='#51a547' w='100%' borderRadius='lg' p='2' boxShadow='base' display='flex'>
            <Text>Portal do Açaí</Text>
            <HamburgerIcon/>
        </Box>
    )
}