import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    return {"payload":
        [
            {"name": "Federico", "surname": "Sandrelli"},
            {"name": "Giovanni", "surname": "Probo"}
            ]
        }
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