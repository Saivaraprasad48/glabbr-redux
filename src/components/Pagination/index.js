import { useEffect, useState } from "react"
import "./index.css"

const Pagination = (props) => {
    const [page, setPage] = useState(1)
    const { count, postPerPage ,setGo} = props 
    let buttons = []
    for (let i = 1; i <= Math.ceil(count / postPerPage); i++){
        buttons.push(i)
    }
  
    useEffect(() => {
        setGo(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page])

    return (
        <div className="btn-container">
            {buttons.map((e, index) => {
                return <button key={index} className={`page-btn`} onClick={()=> setPage(e)}> { e } </button>
            })}
        </div>
    )
}

export default Pagination