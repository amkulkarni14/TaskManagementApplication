<script setup>
 import { useTaskStore } from '@/stores/taskStore';
 import { ref } from 'vue';
  
  const taskStore = useTaskStore();
  const newTask = ref('');
  const idNumber = ref(2);
  
  const addNewTask=()=> {
    if(newTask.value.length >0){
        idNumber.value = idNumber.value+1;
        
        taskStore.addTask({ id:(idNumber.value) , task: newTask.value, isFav: false });
    }
    newTask.value = '';
    
  }

  
  </script>

<template>
<nav>
    
    <form class="form-wrapper" @submit.prevent="addNewTask">
    <input type="text"  v-model="newTask" id="search" placeholder="I want to do ...!!" required>
    <input type="submit" value="Add" id="submit">
   
</form>
</nav>
    </template>
  
  