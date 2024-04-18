import {defineStore, storeToRefs} from "pinia";
import {useTokenStore} from "~/stores/token";
import {timeout, warningColor, warningIcon} from "~/DO/var/toast";

export const useUserStore = defineStore('user', {

    state: (): {users : {name:string}[],count:number,pageCount:number,pagination:boolean} => ({
        users: [],
        count: 0,
        pageCount: 10,
        pagination: true,
    }),
    actions:{
        async fetchUsers(SearchByName:string|null = null,UserSortBy:"name" | "id" | null = null,SortOrder: "ASC" | "DES" | null = null,PageSize: number | null = null, PageNumber: number | null = null){
            const tokenStore = useTokenStore();
            const {token,urlServer} = storeToRefs(tokenStore);
            const toast = useToast()

            let isStartQuery = true
            const Q = ()=>{
                if (isStartQuery){
                    isStartQuery = false;
                    return "?"
                }{
                    return "&"
                }
            }

            const {data , error}: any = await useFetch(
                urlServer.value+"user/all" +
                (SearchByName!=null ? (Q()+"SearchByName="+SearchByName) : "") +
                (UserSortBy!=null ? (Q()+"UserSortBy="+UserSortBy) : "") +
                (SortOrder!=null ? (Q()+"SortOrder="+SortOrder) :"") +
                (PageSize!=null ? (Q()+"PageSize="+PageSize) :"") +
                (PageNumber!=null ? (Q()+"PageNumber="+PageNumber) :"")

        ,{
                headers:{
                    Authorization: token.value,
                }
            })

            if(error.value){
                toast.add({title:'fetchUsers: '+error.value.statusCode , color:warningColor , icon:warningIcon , timeout: timeout});
            }else {
                if (data.value){
                    this.users = data.value.users;
                    this.count = data.value.count;
                }
            }
        }


    }
})
