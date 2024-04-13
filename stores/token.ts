import {defineStore} from 'pinia';
import {parseJwt} from '~/DO/fun'
import {successColor, successIcon, timeout, warningColor, warningIcon} from "~/DO/var/toast";

export const useTokenStore = defineStore('token', {

    state: () => ({
        urlServer: "http://0.0.0.0:2050/",
        // urlServer: "http://192.168.56.54:2050/",
        token: "",
        name: "",
        exp: -1
    }),
    actions: {
        async fetchToken(name: string, password: string) {
            const toast = useToast()

            const {data , error}: any = await useFetch(this.urlServer + "user/login", {
                method: 'POST',
                body: {
                    name: name,
                    password: password
                }
            });
            if (error.value){
                toast.add({title:'fetchToken: '+error.value.statusCode , color:warningColor , icon:warningIcon , timeout: timeout});
            }

            if (data.value) {
                this.token = data.value;
                const parseJwt1 = parseJwt(data.value);
                this.name = parseJwt1.name;
                this.exp = parseJwt1.exp;
                toast.add({title:'fetchToken: '+this.name + " exp: "+new Date(this.exp).toLocaleString(), color:successColor , icon:successIcon , timeout: timeout});
            }
        },
        async fetchRegister(name: string, password: string) {
            const toast = useToast()

            const {data,error}: any = await useFetch(this.urlServer + "user/register", {
                method: 'POST',
                body: {
                    name: name,
                    password: password
                }
            });
            if (error.value){
                toast.add({title:'fetchRegister: '+error.value.statusCode , color:warningColor , icon:warningIcon , timeout: timeout});
            }else {
                toast.add({title:'fetchRegister' , color:successColor , icon:successIcon , timeout: timeout});
            }

        },
    }


});