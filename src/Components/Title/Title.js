import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import  RickMortyPic  from '../../Images/RickMorty.png'

export const Title = () => {
  return (
      <Flex justifyContent={'center'}>
          <Image h={'350px'} src={RickMortyPic} alt='Rick and Morty picture'/>
      </Flex>
  )
}
