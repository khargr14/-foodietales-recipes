import * as model from './model.js';
import recipeView from './views/recipeView.js';


import 'regenerator-runtime';
import recipeView from './views/recipeView.js';

console.log(icons)
// import icons from '../img/icons.svg';
// console.log(icons)

const recipeContainer = document.querySelector('.recipe');


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////




const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return; 
    model.state.recipe
    // 1.  load recipe
    recipeView.renderSpinner();

   await model.loadRecipe(id);
  

      // 2. Rendering recipe
    recipeView.render(model.state.recipe);
    

      
  } catch (err) {
    alert(err);
  }
};

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));

// window.addEventListener('hashchange', controlRecipes)
// window.addEventListener('load', controlRecipes)

