import React from "react";

export default function ItemListContainer (prop) {
    return(
        <>
            <ul>
                <li>{prop.greeting}</li>
            </ul>
        </>
    )
}