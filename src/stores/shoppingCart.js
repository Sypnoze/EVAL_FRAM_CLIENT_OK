import { reactive, watch } from "vue";

// 1. On récupère le panier depuis le localStorage (ou [] si rien)
const cart = reactive(JSON.parse(localStorage.getItem("cart") || "[]"));

// 2. On sauvegarde à chaque changement
watch(
  cart,
  (newCart) => {
    console.log("Sauvegarde dans le localStorage :", newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  },
  { deep: true }
);

// Ajouter un article
const addItem = (product) => {
  const existing = cart.find((p) => p.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }
};

export const cartStore = {
  cart,
  addItem,
};

