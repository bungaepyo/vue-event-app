<template>
  <div>
    <table id='subtaskTable'>
      <tbody>
        <tr class='subtaskTable' v-if="subtaskList.length === 0">
            <td class='subtaskTable'>No Subtask</td>
        </tr>
        <tr class='subtaskTable' v-else v-bind:key="subtask.subtask" v-for="subtask in subtaskList">
            <td><b-icon-circle v-if="!checked" v-on:click="updateCheck" class="subtaskDelete" variant="success"/><b-icon-check-circle v-else v-on:click="updateCheck" class="subtaskDelete" variant="success"/></td>
            <td class='subtaskTable' id="subtaskText">{{subtask.subtask}}</td>
            <td><b-icon-trash class="subtaskDelete" variant="success"/></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment';
import { BIconTrash, BIconCircle, BIconCheckCircle } from 'bootstrap-vue'

export default {
  name: 'Subtasks',
  data: function() {
      return{
        checked: false,
        subtaskList: [],
        inputData: {}
      }
  },
  props: {
    subtaskPassed: {
      type: String
    }
  },
  components: {
      BIconTrash,
      BIconCircle,
      BIconCheckCircle
  },
  methods: { 
      addSubtask() {
          this.subtaskList.push(this.inputData)
      },
      updateCheck() {
          this.checked = !this.checked;
      }
  },
  watch: {
    subtaskPassed: function () {
      var inputData = { 'date': moment().format('MMMM Do YYYY, h:mm:ss a'), 'subtask': this.subtaskPassed }
      this.inputData = inputData
      this.addSubtask()
    }
  }
}
</script>

<style>
  #subtaskTable {
    margin-left: auto;
    margin-right: auto;
  }

  .subtaskTable {
    border: 1.5px solid #28A744;
    color: black;
    font-size: large;
    padding: 10px;
    width: 400px;
  }

</style>
