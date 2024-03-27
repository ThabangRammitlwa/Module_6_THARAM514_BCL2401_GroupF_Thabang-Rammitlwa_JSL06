// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    for (const category in menu) {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        const itemListElement = document.createElement('ul');
        menu[category].forEach(item => {
            const listItemElement = document.createElement('li');
            listItemElement.textContent = `${item.name} - R${item.price.toFixed(2)}`;
            listItemElement.addEventListener('click', () => {
                addToOrder(item);
            });
            itemListElement.appendChild(listItemElement);
        });

        categoryElement.appendChild(itemListElement);
    }
}

// Function to add an item to the order
function addToOrder(item) {
    const orderList = document.getElementById('order-items');
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - R${item.price.toFixed(2)}`;
    orderList.appendChild(listItem);

    const orderTotalElement = document.getElementById('order-total');
    let orderTotal = parseFloat(orderTotalElement.textContent);
    orderTotal += item.price;
    orderTotalElement.textContent = orderTotal.toFixed(2);
}

// Initialize menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Call initMenuSystem function with the menu object
initMenuSystem(menu);
