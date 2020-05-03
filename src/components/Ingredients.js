import React from "react"

const Ingredients = ({ ingredients }) => {

    if(!ingredients) {return null}

    return ingredients.map(({ amount, ingredient }) => (
        <div key={ingredient} className="ingredient">
            <span>
                {amount}
            </span>
            {" "}
            <span style={{fontWeight: "bold"}}>
                {ingredient}
            </span>
        </div>
    ))
}

export default Ingredients