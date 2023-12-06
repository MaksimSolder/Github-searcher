import React, {useEffect, useState} from 'react';
import {githubApi} from "../store/github/github.api";
import Cards, {IProduct} from "../components/Cards";

const HomePage = () => {
    const [products, setProducts] = useState<any>([]);
    const {isLoading, isError, data} = githubApi.endpoints.searchUsers.useQuery({skip: 0, limit: 10});
    useEffect(() => {
        if (!isLoading) {
            setProducts(data.products);
        }
    },[]);
    return (
        <div className="grid grid-rows-3 gap-2 m-4 md:grid-cols-2 2xl:grid-cols-4">
            {products.map((product:IProduct, index:number) => {
                return <Cards
                    key={index}
                    title={product.title}
                    price={product.price}
                    thumbnail={product.thumbnail}
                    description={product.description}
                    images={product.images}
                    rating={product.rating}/>
            })}
        </div>
    );
};

export default HomePage;