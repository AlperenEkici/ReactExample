import { useEffect, useState } from "react"

const useFetch = (url) =>{
    const [data, setData] = useState([])
    const [isPending,setIsPending] = useState(true)

    const fetchData = async (url) => {
        try {
          const response = await fetch(url)
          const data = await response.json()
          setData(data)
          setIsPending(false)
        } catch (err) {
          console.error(err)
        }
      }
    
    useEffect(()=>{
        fetchData(url)
    },[])

    return  {data,isPending}
}
export default useFetch