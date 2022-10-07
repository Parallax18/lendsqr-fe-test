import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IUser} from "../../helpers/models/user";
// import {EndpointBuilder} from "@reduxjs/toolkit/dist/query/endpointDefinitions";
// import {BaseQueryArg} from "@reduxjs/toolkit/dist/query/baseQueryTypes";

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
        getSingleUser: builder.query({
            query: (id: string) => `/users/${id}`
        })
    })
})

export const { useGetUsersQuery, useGetSingleUserQuery } = userApiSlice
export default userApiSlice