import { baseApi } from "../../api/baseApi";

const DonorLeaderboardApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLeaderDonorLeaderboard: builder.query({
            query: () => ({
                url: '/leaderboard',
                method: 'GET',
            })
        }),
    })
})

export const { useGetLeaderDonorLeaderboardQuery } = DonorLeaderboardApi;