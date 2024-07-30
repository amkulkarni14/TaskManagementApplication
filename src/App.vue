<script setup>
import {useTaskStore} from './stores/taskStore'
import TaskList from './components/TaskList.vue';
import addTask from './components/addTask.vue';
import { ref } from 'vue';
const taskStore = useTaskStore()

const filter = ref('all');
const click=()=>{
  this.isvisible = !isvisible
}

console.log(taskStore.tasks.id)
</script>

<template>
 <main>
<header>
<img src="./assets/logo.jpg" alt="task-logo">

 <h1> Task-Management</h1>
</header>

<div class="new-Task"><addTask /></div>
<div class="task-list">
  <nav class="filter">

    <button @click="filter = 'all'"> All Tasks</button>
    <button @click="filter = 'fav'"> Favorite Tasks</button>
    <button @click="taskStore.$reset" class="align : left">reset</button>
  </nav>
  </div>
  <div class="task-list" v-if="filter === 'all'">
  <h4> All Tasks.</h4>
  <div> You have {{ taskStore.totalCount }} tasks left to do ...!!</div>
  <div v-for="task in taskStore.tasks"   >
    <TaskList  :task= "task"/>

  </div>
</div>


<div class="task-list"  v-if="filter === 'fav'">
  <h4> Fav Tasks</h4>
  <div> You have {{ taskStore.favCount }} tasks left to do ...!!</div>
  <div v-for="task in taskStore.fav"   >
    <TaskList  :task= "task"/>

  </div>
</div>


 

 </main>
</template>

<style scoped>

</style>
