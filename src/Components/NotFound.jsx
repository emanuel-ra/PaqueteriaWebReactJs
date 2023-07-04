import { useId } from "react"
import { notfound } from "../assets/assets"


function NotFound() {
    const notFoundId = useId()
  return (
    <>
        <div className="w-full flex justify-center items-center flex-col" key={notFoundId}>
            <img src={notfound} alt="Not found" />
            <h3 className="text-red-500 font-semibold text-lg">❌ Not Found ❌</h3>
        </div>
    </>
  )
}

export default NotFound