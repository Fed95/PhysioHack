import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getCoordinatesFromAddress} from "../utils/Geolocator";

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async address => {
    //let res = await getCoordinatesFromAddress(address)

    return fetch('http://localhost:3001/professionals/distance?latitude=' + 40.9357261 + '&longitude=' + 12.4839667)
        .then(response => response.json())
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            return action.payload
        },
    },
})

export default usersSlice.reducer