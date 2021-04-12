export const initialState = {
    user: null,
    playList: [],
    playing: false,
    item: null,
    token: null,
    discover_weekly : null
}


const reducer = (state, action) => {

    switch (action.type ) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
    
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
        
        case "SET_PLAYLIST":
            return {
                ...state,
                playList: action.playList
            };
        
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly : action.discover_weekly
            }
        
        default:
            return state;
    }
}

export default reducer;