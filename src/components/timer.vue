<script setup lang="ts">
import {computed, ref} from 'vue';
import Calendar from 'primevue/calendar';
import Button from 'primevue/button';

const time = ref<Date | null>(null);

const formatTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const setTimeNow = (): void => {
  time.value = new Date();
};

const clearTime = (): void => {
  time.value = null;
};

const formatDisplayTime = computed(() => {
  if (time.value) {
    return formatTime(time.value);
  }
  return 'Пока значение не задано :)';
});

</script>

<template>
  <div class="timer-wrapper">
    <p>Значение переменной директивы v-model: {{ formatDisplayTime }} </p>

    <Calendar
        v-model="time"
        showIcon
        timeOnly
    >
      <template #footer>
        <hr>
        <div class="timer-controls">
          <Button label="Сейчас" text @click="setTimeNow"/>
          <Button label="Очистить" text @click="clearTime"/>
        </div>
      </template>
    </Calendar>
  </div>
</template>

<style scoped>
.timer-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
}

.timer-controls {
  display: flex;
  padding: 10px;
  justify-content: space-between;
}
</style>
