import React from "react";

const PacksList = ({ packInfo }) => {
    return (
        <>
            <h1>Packs</h1>
            {packInfo.map((pack, key) => {
                return (
                    <h3>{pack.owner}'s pack</h3>
                )
            })}
        </>
    );
}

export default PacksList;