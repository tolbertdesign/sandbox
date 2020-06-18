<template>
  <form class="card p-2">
    <div class="input-group">
      <!-- eslint-disable -->
      <input
        v-model="percent"
        type="text"
        class="form-control"
        placeholder="Promo code"
      />
      <div class="input-group-append">
        <button type="button" class="btn btn-secondary" @click="useCoupon">
          Redeem
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'Coupon',
  props: ['percent'],
  setup(props, {emit}) {
    const percent = ref(props.percent)
    const useCoupon = () => emit('redeem', percent.value)
    // eslint-disable-next-line vue/no-dupe-keys
    return {percent, useCoupon}
  },
}
</script>
