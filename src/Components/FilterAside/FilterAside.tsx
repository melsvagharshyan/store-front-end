import styles from './FilterAside.module.scss';
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {filter} from "../../app/Slices/productsSlice";
import {useLocation} from "react-router-dom";


const FilterAside: React.FC = () => {
    const {items} = useAppSelector(state => state.filterState);
    const dispatch = useAppDispatch();
    let path = useLocation().pathname;
    let category = path.substring(1, path.length);
    const [brand, setBrand] = useState("");
    const [gender, setGender] = useState("");
    const [price, setPrice] = useState({start: 1, until: 1000});

    function BrandSetter(brand: string) {
        setBrand(brand);
    }

    function GenderSetter(gender: string) {
        setGender(gender);
    }


    return (
        <div className={styles.filter_aside}>
            <h1>FILTERS</h1>
            <div className={styles.item}>
                <h3>BRAND</h3>
                {items[0].choice.map(i => {
                    return <span>
                             <input type="radio" onChange={() => BrandSetter(i)} name={"brand"}/>
                             <p>{i}</p>
                             </span>
                })}
            </div>
            <div className={styles.item}>
                <h3>GENDER</h3>
                {items[1].choice.map(i => {
                    return <span>
                             <input type="radio" onChange={() => GenderSetter(i)} name={"gender"}/>
                             <p>{i}</p>
                             </span>
                })}
            </div>
            <div className={styles.item}>
                <h3>PRICE</h3>
                <input type="text" placeholder={"Սկսած"}
                       onChange={(e) => setPrice({...price, start: +e.target.value})}/>
                <input type="text" placeholder={"Մինչև"}
                       onChange={(e) => setPrice({...price, until: +e.target.value})}/>
            </div>
            <button onClick={() => dispatch(filter({
                brand,
                gender,
                price: {start: price.start, until: price.until},
                category: category
            }))}>Filter
            </button>
        </div>
    )
}


export default FilterAside;