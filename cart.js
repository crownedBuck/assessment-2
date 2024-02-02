///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedCallback = (accumulator, foodItem) => accumulator + foodItem.price;

 const summedPrice = cart.reduce(summedCallback, 0)

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return (cartTotal * (1 + tax)) - couponValue
}

// const twelveInchPizza = calcFinalPrice(32, 5, 0.15)

// console.log(twelveInchPizza)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    The object would need: name, address, creditCardNumber, newCustomer, allergies, allergyTypes.

    name will be the customer's full name, it will be a string. address will hold the customer's address and will also be a string. creditCardNumber will hold their credit card #, it will be a string newCustomer will tell the restaurant if this is their first purchase so they can send the new customer a menu and a coupon sheet with their first order, this will be a boolean. allergies will let the food team know if the customer has any food allergies, this will be a boolean. allergyTypes will be an array of strings, each holding what the customer is allergic to. If the customer is not allergic, it will be an empty array.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const firstCustomer = {
    name: "Laura Hart",
    address: "119 Joyce Dr/n Lodi, WI 53555",
    creditCardNumber: 1234567890, // side note, holding credit card info like this is unsafe and should not be done, however I wanted to have at least a number inside my object
    newCustomer: false,
    allergies: true,
    allergyTypes: ["tree polen", "amoxacillin", "fun"]
}
