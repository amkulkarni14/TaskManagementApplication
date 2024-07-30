<script setup>
 import { useTaskStore } from '@/stores/taskStore';

 const taskStore=useTaskStore()
const props = defineProps({
    task:Object
})

</script>

<template>
    <div class="task">
        <h3> {{ task.id }}</h3>
        <h3> {{ task.task }}</h3>
       <div class="icons">
        <i class="material-icons" @click="taskStore.deleteTask(task.id)" :class="{delete : hover}"> delete</i>
        <i class="material-icons" @click="taskStore.toggleFav(task.id)" :class="{active : task.isFav}"> favorite</i>
       </div>
    </div>
</template>