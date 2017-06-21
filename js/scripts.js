// business logic goes here
// Pizza object prototype
function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
};

// prototype method to get base pizza price from pizza size
Pizza.prototype.getPizzaPrice = function() {
  return this.pizzaSize += 2;
};

// prototype method to get combined price of toppings
Pizza.prototype.getToppingsPrice = function() {
  var toppingsArr = this.toppings;
  var price = 0;
  var runningTotal = 0;
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
  return runningTotal;
};

// prototype method to get total cost of pizza from base pizza price + toppings
Pizza.prototype.getCost = function() {
  return this.getPizzaPrice() + this.getToppingsPrice();
};

// resets form fields with empty string to clear them
function resetFields() {
  $("#pizza-size").val("");
  $("input:checkbox[name=pizza-toppings]").prop("checked", false);
};


// user-interface logic goes here
$(document).ready(function() {
  // console.log("hello");
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var inputtedPizzaSize = parseInt($("#pizza-size").val());  // gets pizza-size value

    // gets pizza toppings; pushes to toppingsArr
    var toppingsArr = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var topping = $(this).val();
      toppingsArr.push(topping);
    });

    var newPizza = new Pizza(inputtedPizzaSize, toppingsArr);  // creates new Pizza from inputted data

    resetFields();

    $(".display-order").show();
    $(".display-cost").show();

    $("span#order-details").text(inputtedPizzaSize + "-inch with " + toppingsArr);
    $("span#pizza-cost").text(newPizza.getCost());
  });
});
