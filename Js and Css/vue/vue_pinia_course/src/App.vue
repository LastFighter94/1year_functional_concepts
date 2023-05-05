<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";
// import { storeToRefs } from "pinia";
const productStore = useProductStore()
const cartStore = useCartStore()

// const { products } = storeToRefs(useProductStore())
// instead of accessing the whole state here - we can destructure products out of it
// but to ensure the state remains reactive when destructuring it - we must use the storeToRefs function - provided by pinia

productStore.fill()

// версия без объединения мутаций в одну - внизу версия объединенных мутаций
// const addToCart = (count, product) => {
//   count = parseInt(count)
//   for (let index = 0; index < count; index++) {
//     cartStore.items.push(product)
//   }
// }

const addToCart = (count, product) => {
  count = parseInt(count)
  cartStore.$patch(state => {
    for (let index = 0; index < count; index++) {
      state.items.push(product)
    }
  })
}

</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="addToCart($event, product)"
      />
    </ul>
  </div>
</template>
