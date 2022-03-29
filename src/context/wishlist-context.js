import {createContext,useReducer, useContext} from 'react';

const wishListContext = createContext(null);

const WishListContextProvider = ({children}) => {
  const reducerFunction = (wishListState, {type,payload}) => {
    switch(type){
      case "ADD_TO_WISHLIST":
        let index = wishListState.wishlist.findIndex((ele) => ele.id === payload.id)
        if(index === -1){
          return {
            ...wishListState,
            wishlistCount: wishListState.wishlistCount + 1,
            wishlist: [...wishListState.wishlist, {...payload}]
                };
        }else{
          return wishListState
        }
      case "REMOVE_FROM_WISHLIST":
        return {
          ...wishListState,
          wishlist: wishListState.wishlist.filter((c) => c.id !== payload.id),
          wishlistCount: wishListState.wishlistCount - 1,
        };
      default: 
        return {wishListState}
    }
  }

  const [{wishlist, wishlistCount} ,wishListDispatch] = useReducer(reducerFunction, {wishlist: [], wishlistCount: 0})

  return(
    <wishListContext.Provider value={{wishlist,wishlistCount, wishListDispatch}}>
      {children}
    </wishListContext.Provider>
  )

}
const useWishList = () => useContext(wishListContext);

export {WishListContextProvider, useWishList}