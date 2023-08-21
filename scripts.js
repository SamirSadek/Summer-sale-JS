let total = 0;
function addToEntry(target) {

    const selectedItems = document.getElementById('selected-items');
    const count = selectedItems.childElementCount;
    const prodName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('ol');
    li.innerHTML = `${count + 1}. ${prodName}`;
    selectedItems.appendChild(li);

    const priceString = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const priceFloat = parseFloat(priceString);

    const formattedPrice = priceFloat.toFixed(2);
    total = parseFloat(total) + parseFloat(formattedPrice);

    const formattedTotal = total.toFixed(2);
    document.getElementById('totalPrice').innerText = formattedTotal;
    document.getElementById('total').innerText = formattedTotal;

}


function couponCode(target) {
    const inputCoupon = target.parentNode.childNodes[1].value;
    const totalPrice = document.getElementById('totalPrice');
    const totalPriceValue = totalPrice.innerText;
    const totalPriceFloat = parseFloat(totalPriceValue);
    console.log(totalPriceFloat, inputCoupon);

    if (inputCoupon == "SELL200" && totalPriceFloat >= 200) {
        const discountPrice = totalPriceFloat * (1 / 5);
        const priceAfterDiscount = totalPriceFloat - discountPrice;
        const formattedDiscountPrice = discountPrice.toFixed(2);
        const formattedPriceAfterDiscount = priceAfterDiscount.toFixed(2);
        document.getElementById('discount').innerText = formattedDiscountPrice;
        document.getElementById('total').innerText = formattedPriceAfterDiscount;
        console.log(formattedPriceAfterDiscount);

    } else {
        alert("Requirements Doesn't match");
    }
}


const totalPriceSpan = document.getElementById("totalPrice");
const purchaseBtn = document.getElementById("purchaseBtn");
let button = document.getElementById('applyBtn');
button.disabled = true;
totalPriceSpan.addEventListener("DOMSubtreeModified", function() {
    const totalPrice = parseFloat(totalPriceSpan.innerText);
    if (totalPrice >= 200) {
        button.removeAttribute("disabled");
        button.classList.remove("cursor-not-allowed", "opacity-50");
    } else {
        button.setAttribute("disabled", true);
        button.classList.add("cursor-not-allowed", "opacity-50");
    }
});
    

totalPriceSpan.addEventListener("DOMSubtreeModified", function() {
    const totalPrice = parseFloat(totalPriceSpan.innerText);
    if (totalPrice > 0) {
        purchaseBtn.removeAttribute("disabled");
        purchaseBtn.classList.remove("cursor-not-allowed", "opacity-50");
    } else {
        purchaseBtn.setAttribute("disabled", true);
        purchaseBtn.classList.add("cursor-not-allowed", "opacity-50");
    }
});

