import { useState, useMemo, memo, useRef } from "react";
function UseMemo() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])
    const nameRef = useRef()
    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }
        ])
        setName('')
        setPrice('')

        nameRef.current.focus()
    }
    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            return result + prod.price
        }, 0)
        return result

    }, [products])
    return (
        <>
            <input
                ref={nameRef}
                value={name}
                placeholder="name"
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="price"
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>send</button>
            <br />

            Total:{total}
            <ul>
                {products.map((product, index) =>
                (
                    <li key={index}>
                        {product.name}-{product.price}
                    </li>

                ))}
            </ul>
        </>
    );
}

export default UseMemo;