import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchResult:[],
        searchError:null,
        searchLoading:null,
        query:""
    },
    reducers:{
        setSearchResult:(state,action)=>{
           state.searchResult = action.payload
        },
        setSearchError:(state,action)=>{
            state.searchError = action.payload
        },
        setSearhLoading(state){
            state.searchError = false
        },
        setSearchQuery(state,action){
            state.query = action.payload
        }
    }
})

export const {setSearchError,setSearchResult,setSearhLoading,setSearchQuery} = searchSlice.actions
export default searchSlice.reducer