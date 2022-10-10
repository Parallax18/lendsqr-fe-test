import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IUser} from "../../helpers/models/user";

const userApiSlice = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1'
    }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], void>({
            query: () => '/users'
        }),
        getSingleUser: builder.query<IUser, string>({
            query: (id: string) => `/users/${id}`
        })
    })
})




// export const { selectAll: selectAllUsers } = usersAdapter.getSelectors<RootState>((state) => selectUsersData(state) ?? initialState)

export const { useGetUsersQuery, useGetSingleUserQuery } = userApiSlice
export default userApiSlice