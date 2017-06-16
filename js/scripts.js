// business logic goes here
function Pizza(size, cost) {
  this.size = size;
  this.toppings = toppingsArr;
  this.cost;
};

var toppingsArr = [];

function Toppings(_toppingsArr) {
  this.toppings = toppingsArr;
};

Pizza.prototype.getCost = function() {
  // implement function to get cost from pizza size and toppings
};



// user-interface logic goes here
$(document).ready(function() {
  // console.log("hello");
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
      // console.log("hello");

    var inputtedPizzaSize = $("#pizza-size").val();  // gets pizza-size value (working)
      // console.log(inputtedPizzaSize);
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var topping = $(this).val();
      toppingsArr.push(topping);
    });  // gets pizza toppings; pushes to toppingsArr (working)
      console.log(toppingsArr);

    var newPizza = new Pizza(inputtedPizzaSize, toppingsArr, 5);
      console.log(newPizza);  // creates new Pizza from inputted data (inputtedPizzaSize and toppingsArr working)

    $(".display-cost").show();
  });
});
