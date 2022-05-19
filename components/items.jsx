import { Box, Image, Text } from "@chakra-ui/react"
import { } from '@chakra-ui/icons'
export default function Items() {
    return (
        <Box p='2%'>
            <Box boxSize='40%' borderWidth='1px' borderRadius='lg' boxShadow='base'  >
                <Image boxSize='80%' w='100%' src="/acai.jpg" alignContent='center' />

                <Box p='2%'>
                    <Text>Açaí 500ml</Text>
                    <Text>R$ 15,00</Text>
                </Box>

            </Box>
        </Box>
    )
}