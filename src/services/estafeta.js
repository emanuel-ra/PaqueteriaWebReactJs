const URL_API = 'https://localhost:44355/api'
export const searchEstafeta = async ({ search }) => {
    if (search === '') return null
    if (!search.match(/^[0-9]{5}/)) return null

    try {
        const response = await fetch(`${URL_API}/Estafeta/?zipcode=${search}`)
        const json = await response.json()
        
        const data = json.data
        
        return data?.map(d => ({   
            cp: d.codigoPostal ,
            estado: d.estado ,            
            municipio: d.municipio ,
            periodisidad: d.periodisidad ,
            forzoso: d.forzoso ,
            reexpedicion: d.reexpedicion ,
            entregaFinSemana: d.entregaFinSemana ,
            horarioExtendido: d.horarioExtendido ,
            lunes: d.lunes ,
            martes: d.martes ,
            miercoles: d.miercoles ,
            jueves: d.jueves ,
            viernes: d.viernes ,
            sabado: d.sabado ,
            domingo: d.domingo 
        }))

    } catch (e) {
        throw new Error('Error searching movies')
    }
}