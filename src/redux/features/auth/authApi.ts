import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints : (builder) => ( {
        registers: builder.mutation({
            query: (registerUserInfo) => ({
                url: '/api/auth/register',
                method: 'POST',
                body: registerUserInfo
            })
        }),
        login: builder.mutation({
            query: (loginUserInfo) => ({
                url: '/api/auth/login',
                method: 'POST',
                body: loginUserInfo
            })
        })
    })
})


export const {useLoginMutation, useRegistersMutation} = authApi;