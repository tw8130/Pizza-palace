
//Shipping & handling fee
    var price = 0;
    var shipping = 0;
    var total = price + shipping;
    function calculateShipping(price){
    //Add $1.50 with any purchase that is less than or equal to $25.00
    if (price <= 25){
     return 1.5;
    }
    //Add 10% with any purchase that is greater than $25.00 but do not inlcude the $1.50 fee
    else{
     return price * 10 / 100
    }
    }
