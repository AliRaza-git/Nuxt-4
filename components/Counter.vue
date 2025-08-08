
<template>
  <div class="counter-container">
    <div class="counter-display">
      <h2>Counter: {{ counter.count }}</h2>
    </div>
    <div class="counter-controls">
      <button @click="counter.decrement()">-</button>
      <button @click="counter.increment()">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore();
</script>

<style scoped>
.counter-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

.counter-display h2 {
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
  color: #333;
}

.counter-info {
  color: #666;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.counter-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn {
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
  min-width: 60px;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-danger {
  background: #dc3545;
  color: white;
}

.btn-secondary {
  background: #6c757d;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.btn-warning {
  background: #ffc107;
  color: #333;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.btn-info {
  background: #17a2b8;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.counter-advanced {
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.custom-input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 150px;
  text-align: center;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.history {
  border-top: 1px solid #eee;
  padding-top: 1rem;
}

.history h3 {
  margin: 0 0 1rem 0;
  color: #666;
  font-size: 1.2rem;
}

.history-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.history-item {
  background: #f8f9fa;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #666;
  border: 1px solid #dee2e6;
}
</style>