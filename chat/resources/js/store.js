
import { createStore } from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

const state = {
    user: {}
}

const mutations = {
    setUserState: (state, value) => state.user = value
}

const actions = {
    userStateAction: ({commit}) => {
        axios.get('api/user/me').then(response => {
            const userResponse = response.data.user
            console.log(userResponse)
            commit('setUserState', userResponse)
        })
    }
}

export default createStore({
    state,
    mutations,
    actions,
    plugins: [createPersistedState()]
})