
let total = 0;
let formattedPrice = 0;



function addToEntry(target) {

    const selectedItems = document.getElementById('selected-items');
    const count = selectedItems.childElementCount;
    const prodName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('ol');
    li.innerHTML = `${count + 1}. ${prodName}`;
    selectedItems.appendChild(li);

    const priceString = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const priceFloat = parseFloat(priceString);

    // Format priceFloat to have two decimal places
    const formattedPrice = priceFloat.toFixed(2);
    // Add formattedPrice to the total
    total = parseFloat(total) + parseFloat(formattedPrice);

    const formattedTotal = total.toFixed(2);
    document.getElementById('totalPrice').innerText = formattedTotal;
    document.getElementById('total').innerText = formattedTotal;
    console.log(formattedPrice);
    console.log(formattedTotal);

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


