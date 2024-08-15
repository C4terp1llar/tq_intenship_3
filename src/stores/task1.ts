import {defineStore} from "pinia";
import { ref} from "vue";
import axios from "axios";

export const useTask1Store = defineStore('task1', () => {

    const pending = ref<boolean>(false);
    const error = ref<string | null>(null);

    const clientUrlTitle = ref<string>('')

    const getClientUrlTitle = async (clientUrl: string) => {
        error.value = null;
        pending.value = true;

        try{
            const response = await axios.get('clientUrl');

            const html = response.data;

            const titleMatch = html.match(/<title>(.*?)<\/title>/);

            if (titleMatch) {
                clientUrlTitle.value = titleMatch[1];
            } else {
                clientUrlTitle.value = 'Тайтл страницы не найден';
            }

        }catch(e: any){
            console.error(e);
            error.value = e.message;
            clientUrlTitle.value = 'Ошибка при получении тайтла страницы';
        }finally {
            pending.value = false;
        }
    }

    return {
        pending,
        error,
        clientUrlTitle,
        getClientUrlTitle
    }
})
