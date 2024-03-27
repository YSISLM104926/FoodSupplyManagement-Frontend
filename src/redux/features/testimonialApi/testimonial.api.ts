import { baseApi } from "../../api/baseApi";


const TestimonialApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        submitTestimonial: builder.mutation({
            query: (testimonialData) => ({
                url: '/testimonial',
                method: 'POST',
                body: testimonialData
            })
        })
    })
})


export const { useSubmitTestimonialMutation } = TestimonialApi;