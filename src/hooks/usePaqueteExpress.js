import { useRef, useState, useMemo, useCallback } from 'react'
import { searchPaqueteExpress } from '../services/paqueteexpress'


export function usePaqueteExpress ({ search, sort }) {
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
        const newZones = await searchPaqueteExpress({ search })
        setZones(newZones)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }, [])
    
    const sortedZones = useMemo(() => {
      return sort
        ? [...zones].sort((a, b) => a.municipio.localeCompare(b.municipio))
        : zones
    }, [sort, zones])
  
    return { zones: sortedZones, getZones, loading }
  }