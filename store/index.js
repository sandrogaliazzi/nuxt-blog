export const state = () => ({
    posts:[]
})

export const mutations = {
    setPosts(state, payload){
        state.posts = payload
    }
}
