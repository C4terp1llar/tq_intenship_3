<script setup lang="ts">
import {ref} from "vue";

import MultiSelect from 'primevue/multiselect'
import Button from 'primevue/button'

const selectedCities = ref<string[]>([]);

const clear = () => {
  selectedCities.value = [];
};

const cities = ref([
  {name: 'New York', code: 'NY'},
  {name: 'Rome', code: 'RM'},
  {name: 'London', code: 'LDN'},
  {name: 'Istanbul', code: 'IST'},
  {name: 'Paris', code: 'PRS'}
]);
</script>

<template>

  <MultiSelect
      v-model="selectedCities"
      :options="cities"
      optionLabel="name"
      placeholder="Выберите город"
  >
    <template #header>
      <div  v-if="selectedCities.length" @click="clear" class="custom-clear-button" >
        <Button icon="pi pi-times"/>
      </div>
    </template>
  </MultiSelect>

</template>

<style scoped>
.custom-clear-button{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
</style>
