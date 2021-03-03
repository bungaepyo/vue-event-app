<template>
  <div id="app">
    <TodayIndicator />
    <MainEvent v-bind:mainEventPassed="this.mainEvent"/>
    <TaskButtons v-on:edit-main-event="handleEditMainEvent" v-on:add-subtask="handleAddSubtask"/>
    <Subtasks v-bind:subtaskPassed="this.subtask"/>
  </div>
</template>

<script>
import TodayIndicator from '@/components/TodayIndicator.vue'
import MainEvent from '@/components/MainEvent.vue'
import TaskButtons from '@/components/TaskButtons.vue'
import Subtasks from '@/components/Subtasks.vue'

export default {
  name: 'EventPlanner',
  components: {
    TodayIndicator,
    MainEvent,
    TaskButtons,
    Subtasks
  },
  data: function () {
    return {
        subtask: "",
        mainEvent: new Object(),
    }
  },
  methods: {
    handleEditMainEvent (mainEvent) {
        this.mainEvent = mainEvent;
    },
    handleAddSubtask (subtask) {
        this.subtask = subtask;
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
