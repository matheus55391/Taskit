import axios from 'axios'
import { useEffect, useState } from 'react'

export function useFetch<T = unknown>(url: string, ) {
	const [data, setData] = useState(null)
	const [error, setError] = useState('')
	const [loaded, setLoaded] = useState(false)

	useEffect(()=>{
		axios
			.get(url)
			.then((response)=> setData(response.data))
			.catch((error)=> setError(error.message))
			.finally(()=> setLoaded(true))
	},[])

	return { data, error, loaded }
}