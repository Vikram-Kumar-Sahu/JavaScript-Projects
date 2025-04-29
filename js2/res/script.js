
const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");


const fetchRecipes = async (query) => {
    try {
        // Fetching recipe data
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const response = await data.json();

    
        recipeContainer.innerHTML = "";

        
        if (response.meals) {
            response.meals.forEach((meal) => {
                // Creating recipe card
                const recipeDiv = document.createElement("div");
                recipeDiv.classList.add("recipe");

             
                recipeDiv.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <h3>${meal.strMeal}</h3>
                    <p><strong>Category:</strong> ${meal.strCategory}</p>
                    <p><strong>Area:</strong> ${meal.strArea}</p>
                    <a href="${meal.strSource}" target="_blank" class="recipe-link">View Recipe</a>
                `;

               
                recipeContainer.appendChild(recipeDiv);
            });
        } else {
            
            recipeContainer.innerHTML = "<p>No recipes found. Try searching for something else!</p>";
        }
    } catch (error) {
        console.error("Error fetching recipes:", error);
        recipeContainer.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    }
};


searchBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    const query = searchBox.value.trim();
    if (query) {
        fetchRecipes(query);
    }
});
