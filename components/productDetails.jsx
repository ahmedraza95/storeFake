import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
function Product() {
    const [post, setPost] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then((res) => res.json())
            .then((data) => setPost(data)
            )
    }, [])
    const filtered = post.filter((data) => data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    console.log(filtered);
    return (
        <>
            <form className="form">

                <label htmlFor="search">
                    <input onChange={(e) => {
                        setSearch(e.target.value)
                    }} className="input" type="text" required="" placeholder="Search twitter" id="search" />
                    <div className="fancy-bg"></div>
                    <div className="search">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                            <g>
                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                            </g>
                        </svg>
                    </div>
                    <button className="close-btn" type="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </label>
            </form>
            <div className='look'>
                {
                    filtered.map((pro) => (
                        <Link  to={`/product/${pro.id}`} key={pro.id} className='paraentDiv'>
                            <div><img width={100} src={pro.image} alt="" /></div>
                            <h1 className="textStyle">{pro.title}</h1>
                            <p  className="textStyle">{pro.description}</p>
                            <p  className="textStyle">${pro.price}</p>
                        </Link>
                    ))
                }
            </div>

        </>
    )
}

export default Product;