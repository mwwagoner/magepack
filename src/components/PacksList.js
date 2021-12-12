import React from "react";

const PacksList = ({ packInfo }) => {
    return (
        <>
            <h3>Packs</h3>
            <p>{packInfo.owner}</p>
        </>
    )
}

export default PacksList;