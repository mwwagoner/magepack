import React from "react";

const PacksList = ({ packInfo }) => {
    return(
        <>
            {packInfo.map((packOwner) => (
                <p key={packOwner._id}>{packOwner.packName}</p>
            ))}
        </>
    )
}

export default PacksList;