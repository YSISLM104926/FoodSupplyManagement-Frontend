import { baseApi } from "../../api/baseApi";


const CommunityCommentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        submitCommunityComment: builder.mutation({
            query: (commentData) => ({
                url: '/community-posts',
                method: 'POST',
                body: commentData
            })
        }),
        getCommunityComment: builder.query({
            query: () => ({
                url: '/community-posts',
                method: 'GET',
            })
        })
    })
})

export const { useSubmitCommunityCommentMutation, useGetCommunityCommentQuery } = CommunityCommentApi;