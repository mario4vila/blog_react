import React from 'react'

class MyComponent extends React.Component {
    render(){
        const recipe = {
            name: 'Pizza',
            calories: 400,
            ingredients: [
                'tomato',
                'cheese',
                'cooked ham'
            ]
        }

        return (
            <div>
                <h1>Recipe {recipe.name}</h1>
                <h2>Calories {recipe.calories}</h2>
                <ol>
                    {
                        recipe.ingredients.map((ingredient, i)=>{
                            return (
                                <li key={i}>
                                    {ingredient}
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
        );
    }

}

export default MyComponent;