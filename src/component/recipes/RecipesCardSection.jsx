import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper className="flex items-center justify-center bg-black h-screen w-screen">
      <div className="loader">
        <div className="cell d-0" />
        <div className="cell d-1" />
        <div className="cell d-2" />
        <div className="cell d-1" />
        <div className="cell d-2" />
        <div className="cell d-2" />
        <div className="cell d-3" />
        <div className="cell d-3" />
        <div className="cell d-4" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    --cell-size: 52px;
    --cell-spacing: 1px;
    --cells: 3;
    --total-size: calc(
      var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing))
    );
    display: flex;
    flex-wrap: wrap;
    width: var(--total-size);
    height: var(--total-size);
  }

  .cell {
    flex: 0 0 var(--cell-size);
    margin: var(--cell-spacing);
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 4px;
    animation: 1.5s ripple ease infinite;
  }

  .cell.d-1 {
    animation-delay: 100ms;
  }

  .cell.d-2 {
    animation-delay: 200ms;
  }

  .cell.d-3 {
    animation-delay: 300ms;
  }

  .cell.d-4 {
    animation-delay: 400ms;
  }

  .cell:nth-child(1) {
    --cell-color: #00ff87;
  }

  .cell:nth-child(2) {
    --cell-color: #0cfd95;
  }

  .cell:nth-child(3) {
    --cell-color: #17fba2;
  }

  .cell:nth-child(4) {
    --cell-color: #23f9b2;
  }

  .cell:nth-child(5) {
    --cell-color: #30f7c3;
  }

  .cell:nth-child(6) {
    --cell-color: #3df5d4;
  }

  .cell:nth-child(7) {
    --cell-color: #45f4de;
  }

  .cell:nth-child(8) {
    --cell-color: #53f1f0;
  }

  .cell:nth-child(9) {
    --cell-color: #60efff;
  }

  /*Animation*/
  @keyframes ripple {
    0% {
      background-color: transparent;
    }

    30% {
      background-color: var(--cell-color);
    }

    60% {
      background-color: transparent;
    }

    100% {
      background-color: transparent;
    }
  }
`;

const RecipeCard = ({ image, name, cuisine, ingredients, instructions }) => {
  return (
    <div className="border-2 p-5 h-fit w-fit ">
      <div className="h-[30vh]">
        <img className="h-full w-full object-cover" src={image} alt="" />
      </div>
      <h1 className="text-center text-2xl font-bold text-blue-600">{name}</h1>
      <h1 className="text-center text-2xl font-bold text-blue-600">
        cuisine : {cuisine}
      </h1>
      {/* <div className="flex items-center gap-x-5">
        <div>
          {" "}
          <h3 className="text-xl font-semibold">Ingredients :</h3>
          <ul className="list-disc list-inside">
            {Array.isArray(ingredients) &&
              ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Instructions :</h3>
          <ol className="list-decimal list-inside">
            {Array.isArray(instructions) &&
              instructions.map((item, idx) => <li key={idx}>{item}</li>)}
          </ol>
        </div>
      </div> */}
    </div>
  );
};

const RecipesCardSection = () => {
  const [recipe, setRecipe] = useState([]);
  const [isloading, SetIsloading] = useState(false);

  async function fetchRecipies() {
    SetIsloading(true);
    try {
      let apiUrl = "https://dummyjson.com/recipes?limit=5";
      let response = await axios.get(apiUrl);
      setRecipe(response.data.recipes);
      SetIsloading(false);
    } catch (error) {
      SetIsloading(false);
      alert("falid to load recipes");
    }
  }

  useEffect(() => {
    fetchRecipies();
  }, []);

  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <section className="grid grid-cols-2 gap-5">
          {recipe.map((item, idx) => (
            <div key={idx}>
              <h1 className="text-2xl bg-black h-fit w-fit rounded-full text-white m-4">
                {idx + 1}
              </h1>
              <RecipeCard
                name={item.name}
                image={item.image}
                ingredients={item.ingredients}
                instructions={item.instructions}
              />
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default RecipesCardSection;
