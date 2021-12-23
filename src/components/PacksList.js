import React from "react";
import PackContentList from "./PackContentsList";

const PacksList = ({ packInfo }) => {
    return(
        <>
            {packInfo.map((packOwner) => (
                <>
                    <p key={packOwner._id}>{packOwner.packName}</p>
                    <PackContentList packInfo={ packInfo } />
                </>
            ))}
        </>
    )
}

export default PacksList;