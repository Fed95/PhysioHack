import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = []

const description = 'laureato pieni voti. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
const professionals = [
    {
        id: 1234,
        name: 'Giorgio',
        profession: 'fixer',
        contacts: '800-900-313',
        description: description
    },
    {
        id: 1235,
        name: 'Mario',
        profession: 'fixer',
        contacts: '800-673-313',
        description: description
    },
    {
        id: 1236,
        name: 'Francesca',
        profession: 'fixer',
        contacts: '800-900-242',
        description: description
    },
    {
        id: 1237,
        name: 'Alessandra',
        profession: 'fixer',
        contacts: '253-900-313',
        description: description
    },
    {
        id: 1238,
        name: 'Luigi',
        profession: 'fixer',
        contacts: '800-900-313',
        description: description
    },
    {
        id: 1239,
        name: 'Anna',
        profession: 'fixer',
        contacts: '800-900-313',
        description: 'laureato pieni voti'
    },
];
export const fetchUsers = createAsyncThunk('users/fetchUsers', async address => {
    return professionals;
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