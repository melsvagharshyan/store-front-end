import React, {useEffect} from 'react';
import ProductExample from "../ProductExample/ProductExample";
import {useLocation} from "react-router-dom";
import {getProducts} from "../../app/Slices/productsSlice";
import {useAppDispatch} from "../../app/hooks";

const Watch = () => {
    const dispatch = useAppDispatch();
    const path = useLocation();
    let category = path.pathname.substring(1,path.pathname.length);

    useEffect(()=>{
        dispatch(getProducts(category))
    },[category])


    return <ProductExample />
};

export default Watch;
