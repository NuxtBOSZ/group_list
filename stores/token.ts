import {defineStore} from 'pinia';
import {parseJwt} from '~/DO/fun'
export const useTokenStore = defineStore('token', {

    state: () => ({
        urlServer: "http://0.0.0.0:2050/",
        token: "",
        name: "",
        exp: -1
    }),
    actions: {
        async fetchToken(name: string, password: string) {
            // TODO opsłurzyć błedy
            const {data}: any = await useFetch(this.urlServer + "user/login", {
                method: 'POST',
                body: {
                    name: name,
                    password: password
                }
            });
            if (data.value) {
                this.token = data.value;
                const parseJwt1 = parseJwt(data.value);
                this.name = parseJwt1.name;
                this.exp = parseJwt1.exp;
            }
        },
        async fetchRegister(name: string, password: string) {
            // TODO opsłurzyć błedy
            const {data}: any = await useFetch(this.urlServer + "user/register", {
                method: 'POST',
                body: {
                    name: name,
                    password: password
                }
            });
            if (data.value) {

            }
        },
    }


});