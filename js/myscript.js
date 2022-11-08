const fixedfare = 0.21;

function traincalc() {
    var distance = document.getElementById("distance").value;
    var age = document.getElementById("age").value;
    var price;
    var total;
    var discount;
    price = distance * fixedfare;
    if(age < 18) {
        total = price - (price * 0.2);
        discount = "Kids discount applied";
    }
    else if (age > 65) {
        total = price - (price * 0.4);
        discount = "Over65 discount applied";
    }
    else{
        total = price;
        discount = "No discount applied";
    }
    total = total.toFixed(2);
    document.getElementById("result").innerHTML = total;
    document.getElementById("applied-disc").innerHTML = discount;
}