
document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/menu")
        .then(response => response.json())
        .then(data => {
            const breakfastBox = document.getElementById("breakfast");
            const firstBreakfast = data.menu.breakfast[0];
            displayData(breakfastBox, firstBreakfast);

            const lunchBox = document.getElementById("lunch");
            const firstLunch = data.menu.lunch[0];
            displayData(lunchBox, firstLunch);

            const dinnerBox = document.getElementById("dinner");
            const firstDinner = data.menu.dinner[0];
            displayData(dinnerBox, firstDinner);

            const drinkBox = document.getElementById("drinks");
            const firstDrink = data.menu.drinks[0];
            displayData(drinkBox, firstDrink);

            const accompanimentBox = document.getElementById("accompaniments");
            const firstAccompaniment = data.menu.accompaniments[0];
            displayData(accompanimentBox, firstAccompaniment);
        })
        .catch(error => {
            console.error("Error fetching or displaying data:", error);
        });
});

function displayData(box, item){
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `
        <img src="${item.img}" alt="${item.name}" width="200">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p>Price: $${item.price}</p>
        <button onclick="orderItem(${item.name})">Order</button>
        `;
        box.appendChild(dataElement);
    }
function orderItem(itemName){
    alert(`your ${itemName}order has been received`)
};

function displayMenu(){
    fetch("http://localhost:3000/menu")
        .then(response => response.json())
        .then(data =>{
            const menuBox = document.getElementById("menu-link");
            const breakfastItems = data.menu.breakfast;
        displayItems(menuBox, "Breakfast", breakfastItems);

        const lunchItems = data.menu.lunch;
        displayItems(menuBox, "lunch", lunchItems);

        const dinnerItems = data.menu.dinner;
        displayItems(menuBox, "dinner", dinnerItems);

        const drinksItems = data.menu.drinks;
        displayItems(menuContainer, "drinks", drinksItems);

        const accompanimentsItems = data.menu.accompaniments;
        displayItems(menuBox, "accompaniments", accompanimentsItems);


        })

}
function displayItems(box, section, items) {
    const sectionElement = document.createElement("h2");
    sectionElement.textContent = section;
    box.appendChild(sectionElement);

    items.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `
        img src="${item.img}" alt="${item.name}" width="200">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p>Price: $${item.price}</p>
        <button onclick="orderItem(${item.name})">Order</button>
        `;
        box.appendChild(itemElement);
    });
}
