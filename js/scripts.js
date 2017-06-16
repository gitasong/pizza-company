// business logic goes here




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
