import { Box, Spacer, Text, Image, Link } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
export default function Navbar() {
    return (
        <Box bg='#51a547' w='100%' h='70' borderBottomRadius='lg' p='4' boxShadow='base' display='flex'>
            <Link href='/' boxSize='150' >
                <Image src='/logoPortal.png' alt='Portal do Açaí' />
            </Link>
            <Spacer />
            <HamburgerIcon boxSize='30' />
        </Box>
    )
}