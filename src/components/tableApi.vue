<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import {onMounted, ref} from "vue";
import {useTask4Store} from "@/stores/task4";

const task4Store = useTask4Store()

const data = ref<string>('')

const formattedData = rawData.split(/(?=\[\d{2}:\d{2}:\d{2}])/).join('\n');


onMounted(() => {
  data.value = task4Store.getData().split(/(?=\[\d{2}:\d{2}:\d{2}])/).join('\n');;
})
</script>

<template>
  <DataTable :value="arr" >
    <Column field="log" header="Logs"></Column>
  </DataTable>
</template>

<style scoped>

</style>