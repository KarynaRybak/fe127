/*
//     1)          Задача.Знайти суму не відомої кількості чисел

function sum() {
    let total = 0;                                 //для накопич суми аргументів 
    
    for (let i = 0; i < arguments.length; i++) {    //Запуск. цикл, який проходить через всі аргументи функції. 
      if (typeof arguments[i] === 'number') {  //typeof-перевіряє чи є поточний аргумент числовим. Якщо так, код в блоку if виконується.     
        total += arguments[i];    ////Якщо поточний аргумент -числове значення його додають до total.
    }
    }
      return total            //Після проходження усіх аргументів цикл завершується, і функція повертає обчислену суму.
    }
    const arguments = [1, 2 ,3 ,4 ,5 ];   
    console.log(arguments[0]); // Виводите перший елемент масиву arguments, який є 1. Таким чином, у консолі ви побачите 1.
    const result = sum(1, 2, 3, 4, 5)
    console.log(result);
    //=  1   15
    
    
    
    //    2)                            Задача.Перевернути рядок!
    
    const string = "Програмування це круто"
    
    function reverseString(str) {  //reverseString з параметром str, яка приймає рядок.
        return str.split('').reverse().join('')
    }
    console.log(reverseString(string));   // виклик функції reverseString з аргументом string
    //str.split('') - розбиває рядок на масив символів. Наприклад, "Програмування це круто" стане ['П', 'р', 'о', 'г', ...].
    //.reverse() - розташовує елементи масиву в зворотньому порядку.
    //.join('') - об'єднує елементи масиву знову в рядок без роздільників.
    
    //     3)               Задача .     Визначити чи є число парним 
    
    function isEven(num) {     // функцію з іменем isEven, яка приймає аргумент num.
        return num % 2 === 0   //операція % (остання частина від ділення). У цьому випадку, функція перевіряє, чи залишок від ділення num на 2 дорівнює 0. Якщо це правда, функція повертає true, що вказує на те, що число парне. Якщо не вірно, то функція повертає false.
    }
    console.log (isEven(200));    //Викликаємо функцію isEven і передаємо їй аргумент 200.(в даному випадку true, оскільки 200 - парне 
    
    
    
    //    4)                       Задача.   Знайти найбільше число у масиві!
    
    const array = [3, 50, 43, 0, 1550];
    function findMaxNumber(num) {   // функцію findMaxNumber, яка приймає один параметр num.
    return Math.max(...num)    //Math.max для знаходження максимального числа в масиві. За допомогою ...num ви розгортаєте масив, щоб передати його як окремі аргументи функції Math.max. Таким чином, ви отримуєте максимальне число з масиву.
    }
    console.log(findMaxNumber(array));
    
    
    
    //     5)                    Задача .  Перевірити чи є рядок паліндромом?
    
    function isPalindrome(str) {   //Тут ств функцію з іменем isPalindrome, яка приймає один параметр str.
        const reversed = str.split('').reverse (). join(''); //нову змінну reversed, яка містить рядок, що отримується з розбиття str на масив окремих символів, реверсування масиву і об'єднання його знову у рядок.
        return str === reversed  //порівнюю ориг. рядок str із його реверсованим варіантом reversed. Якщо вони рівні, то функція повертає true, вказуючи на те, що рядок є паліндромом. В іншому випадку функція повертає false.
    }
    console.log(isPalindrome('комок'));
    
    
    //   6)         // Вивести числа від 1 до 5 з використанням while               
    
    
    let i = 1;   //Створюємо змінну i і присвоюємо їй значення 1.
    while (i <= 5) {   //Починаємо цикл while. Вказуємо, що цикл повинен продовжуватися, доки значення i менше або дорівнює 5.
      console.log(i);  // Виводимо поточне значення i у консоль.
      i++;    //i++;: Збільшуємо значення i на 1 після кожної ітерації циклу.
    }    


    //  7)   Do while


    //  8)  
    let shoppingList = [];      //Створення порожнього масиву shoppingList:
function addProduct(name, quantity, price) {  //Додає новий продукт у масив shoppingList у вигляді об'єкта з вказаними властивостями (name, quantity, price, purchased).
  shoppingList.push({ //Додавання продукту в масив:
    name: name,  //параметри 
    quantity: quantity,
    price: price,
    purchased: false
  });
}
function displayShoppingList() {  //Виведення списку покупок: а придбані та непридбані, а потім виводить цю інформацію в консоль 
    const NOT_PURCHASED = shoppingList.filter(product => !product.purchased);
    const PURCHASED = shoppingList.filter(product => product.purchased);

      console.log ("NotPurchased:");
      NOT_PURCHASED.forEach (product => {   //// Використання forEach для виведення кожного елемента масиву
        console.log(`${product.name} - Quantity: ${product.quantity} - Price: ${product.price} UAH  - Total: ${product.quantity * product.price} UAH `);
    });

    console.log ("Purchased:");
    PURCHASED.forEach(product => {
      console.log(`${product.name} - Quantity: ${product.quantity} - Price: ${product.price} UAH  - Total: ${product.quantity * product.price} UAH `);
});
}

      //9                              Задача 
      function purchasedProduct(productName, addQuantity) {
  const PRODUCT_INDEX  = shoppingList.findIndex(product => product.name === productName);
  //Функція purchasedProduct дозволяє придбати певну кількість продукту, або, якщо продукт відсутній, додає новий.

  if (PRODUCT_INDEX  !== -1) { //перевір, чи індекс продукту був знайдений в масиві.так.то виконуються наст дії.
    shoppingList[PRODUCT_INDEX ].quantity += addQuantity; // збільшує кількість одиниць продукту на вказану кількість addQuantity.
    shoppingList[PRODUCT_INDEX ].purchased = true; //встан власт purchased для продукту на true, що позначає, що продукт був придбаний.
    console.log(`Purchased add ${addQuantity} of ${productName}`); //виводить повід про те, що було додано вказану кількість продукту.

  } else { //Якщо умова в if не виконується (тобто продукт не був знайдений), то виконується блок else.

    addProduct(productName, addQuantity, price); // викликає функцію addProduct для додавання нового продукту у випадку, якщо такий продукт ще не існує в масиві. Вказуються productName, addQuantity і price.
    console.log(`Added new product: ${productName}`); // виводить повідомлення про те, що був доданий новий продукт з вказаною назвою.
  }
}

function removeProduct(productName) { 
//Ця функція призначена для видалення продукту з масиву shoppingList за його назвою.
  shoppingList = shoppingList.filter(product => !(product.name === productName && !product.purchased));
  //ств.новий масив, включаючи тільки ті елементи, для яких умова повертає true.  

 // (product => !(product.name === productName && !product.purchased)) - умова, за якою фільтруються елементи:
//product.name === productName - перевіряє, чи ім'я продукту співпадає з вказаним productName.
//!product.purchased - перевіряє, чи продукт не був придбаний.
//!(product.name === productName && !product.purchased) -, що в рез вкл.тільки ті продукти,які мають 
//вказану назву і не були придбані.
  console.log(`Removed: ${productName}`);
}

addProduct("Apple", 5, 5); //Додає новий продукт "Apple" у масив shoppingList з кількістю (5) та ціною за одиницю (5).
addProduct("Banana", 3, 15);
addProduct("Orange", 2, 20);
displayShoppingList();

purchasedProduct("Apple", 2, 5);//Оновлює інформацію про продукт "Apple", додаючи до кількості 2 
//$###та встановлюючи ціну за одиницю на 5. Також позначає "Apple" як придбаний.
displayShoppingList();

removeProduct("Banana");
displayShoppingList();


//10           Задача   середині циклу перевіряється, чи і дорівнює num - 1. Якщо умова вірна, виводиться "End" в консоль; в іншому випадку виводиться поточне значення i, і i збільшується на 1 при кожній ітерації.

let i = 0;
let num = 4;
while(i < num) {  //Цикл буде виконуватися, поки значення i менше num.
    i === num - 1 ? console.log("End") : console.log(i);
    //тернарний оператор, щоб перевірити, чи i дорівнює num - 1. Якщо умова виконується (тобто i дорівнює 1), то виводиться "End". В іншому випадку виводиться поточне значення i.
    i++;//На кожній ітерації циклу значення i збільшується на 1.
}

//11    Задача
for (let num = 0; num < 5; num++ ){
  console.log(num);
  if(num === 2) break;
}


let message = () => console.log('Hello world');  // визначає стрілкову функцію message, яка просто виводить рядок 'Hello world' у консоль.

let sum = () => { // визначає іншу стрілкову функцію sum. У цьому випадку функція обчислює суму 2 + 2 і повертає це значення.
  console.log(sum()); //викликає функцію sum і виводить результат обчислення суми (2 + 2), тобто 4.
  let sum = 2 + 2;
  return sum;
};
console.log(sum());

let i = 0;
function sayHi() {
  console.log(i);
  i++;
 }
 
 setInterval(sayHi , 3000);



                                //Задача 
//Запитати 2 числа в користувача. 
//Додати ці 2 числа .
//Показати результат .Додати
//зробити перевірку на введення даних
 
let num1 = prompt('Number 1')
let num2 = prompt('Number 2')
let sum = Number(num1) + Number(num2);
if (num1 && num2){ //і одне і інше має бути тру
alert(sum);
}

//можна це скоротити ось :

//alert(Number(prompt('Number 1')) + Number prompt('Number 2'));

     //Запитай у користувача  суму покупки і виведи суму до оплати зі знижкою 
     //від 200-300 = 3%
     //від 300 до  500  =  5%
     //від 500 і вище = 7%

     let sum = Number(prompt('Enter number'));
     if(sum >= 200 && sum <= 300){
      alert(sum * 0.97);
     }else if(sum >= 300 && sum <= 500){
      alert(sum * 0.95);
     }
    }else if(sum >= 500) {
      alert(sum * 0.93);
    }else{
      alert(sum);
    } 
*/
 //Зацикли відображення днів тижня так : день тижня .хочеш побачити наступний день і так доки корист не нажме ок
 let arr = ['понеділок', 'вівторок' ,'середа'];
 for(let i = 0; i < arr.length; i++) {//Цикл for буде виконуватися для кожного елемента масиву arr. Змінна i ініціалізується 0, і цикл буде виконуватися, доки i менше довжини масиву arr. Кожну ітерацію циклу i збільшується на 1.
let check = confirm (arr[i]+'. хочеш побачити наступний день?')
if (!check) break; //Якщо користувач натискає "Скасувати" (значення check буде false), викликається оператор break, що призводить до виходу з циклу.
 }
