const initialState = {
    products: [],
    cart: 0
}

const CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CART":
            return {
                ...state,
                products: [...state.products, action.payload],
                cart: state.products.length+1
            }
        default:
            return state
    }
}

export default CartReducer