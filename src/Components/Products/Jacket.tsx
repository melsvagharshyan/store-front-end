import React, {useEffect} from 'react';
import ProductExample from "../ProductExample/ProductExample";
import {useAppDispatch} from "../../app/hooks";
import {useLocation} from "react-router-dom";
import {getProducts} from "../../app/Slices/productsSlice";

const Jacket = () => {
    const dispatch = useAppDispatch();
    const path = useLocation();
    let category = path.pathname.substring(1, path.pathname.length);

    useEffect(() => {
        dispatch(getProducts("jacket"))
    }, [category])


    return <ProductExample/>
};

export default Jacket;