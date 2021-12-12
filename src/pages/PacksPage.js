import React, { useState, useEffect } from "react";
import PacksList from "../components/PacksList";


const PacksPage = () => {

    const [packInfo, setPackInfo] = useState({ owner: '', contents: []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/packs/list`);
            const body = await result.json();
            setPackInfo(body);
        }
        fetchData();
    });

    return(
        <>
            <h1>Packs</h1>
            <PacksList packInfo={ packInfo }/>
        </>
    )
}

export default PacksPage;