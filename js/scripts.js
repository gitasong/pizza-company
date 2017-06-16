// business logic goes here
function Pizza(size, cost) {
  this.size = size;
  this.toppings = [];
  this.cost;
};

var toppings = [];

Pizza.prototype.getCost = function() {
  // implement function to get cost from pizza size and toppings
};



// user-interface logic goes here
$(document).ready(function() {
  // console.log("hello");
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
      // console.log("hello");

    var inputtedPizzaSize = $("#pizza-size").val();
      // console.log(inputtedPizzaSize);

    $(".display-cost").show();
  });
});
