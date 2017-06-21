// business logic goes here
function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
};

Pizza.prototype.getPizzaPrice = function() {
  console.log("this.pizzaSize = " + this.pizzaSize);
  return this.pizzaSize += 2;
};

Pizza.prototype.getToppingsPrice = function() {
  console.log("this.toppings = " + this.toppings);
  var toppingsArr = this.toppings;
  var price = 0;
  var runningTotal = 0;
  console.log("this.toppingsArr = " + toppingsArr);  // WORKING
  this.toppings.forEach(function(topping) {  // WORKING??
    if (topping === "pepperoni" || topping === "sausage") {
      price = 1.79;
    } else if (topping === "extra cheese") {
      price = 0.50;
    } else {
      price = 1.00;
    };
    runningTotal += price;
  });
  // console.log("runningTotal = " + runningTotal);
  return runningTotal;
};


Pizza.prototype.getCost = function() {
  // console.log("this.getPizzaPrice = " + this.getPizzaPrice());
  // console.log("this.getToppingsPrice = " + this.getToppingsPrice());
  return this.getPizzaPrice() + this.getToppingsPrice();  // * undefined; I have no idea why
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

    var inputtedPizzaSize = parseInt($("#pizza-size").val());  // gets pizza-size value (working)
      console.log(inputtedPizzaSize);  // WORKING

    var toppingsArr = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var topping = $(this).val();
      toppingsArr.push(topping);
    });  // gets pizza toppings; pushes to toppingsArr (working)
      console.log(toppingsArr);  // WORKING

    var newPizza = new Pizza(inputtedPizzaSize, toppingsArr);  // * this - creates new Pizza from inputted data (inputtedPizzaSize and toppingsArr working)
      console.log(newPizza);  // WORKING

    resetFields();

    $(".display-order").show();
    $(".display-cost").show();

    $("span#order-details").text(inputtedPizzaSize + "-inch with " + toppingsArr);
    // console.log("Total cost: " + newPizza.getCost());
    $("span#pizza-cost").text(newPizza.getCost());
  });
});
