import React, { useState, useEffect } from "react";
import PacksList from "../components/PacksList";
import axios from "axios";

const PacksPage = () => {

    const [packInfo, setPackInfo] = useState([]);

    useEffect((packInfo) => {
        axios.get('/packs')
            .then(res => {
                setPackInfo(res.data)
            })
    }, []);

    return(
        <>
            <h1>Packs</h1>
            <PacksList packInfo={ packInfo } />
        </>
    )
}

export default PacksPage;