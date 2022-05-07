import {useState, useEffect} from 'react'

export const useFetch =  () => {
    const [loading, setLoading] = useState(true)
    const [api, setApi] = useState()
    const [character, setCharacter] = useState('')

    const customFetch = async () => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
        const data = await res.json()
        const {results} = data
        const getApiData = results.map( ({id, name, image, status}) => {
            return {
                id: id,
                character: name,
                status: status,
                image: image
            }
        })
        setApi(getApiData)
    }

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
            customFetch()
        }, 1000 )
    })

    

  return {
    loading,
    api,
    setCharacter,
    character,
  }
}
