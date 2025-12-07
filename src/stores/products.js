import { reactive } from "vue";
import DB from "@/services/DB";

// on met en place le tableau réactif
const products = reactive([]);
// on charge l'api
const init = async (apiURL) => {
    DB.setApiURL(apiURL);
    products.splice(products.length, 0, ...(await DB.findAll()));
};

export const productsStore = reactive({
    init,
    products,
});

