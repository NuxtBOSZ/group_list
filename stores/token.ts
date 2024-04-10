import { defineStore } from 'pinia';
export const useTodosStore = defineStore('token', {

    state: () => ({
        urlServer:"http://0.0.0.0:2050/",
        token: "",
        name: "",
        nameToken: "",
        passwordToken: "",
    }),
    actions: {
        async fetchToken() {
            const { data }: any = await useFetch(this.urlServer+"user/login",{
                method: 'POST',
                body: {
                    name: this.nameToken,
                    password: this.passwordToken
                }
            });
            if (data.value) {
                this.token = data.value;
            }
        },
        async fetchCheckToken() {
            const { data }: any = await useFetch(this.urlServer+"user/auth",{
                method: 'POST',
                body: {
                    name: this.nameToken,
                    password: this.passwordToken
                },
                headers: {
                    Authorization: this.token,
                }
            });
            if (data.value) {
                this.name = data.value;
            }
        },
    }


});