import {defineStore} from 'pinia'
import api from '../services/api'

export const useAuthStore = defineStore({
    id:'auth',
    state:() => ({
        username:null,
        isLoggedIn:false,
    }),
    actions:{
        login(username,password){
            return api.post('/auth/login/',{username,password})
                .then((response) => {
                    localStorage.setItem('access',response.data.access_token)
                    this.isLoggedIn = true
                    this.username = response.data.username
                })
        },
        logout(){
            localStorage.removeItem('access')
            this.isLoggedIn = false
            this.username = null
        },
        renew(){
            return api.post('/auth/user/')
                .then((response) => {
                    this.isLoggedIn = true
                    this.username = response.data.username
                })
        }
    }
})