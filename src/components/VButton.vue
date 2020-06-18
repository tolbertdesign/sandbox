<template>
  <div>
    <a href="javascript:;" class="button">
      Link Button
    </a>

    <button class="button" @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
  </div>
</template>

<script>
import {reactive, computed} from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment,
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

a.button {
  text-decoration: none;
}
button.button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}
a.button,
button.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: #3e68ff;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);

  padding: 0.25em 0.75em;
  min-width: 10ch;
  min-height: 44px;

  text-align: center;
  line-height: 1.1;

  transition: 220ms all ease-in-out;
}

a.button:hover,
button.button:hover {
  background-color: #3e68ff;
}

a.button:focus,
button.button:focus {
  outline-style: solid;
  outline-color: transparent;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.18);
}

a.button:hover,
a.button:active,
button.button:hover,
button.button:active {
  background-color: #3e68ff;
}

a.button.button--small,
button.button.button-small {
  font-size: 1.15rem;
}

a.button.button--block,
button.button.button-block {
  width: 100%;
}

@media screen and (-ms-high-contrast: active) {
  button.button {
    border: 2px solid currentcolor;
  }
}
</style>
