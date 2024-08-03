const reducer = (state, action) => {
    switch(action.type){
        case "Get_Stories":
            return{
                ...state,
                hits:action.payload.hits,
            };
            case "Remove_Post":
                return {
                    ...state, 
                    hits:state.hits.filter((curElem)=>curElem.objectID!==action.payload)
                }
            case "Search_Post":
            return {
                ...state,
                query:action.query
            }
    }
    return state;
}

export default reducer;