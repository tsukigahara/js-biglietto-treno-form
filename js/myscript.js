const fixedfare = 0.21;
var SubmitBtn = document.getElementById("submit-btn");
SubmitBtn.addEventListener("click", traincalc);

function traincalc() {
    var name = document.getElementById("name").value;
    var distance = document.getElementById("distance").value;
    var agerange = document.getElementById("agerange").value;
    var ticketElement = document.getElementById("ticket");
    var price;
    var total;
    var discount;
    price = distance * fixedfare;
    if(agerange === "un") {
        total = price - (price * 0.2);
        discount = "Under 18 ";
    }
    else if (agerange === "ov") {
        total = price - (price * 0.4);
        discount = "Over 65";
    }
    else{
        total = price;
        discount = "Adult";
    }
    total = total.toFixed(2);

    console.log(total);

    var ticketNumber = Math.floor(Math.random()* 9000) + 1000;

    ticketElement.style.display = "block";
    var tbody = document.getElementById("result");
    var row = tbody.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    
    cell1.innerHTML = ticketNumber;
    cell2.innerHTML = name;
    cell3.innerHTML = discount;
    cell4.innerHTML = "€ " + total;
}