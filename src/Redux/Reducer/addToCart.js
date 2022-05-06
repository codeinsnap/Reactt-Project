const handleAddToCart = ( state = {} , action ) => {
    switch(action.type){
        case "SAVE_TO_CART":
            console.log("received to reducer" , action.payload)
            return {...state , cart_item : action.payload}
    }
}

export default handleAddToCart;