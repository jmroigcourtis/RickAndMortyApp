import React from 'react'
import {Text, Image, VStack, Icon} from '@chakra-ui/react'
import {GoPrimitiveDot} from 'react-icons/go'


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
                                   <Icon pos={'relative'} top={'3px'} as={GoPrimitiveDot} color={'green'}/> {status}
                                </Text> 
                                    : 
                                <Text fontSize={'18px'} fontWeight={'light'} color={'dead.500'}> 
                                   <Icon pos={'relative'} top={'3px'} as={GoPrimitiveDot} color={'red'} /> {status}
                                </Text>}

                        </VStack>
      )
  
}
