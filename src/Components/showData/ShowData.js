import {SimpleGrid, Text, Input, Flex } from '@chakra-ui/react'
import {Search2Icon} from '@chakra-ui/icons'
import { Ring } from '@uiball/loaders'
import { ShowInfo } from '../showInfo/ShowInfo'
import { useFetch } from '../../Hooks/useFetch'
export const ShowData = () => {
    const {api, loading, character, setCharacter} = useFetch()

    const handleInputChange = (e) => {
      setCharacter(e.target.value)
    }

  return (
    <>
        <hr />
         <Flex justifyContent={'center'} >
            <Input 
            color='white'
            type={'text'}
            placeholder='Example: Rick, Morty, etc..'
            _placeholder={{ color: 'inherit' }}
            width={'25%'}
            borderWidth={'2px'}
            shadow={'sm'}
            m={2}
            value={character}
            onChange={handleInputChange}
            />
          <Search2Icon my={'auto'} h={8} w={8}/>
        </Flex>

        {loading === true ? <Flex justifyContent={'center'}><Ring size={100} lineWeight={5} speed={2} color='white'/></Flex> : 
        <SimpleGrid columns={4} spacing={2}>
            {api?.map(item => <ShowInfo key={item.id} character={item.character} status={item.status} image={item.image}/>)}
        </SimpleGrid>
        }
    </>
  )
}
