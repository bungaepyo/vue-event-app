<template>
  <div class='todayIndicator'>
    <table id='todayTable'>
      <tbody>
        <tr id="todayTableRow">
          <td class="todayTableCell">TODAY</td>
          <td class="todayTableCell">{{this.month}} / {{ this.day }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'TodayIndicator',
  data: function () {
    return {
      interval: 0,
      month: moment().format('MM'),
      day: moment().format('DD'),
    }
  },
  mounted () {
      this.interval = setInterval(this.fetchDate, 1000)
  },
  beforeDestroy () {
      clearInterval(this.interval)
  },
  methods: {
      fetchDate() {
          this.month = moment().format('MM')
          this.day = moment().format('DD')
      }
  }
}
</script>

<style>
    #todayTable {
        margin-left: auto;
        margin-right: auto;
        margin-top: 5%;
        margin-bottom: 3%;
        background-color: white;
        color: #28A744;
        font-family: BlinkMacSystemFont, Roboto, Arial, sans-serif;
        border-style: hidden;
    }

    .todayTableCell {
        width: 30%;
    }

    table, tr, td {
        border: 1.5px solid #28A744;
        color: black;
        font-size: large;
        padding: 10px;
    }

</style>