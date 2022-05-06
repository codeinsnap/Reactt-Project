// Add Item to Cart 

export const addCart =(product)=> {
    return{
        type : "ADDITEM",
        payload : product
    }
}

export const delCart =(product)=> {
    return{
        type : "DELITEM",
        payload : product
    }
}
export const saveToCart = (product) => {
    console.log("reques received " , product)
    return{
        type : "SAVE_TO_CART",
        payload : product
    }
}