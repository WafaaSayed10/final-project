import { createSlice } from '@reduxjs/toolkit'

export const Favorite = createSlice({
    name: "favorite",
    initialState:{
        favorites: []
        //favorites: JSON.parse(localStorage.getItem("savedFavorites")) || []
    },
    reducers:{
        addAndRemoveFavorite: (state, action) => {
            const existingProduct = state.favorites.some(
                (product) => product.id === action.payload.id
            );
            //action.payload.favorite = action.payload.favorite===true? false : true
            
            if (existingProduct) {
                //action.payload = {...action.payload,favorite:true}
                state.favorites = state.favorites.filter(
                    (product) => product.id !== action.payload.id
                );
                //action.payload.favorite=false
            }
            else{
                state.favorites.push(action.payload);
                //action.payload.favorite=true
                //action.payload = {...action.payload, favorite:false}
                
            }
        },
        removeFavorite:(state, action)=>{
            state.favorites= state.favorites.filter((product)=>
                product.id!==action.payload.id
            )
        },
        resetFavorite: (state) => {
            state.favorites = [];
        }
    }
})

export const {addAndRemoveFavorite, removeFavorite, resetFavorite} = Favorite.actions
export default Favorite.reducer