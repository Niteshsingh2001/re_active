import { useEffect, useState } from "react"

export default function UseFetch(url: string, options?: { [key: string]: string }) {
    const [data, setData] = useState<Array<any>>([])
    const [pending, setPending] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function fetchData(url: string, options?: { [key: string]: string }) {
        setPending(true)
        try {
            const response = await fetch(url, { ...options })
            if (!response.ok) throw new Error(response.statusText)
            const result = await response.json()
            setData(result)
            setError(null)
        } catch (error) {
            setError(`${error}, Something went wrong`)

        } finally {
            setPending(false)
        }
    }
    useEffect(() => {
        fetchData(url, options && options)

    }, [url, options])


    return { data, pending, error }

}
