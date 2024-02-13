import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl, setCloseFomr, setCloseModalUpdate, setCloseModalDelete, setCloseModalCreate, setCloseModalError, setIsLoading) => {
  const [infoApi, setInfoApi] = useState()
  
  //GET
  const getApi = (path) => {
    const url = `${baseUrl}${path}/` 
    axios.get(url)
      .then( res => setInfoApi(res.data))
      .catch( err => console.error(err))
      .finally(() => setIsLoading(false))
  }

  //POST

  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/` 
    axios.post(url, data)
      .then( res => {
        setInfoApi([...infoApi, res.data])
        setCloseFomr(true)
        setCloseModalCreate(false)
      })
      .catch( err => setCloseModalError(false))
      .finally(() => setIsLoading(false))
  }

  //DELETE

  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.delete(url)
      .then( res => {
        const infoApiFiltered = infoApi.filter(e => e.id !== id)
        setInfoApi(infoApiFiltered)
        setCloseModalDelete(false)
      })
      .catch( err => console.error(err))
      .finally(() => setIsLoading(false))
    }

  //UPDATE

  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.patch(url, data)
      .then( res => {
        const infoApiMapped = infoApi.map(e => e.id === id ? res.data : e)
        setInfoApi(infoApiMapped)
        setCloseFomr(true)
        setCloseModalUpdate(false)
      })
      .catch( err => setCloseModalError(false))
      .finally(() => setIsLoading(false))
  }

  return [ infoApi, getApi, postApi, deleteApi, updateApi ]
}

export default useFetch