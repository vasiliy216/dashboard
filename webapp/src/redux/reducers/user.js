const initState = {
    data: null,
    token: window.localStorage.token,
    is_auth: !!window.localStorage.token
}

export default (state = initState, { type, payload }) => {
    switch (type) {
        case "USER:SET_DATA":
            return {
                ...state,
                data: payload,
                is_auth: true,
                token: window.localStorage.token
            };
        case "USER:SET_IS_AUTH":
            return {
                ...state,
                is_auth: payload
            };
        default:
            return state
    }
}