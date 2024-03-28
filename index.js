// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [{name: "Garlic Bread",price:6.95},{name:"Bruschetta",price:7.00} ],
    MainCourses: [{name:"Margherita Pizza",price:12.80},{name:"Spaghetti Carbonara",price:48.20} ],
    Desserts: [{name:"Tiramisu",price:25.00},{name:"Cheesecake",price:22.00} ]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');
//loop through each category and its items in the menu object
    for (const category in menu) {
       // Create an element to represent the category 
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        // Set the text content of the category element to the category name
        categoryElement.textContent = category;
        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);

        // Create a list item element
        const itemListElement = document.createElement('ul');
        menu[category].forEach(item => {
            const listItemElement = document.createElement('li');
            // Set the text content of the list item element to the item name
            listItemElement.textContent = `${item.name} - R${item.price.toFixed(2)}`;
            // Attach a click event listener to the list item to add it to the order
            listItemElement.addEventListener('click', () => {
                addToOrder(item);
            });
            // Append the list item to the list of items
            itemListElement.appendChild(listItemElement);
        });

        categoryElement.appendChild(itemListElement);
    }
}

// Function to add an item to the order
function addToOrder(item) {
    // Get the order items list and the order total element from the HTML
    const orderList = document.getElementById('order-items');
     // Create a list item for the order
    const listItem = document.createElement('li');
    // Set the text content of the list item to the item name
    listItem.textContent = `${item.name} - R${item.price.toFixed(2)}`;
     // Append the list item to the order items list
    orderList.appendChild(listItem);
 
    // Calculate and update the total price
    const orderTotalElement = document.getElementById('order-total');
    // Update the text content of the order total element with the new total
    let orderTotal = parseFloat(orderTotalElement.textContent || 0);
    orderTotal += item.price;
    orderTotalElement.textContent = orderTotal.toFixed(2);
}

// Initialize menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Call initMenuSystem function with the menu object
initMenuSystem(menu);
