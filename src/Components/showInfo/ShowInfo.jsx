import React from 'react'
import {Text, Image, VStack, Badge} from '@chakra-ui/react'


export const ShowInfo = ( { character, status, image } ) => {
   
      return (
                        <VStack m={10}>
                            <Text fontSize={'30px'} fontWeight={'light'}>
                                {character}
                            </Text>
                            <Image borderWidth={'1px'} borderRadius={500} h={200} shadow={'lg'} src={image}></Image>

                            {status === 'Alive' 
                                ? 
                                <Text fontSize={'18px'} fontWeight={'light'} color={'alive.700'}> 
                                   <Badge fontSize={'15px'} colorScheme='green'>{status}</Badge>
                                </Text> 
                                    : 
                                <Text fontSize={'18px'} fontWeight={'light'} color={'dead.500'}> 
                                   <Badge fontSize={'15px'}  colorScheme='removed'>{status}</Badge>
                                </Text>}

                        </VStack>
      )
  
}
