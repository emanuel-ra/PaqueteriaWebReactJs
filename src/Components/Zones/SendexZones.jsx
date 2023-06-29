import { useId } from 'react'

function SendexZones({ zones }) {

    const thColCpId = useId();    
    const thColCiudadId = useId();
    const thColColoniaId = useId();
    const thColEstadoId = useId();
    const thColEntregaId = useId();
    const thColRecoleccionId = useId();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th key={thColCpId} scope="col" className="px-6 py-3">Código Postal</th>
                    <th key={thColCiudadId} scope="col" className="px-6 py-3">Ciudad</th>
                    <th key={thColColoniaId} scope="col" className="px-6 py-3">Colonia</th>
                    <th key={thColEstadoId} scope="col" className="px-6 py-3">Estado</th>
                    <th key={thColEntregaId} scope="col" className="px-6 py-3">Entrega</th>
                    <th key={thColRecoleccionId} scope="col" className="px-6 py-3">Recolección</th>
                </tr>
            </thead>
            <tbody>
                {zones?.map( zone => (
                    <tr key={zone.id} className="bg-white dark:bg-gray-800">
                        <td scope="row" className="px-6 py-4 border-b">{zone.cp}</td>                        
                        <td scope="row" className="px-6 py-4 border-b">{zone.ciudad}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.colonia}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.estado}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.entrega}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.recoleccion}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default SendexZones