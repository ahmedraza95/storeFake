import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProDet() {
    const { id } = useParams('');
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id])
    console.log(product);

    return (
        <>
                    <h1 className="text-4xl"> Product Detail</h1>
            {product ? (
                <div className="productDetailsMain">
                    <div className="imgDiv"><img src={product.image} alt="" /></div>
                    <div className="Detailss">
                        <h3>{product.title}</h3><br />
                        <p>{product.description}</p><br />
                        <p>${product.price}</p><br /><br /><br /><br /><br />
                        <button>Add To Cart</button>
                    </div>
                </div>

            ) : null}
        </>
    )
}
export default ProDet