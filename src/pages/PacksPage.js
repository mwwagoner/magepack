import React, { useState, useEffect } from "react";
import PacksList from "../components/PacksList";
import axios from "axios";

const PacksPage = () => {

    const [packInfo, setPackInfo] = useState();

    useEffect(() => {
        axios('/api/packs/owners-list')
            .then(response => {
                setPackInfo(response.data)
            })
        // const fetchData = async () => {
        //     const result = await fetch(`/api/packs/owners-list`);
        //     const body = await result.json();
            
        //     setPackInfo(body);
        // }
        // fetchData();
    }, []);

    // console.log(packInfo[0]);

    return(
        <>
            <h1>Packs</h1>
            <PacksList packInfo={ packInfo }/>
        </>
    )
}

export default PacksPage;