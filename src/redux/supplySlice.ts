import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    supply: [],
}

const supplySlice = createSlice({
    name: 'supply',
    initialState,
    reducers:{}
})

export default supplySlice.reducer;