<template>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="item-name">Name</label>
      <input
        id="item-name"
        :value="name"
        type="text"
        class="form-control"
        @input="updateName($event.target.value)"
      />
    </div>
    <div class="col-md-3 mb-3">
      <label for="item-price">Price</label>
      <input
        id="item-price"
        :value="price"
        type="number"
        class="form-control"
        @input="updatePrice($event.target.value)"
      />
    </div>
    <div class="col-md-3 mb-3">
      <label for="item-quantity">Quantity</label>
      <input
        id="item-quantity"
        :value="quantity"
        type="number"
        class="form-control"
        @input="updateQuantity($event.target.value)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'price', 'quantity'],
  setup(props, {emit}) {
    const updateName = value => emit('update:name', value)
    const updatePrice = value => emit('update:price', value)
    const updateQuantity = value => emit('update:quantity', value)

    return {updateName, updatePrice, updateQuantity}
  },
}
</script>
