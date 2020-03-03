$(document).ready(function(){
    $(".deliver").click(function(){
      $("#form").toggle();
      
    });
    $("#kilo").click(function(){
      $("#orderForm").toggle();
      
    });
    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
  });
  $(document).ready(init);
    function init() {
      // $(".navTab").click(doTabClick).eq(0).click();
      $("#stepOne").click(nextPage);
      $("#stepTwo").click(pizzaBuilder);
  }
  var smallCrust = 700;
  var mediumCrust = 900;
  var largeCrust = 1200;
  var oneVeggie = 100;
  var oneMeat = 150;
  //Assists with moving from one tab to the next as its the next element in the list
  function nextPage() {
      $(".navTab").eq(1).click();
  }
  //Pulls in client provided data to build their pizza
  function pizzaBuilder(){
      var pieSize = $("input[name='size']:checked").val();
      var crustType = $("input[name='crust']:checked").val();
      var firstName = $("#firstname").val();
      var lastName = $("#lastname").val();
      var street = $("#streetaddress").val();
      var city = $("#city").val();
      var state = $("#state").val();
      var phone = $("#phonenumber").val();
      //Array stores all the selected inputs for ingredients
      var ingredients =[];
      //pushes the selected attributes into the array
      $("input[name='meat']:checked").each(function() {
          ingredients.push(this.value);
      });
      $("input[name='veggie']:checked").each(function () {
          ingredients.push(this.value);
      });
      var pieBuild = ingredients.join(", ");
      var subtotal = 0;
       //Gives the customer an initial view of their order
       $("#OrderView").html("Size: " + pieSize + "<br/>");
       $("#OrderView").append("Crust type: " + crustType + "<br/>");
       $("#OrderView").append("Ingredients: " + pieBuild + "<br/>");
      //Gives customer a chance to review their contact info
      $("#contactInfo").html("Name: " + firstName + " " + lastName + "<br/>");
      $("#contactInfo").append("Phone: " + phone + "<br/>");
      $("#contactInfo").append("Address: " + street + " " + city + " " + state + " " + "<br/>");
      //Begins calculations for pizza order
      if (pieSize == "small"){
          subtotal = subtotal + 700;
      } else if(pieSize == "medium"){
          subtotal = subtotal + 900;
      } else if(pieSize == "large"){
          subtotal = subtotal + 1200;
      } else {
          alert("Hey" + firstName + "your pizza will be delivered to your location.")
      }
      var meats = $("input[name='meat']:checked").length;
      if (meats > 0 ){
          subtotal = subtotal + (meats * 150);
      }
      var veggies = $("input[name='veggie']:checked").length;
      if (veggies > 0 ){
          subtotal = subtotal + (veggies)
      }
      var tax = subtotal * .16;
      //ksh 200 is the price of delivery
      var grandTotal = subtotal + tax + 200.00;
      //Pushes all data to corresponding paragraph id element
      $("#infoSummary").html("Name: " + firstName + " " + lastName + "<br/>");
      $("#infoSummary").append("Address: " + street + " " + city + " " + state + " " + "<br/>");
      $("#infoSummary").append("Phone: " + phone + "<br/>");
      //Pushes all of the meal costs to the corresponding paragraph id element
      $("#mealSummary").html("Subtotal: ksh" +subtotal + "<br/>");
      $("#mealSummary").append("Sales tax: ksh" + tax + "<br/>");
      $("#mealSummary").append("Delivery charge: ksh" + 200 + "<br/>");
      $("#mealSummary").append("Grand Total: ksh" + grandTotal + "<br/>");
      $(".navTab").eq(2).click();
      return false;
  }
  //Switches between the different tabs and displays which tab is selected
  function doTabClick() {
      $(".divTab").hide().filter(this.hash).show();
      $(".navTab").removeClass("selected");
      $(this).addClass("selected");
  }
    // $("#mealSummary").toggle();
    
  // });

  

  
