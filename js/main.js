function getElement(id){
    return document.getElementById(id);
}
function updatedProduct(productId, productTotal, price, isIncreasing){
    const inputProduct = getElement(productId);
    let inputPoductUpdate = inputProduct.value;
    if(isIncreasing){
        inputPoductUpdate = parseInt(inputPoductUpdate) + 1;
    }
    else{
        if(inputProduct.value > 0){
            inputPoductUpdate = parseInt(inputPoductUpdate) - 1;
        }
    }
    inputProduct.value = inputPoductUpdate;

    const inputPRoductTotal = getElement(productTotal);
    inputPRoductTotal.innerText = inputPoductUpdate * price;

    calculateTotal();
}
function getInputValue(productInput){
    const productsInputText = getElement(productInput);
    const productsInput = parseFloat(productsInputText.value);
    return productsInput;
}

function calculateTotal(){
    const iphoneTotal = getInputValue("iphone-input") * 1219;
    
    const caseTotal = getInputValue("case-input") * 59;

    const subTotal = iphoneTotal + caseTotal;
    const tax = subTotal * 0.1;
    const priceTotal = subTotal + tax;

    getElement("sub-total").innerText = subTotal;
    getElement("tax").innerText = tax.toFixed(2);
    getElement("price-total").innerText = priceTotal;
    

}

getElement("iphone-plus-btn").addEventListener("click", function(event){
    updatedProduct("iphone-input", "iphone-total", 1219, true);
});
getElement("iphone-minus-btn").addEventListener("click", function(event){
    updatedProduct("iphone-input", "iphone-total", 1219, false);
});

getElement("case-plus-btn").addEventListener("click", function(event){
    updatedProduct("case-input", "case-total", 59, true);
});
getElement("case-minus-btn").addEventListener("click", function(event){
    
    updatedProduct("case-input", "case-total", 59, false);
});