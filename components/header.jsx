import { Link } from "react-router-dom"
import { useState } from "react"
function Headers() {
   const [search ,setSearch] = useState('')
    return (
        <>
            <header>
                <h1>Store Api</h1>
                <form className="form">
                </form>
                <Link className="Links" to={'/about'}>about</Link>
                <Link className="Links" to={'/home'}>Homes</Link>
                {/* <Link className="Links" to={'/about'}>Homes</Link> */}
                {/* <Link to={""}>About</Link> */}
            </header>

        </>
    )
}

export default Headers