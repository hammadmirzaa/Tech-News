import React, { useContext, useEffect, useReducer } from "react";
import reducer from './reducer'

let API = "https://hn.algolia.com/api/v1/search?"



const initialState = {
    query: "HTML",
    nbPages: 0,
    page: 0,
    hits: [],
}

const AppContext = React.createContext();


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)


    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            dispatch({
                type:"Get_Stories",
                payload:{
                    hits:data.hits,
                    nbPages:data.nbPages
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page${state.page}`)
    }, []);

    return (
        <AppContext.Provider value={"This is Hammad here"} >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }