import { useId } from "react"

function EstafetaZones({ zones }) {
    const thColCpId = useId();
    const thColMunicipioId = useId();
    const thColEstadoId = useId();
    const thColPeriodicidad = useId();
    const thColForzoso = useId();
    const thColReexpedicion = useId();
    const thColFinSemana = useId();
    const thColExtendido = useId();
    const thColDias = useId();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th key={thColCpId} scope="col" className="px-6 py-3">Código Postal</th>
                    <th key={thColMunicipioId} scope="col" className="px-6 py-3">Municipio</th>
                    <th key={thColEstadoId} scope="col" className="px-6 py-3">Estado</th>
                    <th key={thColPeriodicidad} scope="col" className="px-6 py-3">Periodicidad</th>
                    <th key={thColForzoso} scope="col" className="px-6 py-3">Es Ocurre Forzoso</th>
                    <th key={thColReexpedicion} scope="col" className="px-6 py-3">Reexpedición</th>
                    <th key={thColFinSemana} scope="col" className="px-6 py-3">Entrega fin de semana</th>
                    <th key={thColExtendido} scope="col" className="px-6 py-3">Horario extendido</th>
                    <th key={thColDias} scope="col" className="px-6 py-3">Dias</th>
                </tr>
            </thead>
            <tbody>
                {zones?.map( zone => (
                    <tr key={zone.id} className="bg-white dark:bg-gray-800">
                        <td scope="row" className="px-6 py-4 border-b">{zone.cp}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.municipio}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.estado}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.periodisidad}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.forzoso} {(zone.forzoso==='SI') && '🛑'}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.reexpedicion}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.entregaFinSemana}</td>
                        <td scope="row" className="px-6 py-4 border-b">{zone.horarioExtendido}</td>
                        <td>
                            <ul key={`${zone.id}zones`}>
                                <li>Lunes {(zone.lunes=='X') ? '✔':'❌'}</li>
                                <li>Martes {(zone.martes=='X') ? '✔':'❌'}</li>
                                <li>Miércoles {(zone.miercoles=='X') ? '✔':'❌'}</li>
                                <li>Jueves {(zone.jueves=='X') ? '✔':'❌'}</li>
                                <li>Viernes {(zone.viernes=='X') ? '✔':'❌'}</li>
                                <li>Sábado {(zone.sabado=='X') ? '✔':'❌'}</li>
                                <li>Domingo {(zone.domingo=='X') ? '✔':'❌'}</li>
                            </ul>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>        
    </div>
  )
}

export default EstafetaZones