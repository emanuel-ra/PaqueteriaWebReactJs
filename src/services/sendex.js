const URL_API = 'https://localhost:44355/api'
export const searchSendex = async ({ search }) => {
    if (search === '') return null
    if (!search.match(/^[0-9]{5}/)) return null

    try {
        const response = await fetch(`${URL_API}/sendex/?zipcode=${search}`)
        const json = await response.json()

        const data = json.data
        
        return data?.map(d => ({   
            cp: d.codigoPostal,
            estado: d.estado,
            ciudad: d.ciudad ,
            colonia: d.colonia ,
            entrega: d.entregaDomicilio ,
            recoleccion: d.recoleccionDomicilio ,
        }))

    } catch (e) {
        throw new Error('Error searching movies')
    }
}