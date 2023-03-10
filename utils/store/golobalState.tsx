import { createContext, useReducer } from 'react'
import reducers from './reducer'

export const DataContext: any = createContext()


export const DataProvider = ({children}: any) => {
    const initialState = { 
        notify: {}, social: [],
    }

    const [state, dispatch] = useReducer(reducers, initialState)

    return(
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}