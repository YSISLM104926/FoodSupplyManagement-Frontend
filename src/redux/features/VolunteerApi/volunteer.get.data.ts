import { baseApi } from "../../api/baseApi";


const volunteerGetApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getVolunteerData: builder.query({
            query: () => ({
                url: '/volunteer',
                method: 'GET',
            })
        })
    })
})


export const { useGetVolunteerDataQuery } = volunteerGetApi;