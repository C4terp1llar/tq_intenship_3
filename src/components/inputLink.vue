<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import {ref} from 'vue';
import {useTask1Store} from "@/stores/task1";

const taskStore = useTask1Store()

const inputValue = ref<string>('');
const link = ref<string | null>(null);

const changeEdit = async () => {
  if (inputValue.value.trim().length > 0) {
    link.value = `https://${inputValue.value.trim()}`;
    await taskStore.getClientUrlTitle(link.value)
  }
};

const changeInput = () => {
  link.value = null;
};

</script>

<template>

  <InputText
      v-if="!link"
      v-model="inputValue"
      @blur="changeEdit"
      @keydown.enter="changeEdit"
      placeholder="https://"
  />

  <div v-if="link" class="link-container">
    <a target="_blank" :href="link">{{ taskStore.clientUrlTitle }}</a>
    <Button icon="pi pi-pencil" @click="changeInput"/>
  </div>
</template>

<style scoped>
.link-container{
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
