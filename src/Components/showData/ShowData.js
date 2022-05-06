import {SimpleGrid } from '@chakra-ui/react'
import { ShowInfo } from '../showInfo/ShowInfo'
import { useFetch } from '../../Hooks/useFetch'


export const ShowData = () => {
    const {api, loading} = useFetch()
  return (
    <>
        <h1>Data</h1>
        <hr />
        {loading === true ? <h2>Cargando</h2> : 
        <SimpleGrid columns={2} spacing={2}>
            {api?.map(item => <ShowInfo id={item.id} character={item.character} status={item.status} image={item.image}/>)}
        </SimpleGrid>
        }
    </>
  )
}
