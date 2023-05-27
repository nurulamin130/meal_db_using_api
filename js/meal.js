const searchFood = () =>
{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${ searchText }`;
    fetch(url)
        .then(res => res.json())
        .then(data => resultDisplay(data.meals))



    // console.log(searchText);

}
searchFood();
const resultDisplay = meals =>
{
    const searchResult = document.getElementById('search-result')

    meals.forEach(meal =>
    { 
      
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card h-100">
                <img src="${ meal.strMealThumb }" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="">${ meal.strMeal }</h5>
                    <p class="card-text">${ meal.strInstructions.slice(0, 150) }</p>
                </div>
            </div>`
        searchResult.append(div);
    })


}
