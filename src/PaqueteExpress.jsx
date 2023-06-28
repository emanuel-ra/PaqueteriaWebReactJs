import { useEffect, useRef, useState, useCallback   } from "react"
import SearchIcon from "./Components/Icons/SearchIcon"
import { usePaqueteExpress } from "./hooks/usePaqueteExpress"
import PaqueteExpressZones from "./Components/Zones/PaqueteExpressZones"
import debounce from "just-debounce-it"

function useSearch()
{
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {
        isFirstInput.current = search === ''
        return
        }

        if (search === '') {
            setError('Capture código postal valido')
            return
        }

        /**/
        if (search.match(/^[aA-zZ]/)) {
            setError('Ingrese código postal valido')
            return
        }
        

        if (search.length < 5) {
            setError('La busqueda debe de tener almenos 5 caracteres')
            return
        }

        setError(null)
    }, [search])

    return { search, updateSearch, error }
}

function PaqueteExpress() {
    
    const [sort, setSort] = useState(false)

    const { search, updateSearch, error } = useSearch()
    const { zones, getZones, loading} = usePaqueteExpress({ search, sort })

    const debounceGetZones = useCallback(
        debounce(search => {
          getZones({ search })
        }, 300)
        , [getZones]
      )

      const handleSubmit = (event) => {
        event.preventDefault()
        getZones({ search })
      }
    
      const handleChange = (event) => {
        const newSearch = event.target.value
        updateSearch(newSearch)
        debounceGetZones(newSearch)
      }

  return (
    <>
        <div className="py-2">            
            <h1>Paquete express</h1>

            <form className="form" onSubmit={handleSubmit}>               
                <div className="pb-4 bg-white dark:bg-gray-900">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" onChange={handleChange} value={search} className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ejemplo: 44100" />
                    </div>
                </div>

            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}


            <section>
                { loading ? <p>Cargando...</p> : <PaqueteExpressZones zones={zones} /> }
            </section>
        </div>
    </>
  )
}

export default PaqueteExpress