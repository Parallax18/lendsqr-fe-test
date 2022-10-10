import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IAppUser} from "../../helpers/models/app-user";


interface IAuthSlice {
    user: IAppUser | null,
    isAuthenticated: boolean
}

const initialState : IAuthSlice = {
    user: null,
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticateUser: (state, action: PayloadAction<IAppUser>) => {
            state.user = action.payload;
            state.isAuthenticated = true
        },
    }
})

export const { authenticateUser } = authSlice.actions
export default authSlice.reducer