import { useId } from "react"

function PaqueteExpressZones({ zones }) {
    const thColCpId = useId();
    const thColOrigenId = useId();
    const thColSucursalId = useId();
    const thColMunicipioId = useId();
    const thColCiudadId = useId();
    const thColColoniaId = useId();
    const thColEstadoId = useId();
    const thColCoberturaId = useId();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th key={thColCpId} scope="col" className="px-6 py-3">Código Postal</th>
                    <th key={thColOrigenId} scope="col" className="px-6 py-3">Origen</th>
                    <th key={thColSucursalId} scope="col" className="px-6 py-3">Sucursal</th>
                    <th key={thColMunicipioId} scope="col" className="px-6 py-3">Municipio</th>
                    <th key={thColCiudadId} scope="col" className="px-6 py-3">Ciudad</th>
                    <th key={thColColoniaId} scope="col" className="px-6 py-3">Colonia</th>
                    <th key={thColEstadoId} scope="col" className="px-6 py-3">Estado</th>
                    <th key={thColCoberturaId} scope="col" className="px-6 py-3">Cobertura</th>
                </tr>
            </thead>
            <tbody>
                {zones?.map( zone => (
                    <tr key={zone.id} className="bg-white dark:bg-gray-800">
                        <td scope="row" className="px-6 py-4 border-b">{zone.cp}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.origen}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.sucursal}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.municipio}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.ciudad}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.colonia}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.estado}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.cobertura}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default PaqueteExpressZones