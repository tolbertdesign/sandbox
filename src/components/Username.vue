<template>
  <div class="mb-3">
    <slot :label="label">
      <label for="username">Default label</label>
    </slot>
    <div class="input-group">
      <div v-at-sign:foo.a.b="label" class="input-group-prepend" />
      <input
        id="username"
        type="text"
        class="form-control"
        placeholder="Username"
      />
      <div class="invalid-feedback" style="width: 100%;">
        Your username is required.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Username',

  setup() {
    return {label: 'Username'}
  },
}
</script>
