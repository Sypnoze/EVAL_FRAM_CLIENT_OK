import { reactive, watch, computed } from "vue";

// local storage
const cart = reactive(JSON.parse(localStorage.getItem("cart") || "[]"));

// watcher pour la sauvegarde
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
// total du panier
const subTotal = computed(() =>
  cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
);
// le delete d'item
const deleteOneById = (id) => {
  cart.splice(
    cart.findIndex((item) => item.id === id),
    1
  );
};

export const cartStore = {
  cart,
  addItem,
  subTotal,
  deleteOneById,
};

