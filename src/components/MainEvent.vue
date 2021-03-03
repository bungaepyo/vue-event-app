<template>
    <div class='mainEvent'>
        <b-card v-if="mainEventTitle.length !== 0" bg-variant="success" text-variant="white" :header="headerText" header-variant="card_header">
            <b-card-text id="mainEventText">D - {{this.mainEventDday}}</b-card-text>
        </b-card>
        <b-card v-else bg-variant="success" text-variant="white" header="Please create a main event" header-variant="card_header">
            <b-card-text id="mainEventTextEmpty"> Not Available </b-card-text>
        </b-card>
    </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'MainEvent',
  data: function () {
    return {
        mainEventTitle: "",
        mainEventDday: 0,
        mainEventDate: "",
        currentDate: ""
    }
  },
  props: {
    mainEventPassed: {
      type: Object
    }
  },
  mounted () {
      this.interval = setInterval(this.fetchDate, 1000)
      if(localStorage.mainEventName && localStorage.mainEventDate) {
          this.mainEventTitle = localStorage.mainEventName;
          this.mainEventDate = moment(localStorage.mainEventDate,'YYYY-MM-DD');
          this.fetchDate();
      }
  },
  beforeDestroy () {
      clearInterval(this.interval)
  },
  methods: {
    fetchDate() {
        if(this.mainEventDate !== "") {
            this.currentDate = moment(new Date(), 'YYYY-MM-DD');
            var duration = this.mainEventDate.diff(this.currentDate, 'days')+1;
            this.mainEventDday = duration;
        }
    }
  },
  computed: {
    headerText() {
    return this.mainEventTitle;
   }
  },
  watch: {
    mainEventPassed: function () {
        this.mainEventTitle = this.mainEventPassed.mainEventName;
        this.mainEventDate = moment(this.mainEventPassed.mainEventDate,'YYYY-MM-DD');
        this.currentDate = moment(new Date(), 'YYYY-MM-DD');
        var duration = this.mainEventDate.diff(this.currentDate, 'days')+1;
        this.mainEventDday = duration;
    }
  }
}
</script>

<style>

    .mainEvent {
        margin-left: 30%;
        margin-right: 30%;
        margin-bottom: 1%;
    }

    #mainEventText {
        font-size: 100px;
    }
    
    #mainEventTextEmpty {
        font-size: 50px;
    }

    .card-header {
        font-size: x-large;
        text-align: center;
    }

</style>