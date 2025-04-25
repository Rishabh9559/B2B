export const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toString();
};

export const convertIntoNumber = (num) => {
    const number = Number(num.replace(/,/g, ''));
    // console.log(number);

    return number;
}

export const updateCart = (state) => {
    state.itemPrice = addDecimal(state.cartItems.reduce((acc, item) => acc + convertIntoNumber(item.price) * Number(item.qty), 0));
    // console.log(itemPrice)
    state.shippingPrice =  (addDecimal((convertIntoNumber(state.itemPrice) > 10000) ? 0 : 10));
    state.taxPrice = addDecimal(convertIntoNumber((0.18 * convertIntoNumber(state.itemPrice)).toFixed(2))); //toFixed(2) is used to round off the convertIntoNumber to 2 decimal places.
    state.totalPrice = (convertIntoNumber(state.itemPrice) + convertIntoNumber(state.shippingPrice) + convertIntoNumber(state.taxPrice)).toFixed(2); // We are using Number to convert the string to a number such that everything is a number and formatted nicely.
    
    localStorage.setItem('cart', JSON.stringify(state));
};



