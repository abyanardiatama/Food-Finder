function main() {
    const baseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

    const searchFood = (keyword) => {
        console.log(`${baseUrl}${keyword}`);
        fetch(`${baseUrl}${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    renderAllFoods(responseJson.meals);
                } else {
                    showResponseMessage(`${keyword} is not found`);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    }

    const renderAllFoods = (meals) => {
        const listFoodElement = document.querySelector("#listFood");
        listFoodElement.innerHTML = "";

        const foodElements = meals.map(meal => {
          return `
            <div class="col-lg-4 col-md-6 col-sm-12 rounded" style="margin-top: 12px;">
                <div class="card">
                    <div class="card-body">
                        <h5>(${meal.idMeal}) ${meal.strMeal}</h5>
                        <p>${meal.strCategory}</p>
                        <img src="https://source.unsplash.com/300x300/?${meal.strMeal}">
                    </div>
                </div>
            </div>
            `;
        });

        // Tambahkan semua elemen makanan ke daftar makanan
        foodElements.forEach(foodElement => {
          listFoodElement.innerHTML += foodElement;
        });
    }
        const showResponseMessage = (message = "Silahkan Coba Lagi") => {
            alert(message);
        };

        document.addEventListener("DOMContentLoaded", () => {
          const buttonSearchElement = document.querySelector("#SearchButton");
          
          
          buttonSearchElement.addEventListener("click", () => {
              const searchElement = document.querySelector("#inputFood");
              const keyword = searchElement.value;
              searchFood(keyword);
            });
        });
    };

export default main;
