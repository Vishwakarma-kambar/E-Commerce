const initialState = {
    username: "",
    isLogged: false
}

const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                username: action.payload,
                isLogged: true
            }
        default:
            return state
    }
}

export default LoginReducer