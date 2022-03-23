import {createContext, useContext, useReducer } from 'react';

const filterContext = createContext();

const FilterContextProvider = ({children}) => {

  const reducerFunction = (state, action) => {
    switch(action.type){
      case "SORT": 
        return {
          ...state,
          sortBy: action.payload
        }
      case "CATEGORY":

      let filterList = [...state.product]
      const isPresent = filterList.indexOf(action.payload);

      if (isPresent === -1) {
        // add action.payload into filterList
        filterList.push(action.payload)
      } else {
        // remove action.payload from filterList
        filterList.splice(isPresent, 1)
      }

        return {
          ...state,
          product: filterList
        }
      case "PRICE":
        return {
          ...state,
          price: action.payload
        }
      case "RATING":
        return {
          ...state,
          rating: action.payload
        }

      case "SEARCH":
        return {
          ...state,
          searchQuery: action.payload
        }
      case "RESET":
        return  {
          product: [],
          sortBy: "",
          rating: 0,
          price: 2000,
          searchQuery: ""
        }
      default:
    }
  }

  const [filterState, filterDispatch] = useReducer(reducerFunction, {
    product: [],
    sortBy: "",
    rating: 0,
    price: 2000,
    searchQuery: ""
  })

  return (
    <filterContext.Provider value={{filterState, filterDispatch}}>
      {children}
    </filterContext.Provider>
  )
}

const useFilter = () => useContext(filterContext);

export {FilterContextProvider, useFilter}