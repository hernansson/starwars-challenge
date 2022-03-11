import { useState, useEffect, useCallback } from 'react'
const useAsync = (asyncFunction, params, immediate = true) => {
    const [status, setStatus] = useState('pending')
    const [value, setValue] = useState(null)
    const [error, setError] = useState(null)

    const execute = useCallback(() => {
        setStatus('pending')
        setValue(null)
        setError(null)
        return asyncFunction(params)
            .then((response) => {
                setValue(response)
                setStatus('success')
            })
            .catch((error) => {
                setError(error)
                setStatus('error')
            })
    }, [asyncFunction])

    useEffect(() => {
        if (immediate) {
            execute()
        }
    }, [execute, immediate])
    return { execute, status, value, error }
}
export default useAsync
