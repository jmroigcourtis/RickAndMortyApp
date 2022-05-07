import { extendTheme, theme } from '@chakra-ui/react'

export default extendTheme({
    config: {
        initialColorMode: 'dark',
    },
    colors:{
        alive: theme.colors.whatsapp,
        dead: theme.colors.red
    },
    
})