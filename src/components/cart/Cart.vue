<script setup>
import CartItem from './CartItem.vue';
import CartTotal from './CartTotal.vue';
import { cartStore } from '@/stores/shoppingCart';


const { cart } = cartStore;

</script>
<template>
<aside class="w-full md:w-1/3 px-4">
        <h2 class="text-xl font-bold mb-4">Votre Panier</h2>
        <div class="cart bg-white rounded-lg shadow animate__animated">
          <ul class="divide-y divide-gray-200 space-y-4 p-6">
            
            <!-- Repeat for other cart items -->

            <CartItem 
            v-for="item in cart"
            :key="item.id"
            :item="item"
            />
          </ul>
          <CartTotal/>
        </div>
      </aside>
      </template>
      <style scoped></style>