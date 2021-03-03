<template>
    <div id="taskIconGroup">
        <b-icon-plus-circle v-b-modal.modal-add-subtask class="taskIcon" variant="success"/>
        <b-icon-pencil-square v-b-modal.modal-edit-main-task class="taskIcon" variant="success"/>
        <b-icon-bell v-if="!bell" v-on:click="changeBell" class="taskIcon" variant="success"/>
        <b-icon-bell-fill v-if="bell" v-on:click="changeBell" class="taskIcon" variant="success"/>

        <b-modal id="modal-add-subtask" title="Add New Subtask" @ok="addSubtask">
            <form>
                <b-form-group
                label="Subtask Name"
                label-for="input-name">
                    <b-form-input
                        id="input-name"
                        v-model="subtaskName"/>
                </b-form-group>
            </form>
        </b-modal>

        <b-modal id="modal-edit-main-task" title="Main Event" @ok="editMainEvent">
            <form>
                <b-form-group
                label="Name"
                label-for="input-name">
                    <b-form-input
                        id="input-name"
                        v-model="mainEventName"/>
                </b-form-group>
                <div id="datePicker">
                    <label for="main-event-datepicker">Choose a date</label>
                    <b-form-datepicker id="main-event-datepicker" v-model="mainEventDate"/>
                </div>
            </form>
        </b-modal>

    </div>
</template>

<script>
import { BIconPlusCircle, BIconPencilSquare, BIconBell,BIconBellFill } from 'bootstrap-vue'

export default {
  name: 'TaskButtons',
  data: function () {
    return {
        bell: true,
        mainEventName: "",
        mainEventDate: "",
        subtaskName: ""
    }
  },
  components: {
      BIconPlusCircle,
      BIconPencilSquare,
      BIconBell,
      BIconBellFill
  },
  methods: {
      addSubtask() {
          this.$emit('add-subtask',this.subtaskName);
      },
      editMainEvent() {
          this.$emit('edit-main-event', {mainEventName: this.mainEventName, mainEventDate: this.mainEventDate});
          localStorage.mainEventName = this.mainEventName;
          localStorage.mainEventDate = this.mainEventDate;
      },
      changeBell() {
          this.bell = !this.bell
      }
  }
}
</script>

<style>

    #taskIconGroup {
        margin-bottom: 2%;
    }

    .taskIcon {
        padding: 15px;
        width: 60px;
        height: 60px;
    }

</style>