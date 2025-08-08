

<template>
  <div class="app">
    <header class="app-header">
      <h1>Counter</h1>
      
    </header>
    
    <main class="app-main">
      <counter />
    </main>

  
  </div>
</template>

<script setup>
import Counter from '../components/Counter.vue'
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  text-align: center;
  padding: 2rem;
  color: white;
}

.app-header h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  font-weight: 300;
}

.app-header p {
  margin: 0;
  opacity: 0.9;
}

.app-main {
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-footer {
  text-align: center;
  padding: 1rem;
  color: white;
  opacity: 0.8;
}

.counter-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
</style>