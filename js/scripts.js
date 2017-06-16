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

function getPizzaPrice(_pizzaSize) {
  return pizzaSize + 2;
};

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
  return /* getPizzaPrice(pizzaSize) + */ getToppingsPrice(toppingsArr);  // can't get this to work with any variation of pizzaSize, including inputtedPizzaSize, this.size, Pizza.prototype.size, or any other related variable, and whether or not I use the getPizzaPrice() function or just the pizzaSize variable + 2
};

function resetFields() {
  // resets form fields with empty string to clear them
  $("#pizza-size").val("");
  $("input:checkbox[name=pizza-toppings]").prop("checked", false);
};



// user-interface logic goes here
$(document).ready(function() {
  // console.log("hello");
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
      // console.log("hello");

    var pizzaSize;
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

    resetFields();

    $(".display-cost").show();

    $("span#pizza-cost").text(newPizza.cost); // works
      console.log(getPizzaPrice(pizzaSize));
      console.log(getToppingsPrice(toppingsArr));
      console.log(typeof(pizzaSize));
      console.log(typeof(newPizza.cost));
  });
});
