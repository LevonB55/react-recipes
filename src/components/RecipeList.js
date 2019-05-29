import React, { Component } from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

export default class RecipeList extends Component {
  
  render() {
    const { recipes, handleDetails, value, handleChange, handleSubmit } = this.props;
    
    return (
      <React.Fragment>
        <RecipeSearch 
          value={value}
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
        />
        <div className="container my-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>

          <div className="row">
            {
              recipes.length ? (recipes.map(recipe => {
                return (
                  <Recipe recipe={recipe} key={recipe.recipe_id} handleDetails={handleDetails} />
                )
              })) : (                
                <div className="my-3 text-danger text-center w-100">
                  Sorry, your search didn't return any result!
                </div>            
              )
            }             
          </div>
        </div>
      </React.Fragment>
    )
  }
}
