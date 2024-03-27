import { baseApi } from "../../api/baseApi";


const CommunityCommentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        submitCommunityComment: builder.mutation({
            query: (commentData) => ({
                url: '/community-comments',
                method: 'POST',
                body: commentData
            })
        })
    })
})

export const { useSubmitCommunityCommentMutation } = CommunityCommentApi;