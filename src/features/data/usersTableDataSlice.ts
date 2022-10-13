import {IUser} from "helpers/models/user";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";



const initialState = {
    tableData: [] as IUser[]
}

const userTableDataSlice = createSlice({
    name: 'user-table-data',
    initialState,
    reducers: {
        updateUsersDataTableView: (state, action:PayloadAction<IUser[]>) =>{
            // @ts-ignore
            state.tableData = action.payload;
        },
        filterUsersData: (state, action:PayloadAction<IUser>) => {

                //@ts-ignore
                state.tableData =  state.tableData.filter((i) => i.id == action.payload.id )

        }
    }
})

export const { updateUsersDataTableView, filterUsersData } = userTableDataSlice.actions
export default userTableDataSlice.reducer