import React from 'react'
import {Text, Image, VStack, Box, SimpleGrid} from '@chakra-ui/react'

export const ShowInfo = ({character, status, image }) => {
   
      return (
                        <VStack mt={10}>
                            <Text fontSize={'30px'}>
                                Name:{character}
                            </Text>
                            <Image borderWidth={'1px'} borderRadius={500} shadow={'lg'} src={image}></Image>
                            <Text fontSize={'20px'}> 
                                Status: {status}
                            </Text>
                        </VStack>
      )
  
}
