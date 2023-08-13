//displaying the entire menu//
document.addEventListener("DOMContentLoaded", function () {
    const menuBox = document.getElementById('menu');
    fetch("http://localhost:3000/menu")
        .then(response => response.json())
        .then(data => {
            const menu = data.menu;

            for (const category in menu) {
                const categoryTitle = document.createElement('h2');
                categoryTitle.textContent = category;
                menuBox.appendChild(categoryTitle);

                const items = menu[category];
                const itemList = document.createElement('ul');

                items.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <img src="${item.img}" alt="${item.name}" width="200">
                        <h2>${item.name}</h2>
                        <p>${item.description}</p>
                        <p>Price: $${item.price}</p>
                        <button onclick="orderItem('${item.name}')">Order</button>
                    `;
                    itemList.appendChild(listItem);
                });
                menuBox.appendChild(itemList);
            }
        })
        .catch(error => console.error('Error fetching data:', error));

    addCategoryEventListeners();
});
//displaying menu categories//
const menuBox = document.getElementById('menu');
const categoryBox = document.querySelectorAll(`.category`);
function loadMenus(category) {
    fetch(`http://localhost:3000/menu/${category}`)
        .then(response => response.json())
        .then(data => {
            const items = data;
            categoryBox.innerHTML = '';

            items.forEach(item => {
                const itemElement = document.createElement("div");
                itemElement.classList.add('menu-item');
                itemElement.innerHTML = `
                    <img src="${item.img}" alt="${item.name}" width="200">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <p>Price: $${item.price}</p>
                    <button onclick="orderItem('${item.name}')">Order</button>
                `;
                categoryBox.appendChild(itemElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

function addCategoryEventListeners() {
    categoryBox.forEach(category => {
        category.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            loadMenus(category);
        });
    });
};
//alert when order is made//
function orderItem(itemName, itemPrice) {
    alert(`You ordered ${itemName} for $${itemPrice} has been received`);
};









           