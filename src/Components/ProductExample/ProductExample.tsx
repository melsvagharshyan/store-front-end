import styles from './ProductExample.module.scss';
import React from "react";
import {useAppSelector} from "../../app/hooks";
import FilterAside from "../FilterAside/FilterAside";




const ProductExample: React.FC =  ()=> {
const {products} = useAppSelector(state=> state.productsState);


    return (
        <div className={styles.product_example}>
            <FilterAside/>
             <div className={styles.products_container}>
                 {
                     products.map((p)=>{
                         return (
                             <div className={styles.product}>
                                 <img src={p.image} alt={`${p.category}`}/>
                                 <p>{p.id}</p>
                             </div>
                         )
                     })
                 }
             </div>
        </div>
    )
}


export default ProductExample;