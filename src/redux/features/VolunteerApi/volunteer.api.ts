import { baseApi } from "../../api/baseApi";


const volunteerApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        submitVolunteerData: builder.mutation({
            query: (volunteerData) => ({
                url: '/volunteer',
                method: 'POST',
                body: volunteerData
            })
        })
    })
})


export const { useSubmitVolunteerDataMutation } = volunteerApi;