import { useRef, useState, useMemo, useCallback } from 'react'
import { searchSendex } from '../services/sendex'


export function useSendex ({ search, sort }) {
    const [zones, setZones] = useState([])
    const [loading, setLoading] = useState(false)
    // el error no se usa pero puedes implementarlo
    // si quieres:
    const [, setError] = useState(null)
  
    const previousSearch = useRef(search)
  
    const getZones = useCallback(async ({ search }) => 
    {
      if (search === previousSearch.current) return 
  
      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newZones = await searchSendex({ search })
        setZones(newZones)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }, [])
    
    const sortedZones = useMemo(() => {
      return sort
        ? [...zones].sort((a, b) => a.ciudad.localeCompare(b.ciudad))
        : zones
    }, [sort, zones])
  
    return { zones: sortedZones, getZones, loading }
  }