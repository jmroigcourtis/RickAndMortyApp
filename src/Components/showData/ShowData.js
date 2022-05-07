import {SimpleGrid, Text, Input, Flex } from '@chakra-ui/react'
import {Search2Icon} from '@chakra-ui/icons'
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
            type={'text'}
            placeholder='Example: Rick, Morty, etc..'
            width={'25%'}
            borderWidth={'2px'}
            shadow={'sm'}
            m={2}
            value={character}
            onChange={handleInputChange}
            />
          <Search2Icon my={'auto'} h={8} w={8}/>
        </Flex>

        {loading === true ? <Text textAlign={'center'} fontSize={'30px'}>Cargando</Text> : 
        <SimpleGrid columns={4} spacing={2}>
            {api?.map(item => <ShowInfo key={item.id} character={item.character} status={item.status} image={item.image}/>)}
        </SimpleGrid>
        }
    </>
  )
}
