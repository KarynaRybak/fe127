let shoppingList = [];
function addProduct(name, quantity, price) {
  shoppingList.push({
    name: name,
    quantity: quantity,
    price: price,
    purchased: false
  });
}
function displayShoppingList() {
    const NOT_PURCHASED = shoppingList.filter(product => !product.purchased);
    const PURCHASED = shoppingList.filter(product => product.purchased);

      console.log ("NotPurchased:");
      NOT_PURCHASED.forEach (product => {
        console.log(`${product.name} - Quantity: ${product.quantity} - Price: ${product.price} UAH  - Total: ${product.quantity * product.price} UAH `);
    });

    console.log ("Purchased:");
    PURCHASED.forEach(product => {
      console.log(`${product.name} - Quantity: ${product.quantity} - Price: ${product.price} UAH  - Total: ${product.quantity * product.price} UAH `);
});
}

function purchasedProduct(productName, addQuantity) {
  const PRODUCT_INDEX  = shoppingList.findIndex(product => product.name === productName);

  if (PRODUCT_INDEX  !== -1) {
    shoppingList[PRODUCT_INDEX ].quantity += addQuantity;
    shoppingList[PRODUCT_INDEX ].purchased = true;
    console.log(`Purchased add ${addQuantity} of ${productName}`);
  } else {
    addProduct(productName, addQuantity, price);
    console.log(`Added new product: ${productName}`);
  }
}

function removeProduct(productName) {
  shoppingList = shoppingList.filter(product => !(product.name === productName && !product.purchased));
  console.log(`Removed: ${productName}`);
}

addProduct("Apple", 5, 5);
addProduct("Banana", 3, 15);
addProduct("Orange", 2, 20);
displayShoppingList();

purchasedProduct("Apple", 2, 5);
displayShoppingList();

removeProduct("Banana");
displayShoppingList();

