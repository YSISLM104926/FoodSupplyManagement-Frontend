import { baseApi } from "../../api/baseApi";


const GetTestimonialApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTestimonial: builder.query({
            query: () => ({
                url: '/testimonial',
                method: 'GET',
            })
        })
    })
})


export const { useGetTestimonialQuery } = GetTestimonialApi;