<script setup>
import { cartStore } from '@/stores/shoppingCart';

const { addItem } = cartStore;

const props = defineProps({
    product: { type: Object, required: true },
});
</script>

<template>
  <article class="bg-white rounded-lg overflow-hidden shadow-md">
    <img
      :src="`https://picsum.photos/300/200/?random=${product.id}`"
      alt="Product image"
      class="w-full"
    />
    <div class="p-4">
      <h2 class="font-bold text-lg mb-2">{{ product.name }}</h2>
      <p class="text-gray-700">{{ product.price }}€</p>
      <button 
        class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="addItem(product)"
      >
        Ajouter
      </button>
    </div>
  </article>
</template>

<style scoped></style>