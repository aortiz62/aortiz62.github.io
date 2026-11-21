var form = document.getElementById("pizzaForm");

function calculateorder() {
    var sizes = document.getElementsByName("size");
    var selectedSize = "";
    var baseprice = 0;

    for (var i = 0; i < sizes.length; i++) {
        if (sizes[i].checked) {
            selectedSize = sizes[i].value;
            baseprice = Number(sizes[i].getAttribute("data-price"));
        }
    }
    document.getElementById("displaysize").textContent = selectedSize;
    document.getElementById("displaytotal").textContent = baseprice.toFixed(2);
}

form.addEventListener("change", calculateorder);

calculateorder();