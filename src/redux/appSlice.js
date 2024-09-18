import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        open: false
    },
    reducers: {
        //actions
        setOpen: (state, action) => {
            state.open = action.payload;//open ki value k sth ched khani kro
        }
    }
});

export const { setOpen } = appSlice.actions;
export default appSlice.reducer
