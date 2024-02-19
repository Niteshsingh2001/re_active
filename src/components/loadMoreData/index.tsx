import React, { useEffect, useState } from 'react'

interface Products {
    id: number
    title: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: URL
    images: Array<URL>
}

export default function LoadMoreData() {

    const [products, setProducts] = useState<Array<Products>>()
    const [TotalProducts, setTotalProducts] = useState<number>(0)

    async function getProducts() {
        try {
            const response = await fetch("https://dummyjson.com/products?limit=10&skip=10", {
                mode: "no-cors"
            })
            console.log(response.json());
        } catch (error) {
            console.log("err", error);

        }


    }

    useEffect(() => {

        const data = getProducts()


    }, [])


    return (
        <div>



            {
                products && products.length < TotalProducts && <button type='button'>Load More</button>

            }

        </div>
    )
}
