const initState = {
    items: []
}

export default (state = initState, { type, payload }) => {
    switch (type) {
        case "POSTS:SET_ITEMS" :
            return {
                ...state,
                items: payload
            }
        
        
    }
}