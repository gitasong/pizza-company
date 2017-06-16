// business logic goes here
function Pizza(size, cost) {
  this.size = size;
  this.toppings = toppingsArr;
  this.cost = Pizza.prototype.getCost();  // prototype method version of this.cost attribute
  // this.cost = function() {
  //   return inputtedPizzaSize + getToppingsPrice(toppingsArr);
  // };  // function version of this.cost attribute
};

var toppingsArr = [];
var pizzaSize = this.size;

function Toppings(_toppingsArr) {
  this.toppings = toppingsArr;
};

// function getPizzaPrice(pizzaSize) {
//   return pizzaSize;
// };

function getToppingsPrice(_toppingsArr) {
  var price = 0;
  var runningTotal = 0;
  toppingsArr.forEach(function(topping) {
    if (topping === "pepperoni" || topping === "sausage") {
      price = 1.79;
    } else if (topping === "extra cheese") {
      price = 0.50;
    } else {
      price = 1.00;
    };
    runningTotal += price;
  });
  return runningTotal;
};

Pizza.prototype.getCost = function() {
  // var pizzaSize = this.size;
  // implement function to get cost from pizza size and toppings
  // var price = 0;
  // price = inputtedPizzaSize;
  // console.log(price);
  return /* pizzaSize + */ getToppingsPrice(toppingsArr);  // can't get this to work with any variation of pizzaSize, including this.size, Pizza.prototype.size, or any other related variable
};



// user-interface logic goes here
$(document).ready(function() {
  // console.log("hello");
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
      // console.log("hello");

    var inputtedPizzaSize = parseInt($("#pizza-size").val());  // gets pizza-size value (working)
      console.log(inputtedPizzaSize);

    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var topping = $(this).val();
      toppingsArr.push(topping);
    });  // gets pizza toppings; pushes to toppingsArr (working)
      console.log(toppingsArr);

    var newPizza = new Pizza(inputtedPizzaSize, toppingsArr, this.cost);  // creates new Pizza from inputted data (inputtedPizzaSize and toppingsArr working)
      console.log(newPizza.cost);
      console.log(newPizza);

    $(".display-cost").show();
    // $("span#pizza-cost").text(newPizza.cost);  // displays cost of full pizza with toppings
    // $("span#pizza-cost").text(getPizzaPrice(inputtedPizzaSize));
    // $("span#pizza-cost").text(getToppingsPrice(toppingsArr)); // works
    $("span#pizza-cost").text(newPizza.cost); // works
      console.log(typeof(newPizza.cost));
  });
});
