import React from "react";

const PacksList = ({ packs }) => {
    return (
        <>
            <h1>Packs</h1>
            {packs.map((pack, key) => {
                return (
                    <h3>{pack.owner}</h3>
                )
            })}
        </>
    );
}

export default PacksList;