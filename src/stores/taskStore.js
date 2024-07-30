import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, task: 'Learn Vue3', isFav: true },
      { id: 2, task: 'Play Cricket', isFav: false },
    ],
  }),
  getters: {
    fav() {
      return this.tasks.filter(t => t.isFav);
    },
    favCount() {
      return this.tasks.reduce((p, c) => (c.isFav ? p + 1 : p), 0);
    },
    totalCount(state) {
      return state.tasks.length;
    },
  },
  actions: {
    addTask(task) {
      console.log(task);
      this.tasks.push(task);
    },
    toggleFav(id){
        const task = this.tasks.find(t =>t.id === id)
        task.isFav =!task.isFav
    },
    deleteTask(id){
        this.tasks=this.tasks.filter(t=>{
            return t.id !== id;
        })
    }
  },
});
