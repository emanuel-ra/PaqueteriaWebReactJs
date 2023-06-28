const URL_API = 'https://localhost:44355/api'
export const searchPaqueteExpress = async ({ search }) => {
    if (search === '') return null
    if (!search.match(/^[0-9]{5}/)) return null

    try {
        const response = await fetch(`${URL_API}/PaqueteExpress/?zipcode=${search}`)
        const json = await response.json()

        const data = json.data
        
        return data?.map(d => ({   
            cp: d.codigoPostal,
            origen: d.origen,
            sucursal: d.sucursal ,
            municipio: d.municipio ,
            ciudad: d.ciudad ,
            colonia: d.colonia ,
            estado: d.estado ,
            cobertura: d.cobertura ,
        }))

    } catch (e) {
        throw new Error('Error searching movies')
    }
}