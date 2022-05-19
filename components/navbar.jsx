import { Box, Spacer, Text, Image, Link } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
export default function Navbar() {
    return (
        <Box bg='#51a547' w='100%' borderBottomRadius='lg' p='2%' boxShadow='base' display='flex'>
            <Link href='/' boxSize='35%' >
                <Image src='/logoPortal.png' alt='Portal do Açaí' />
            </Link>
            <Spacer />
            <HamburgerIcon boxSize='10%' />
        </Box>
    )
}