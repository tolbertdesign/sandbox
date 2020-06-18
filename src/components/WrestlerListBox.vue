<template>
  <div id="app" class="p-48 antialiased font-sans text-gray-900">
    <div class="max-w-xs mx-auto">
      <Listbox v-slot="{isOpen}" v-model="selectedWrestlerId" class="space-y-1">
        <ListboxLabel class="block text-sm leading-5 font-medium text-gray-700">
          Choose a wrestler
        </ListboxLabel>
        <div class="relative">
          <ListboxButton
            v-slot="{isFocused}"
            class="inline-block w-full rounded-md shadow-sm focus:outline-none"
          >
            <span
              class="inline-block cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              :class="
                isFocused || isOpen
                  ? 'shadow-outline-blue border-blue-300'
                  : 'border-gray-300'
              "
            >
              <span class="flex items-center space-x-3">
                <img
                  :src="selectedWrestler.avatar"
                  alt
                  class="flex-shrink-0 h-6 w-6 rounded-full object-cover"
                />
                <span class="block truncate">{{ selectedWrestler.name }}</span>
              </span>
              <span
                class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
              >
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </ListboxButton>

          <Transition
            leave-active-class="transition ease-in duration-100"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-show="isOpen"
              class="absolute mt-1 w-full rounded-md bg-white shadow-lg"
            >
              <ListboxList
                class="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
              >
                <ListboxOption
                  v-for="wrestler in wrestlers"
                  :key="wrestler.id"
                  v-slot="{isActive, isSelected}"
                  :value="wrestler.id"
                >
                  <div
                    :class="
                      isActive ? 'text-white bg-indigo-600' : 'text-gray-900'
                    "
                    class="cursor-default select-none relative py-2 pl-3 pr-9"
                  >
                    <div class="flex items-center space-x-3">
                      <img
                        :src="wrestler.avatar"
                        alt
                        class="flex-shrink-0 h-6 w-6 rounded-full object-cover"
                      />
                      <span
                        x-state:on="Selected"
                        x-state:off="Not Selected"
                        :class="isSelected ? 'font-semibold' : 'font-normal'"
                        class="font-normal block truncate"
                        >{{ wrestler.name }}</span
                      >
                    </div>

                    <span
                      v-show="isSelected"
                      :class="isActive ? 'text-white' : 'text-indigo-600'"
                      class="absolute inset-y-0 right-0 flex items-center pr-4"
                    >
                      <svg
                        class="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </ListboxOption>
              </ListboxList>
            </div>
          </Transition>
        </div>
      </Listbox>
    </div>
  </div>
</template>

<script>
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxList,
  ListboxOption,
} from '@tailwindui/vue/src/Listbox.js'

export default {
  name: 'App',
  components: {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxList,
    ListboxOption,
  },
  data() {
    return {
      selectedWrestlerId: '517a4c72-ec4f-42af-86ea-84c71a156dbc',
      wrestlers: [
        {
          id: '517a4c72-ec4f-42af-86ea-84c71a156dbc',
          name: 'Stone Cold Steve Austin',
          avatar: '/img/stone-cold.jpg',
        },
        {
          id: 'e7f14d5b-3f7b-4a41-ae4f-03f37bbf751d',
          name: 'Bret Hart',
          avatar: '/img/bret-hart.jpg',
        },
        {
          id: '31516b38-4ba9-4c8b-aec2-54b8d2087a4f',
          name: 'Ric Flair',
          avatar: '/img/ric-flair.jpg',
        },
        {
          id: 'eea82467-c9ab-4fc6-8d6a-4673f453b51a',
          name: 'Macho Man Randy Savage',
          avatar: '/img/macho-man.jpg',
        },
        {
          id: 'c7d301dd-7f4d-4e11-937f-39da724c6802',
          name: 'Jake The Snake Roberts',
          avatar: '/img/jake-the-snake.jpg',
        },
        {
          id: '667ef004-78da-4953-8531-a3329800b3ef',
          name: 'The Undertaker',
          avatar: '/img/the-undertaker.jpg',
        },
        {
          id: '35cfc70e-0669-42e8-8df4-9309ea81825c',
          name: 'Hulk Hogan',
          avatar: '/img/hulk-hogan.jpg',
        },
        {
          id: '754aaae2-1dfc-48cc-8693-5a9d9d7fa56e',
          name: 'Shawn Michaels',
          avatar: '/img/shawn-michaels.jpg',
        },
        {
          id: '871ab46e-6170-4eec-aa6c-15a989ce5ebd',
          name: 'British Bulldog',
          avatar: '/img/british-bulldog.jpg',
        },
        {
          id: 'e5f975c2-3862-4c82-a328-bb7746878791',
          name: 'Superfly Jimmy Snuka',
          avatar: '/img/superfly-jimmy-snuka.png',
        },
        {
          id: '49913422-ace7-46df-90cf-3efa68a8bc86',
          name: 'The Ultimate Warrior',
          avatar: '/img/the-ultimate-warrior.jpg',
        },
        {
          id: '8c9851bf-06e0-45f2-b20b-ca3ee5c78d97',
          name: 'Doink The Clown',
          avatar: '/img/doink.jpg',
        },
      ],
    }
  },
  computed: {
    selectedWrestler() {
      return this.wrestlers.find(
        wrestler => this.selectedWrestlerId === wrestler.id,
      )
    },
  },
}
</script>
