import React from "react";

const PacksList = ({ packInfo }) => {
    
    // console.log(packInfo);
    const arrayOfObjects = [
        {owner: "Bob"},
        {owner: "Michael"}
    ];

    return(
        <>
            {/* {packInfo.map((packOwner) => (
                <p key={packOwner.owner}>{packOwner.owner}</p>
            ))} */}
        </>
    )
    // const arrayOfObjects = [
    //     { coffee: "Americano", size: "Medium" },
    //     { coffee: "Espresso", size: "Large" },
    // ]
    
    // return (
    //     <>
    //     {arrayOfObjects.map(({ coffee, size }) => (
    //         <p key={coffee}>Coffee type {coffee} in a {size} size.</p>
    //     ))}
    //     </>
    // )
}

export default PacksList;