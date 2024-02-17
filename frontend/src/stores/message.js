import {defineStore} from 'pinia'

export const useMessageStore = defineStore({
    id:'message',
    state:() => ({
        level:null,
        message:[]
    }),
    getters:{
        isError: (state) => state.level === 'error',
        isWarning: (state) => state.level === 'warning',
        isInfo: (state) => state.level === 'info',
    },
    actions:{
        setError(errorObj){
            this.level = errorObj.level || 'error'
            this.messages = errorObj.messages || [errorObj.message]
        },
        setErrorMessage(message){
            this.level = 'error'
            this.messages = [message]
        },
        setWarningMessage(message){
            this.level = 'warning'
            this.messages = [message]
        },
        setInfoMessage(message){
            this.level = 'info'
            this.messages = [message]
        },
        clear(){
            this.level = null
            this.messages = []
        }
    }
})