<template>
  <div>
    <h1>Période de réservation (*)</h1>
    <datepicker :language="fr" v-model="vModelExample"></datepicker>
    <p>{{ vModelExample }}</p>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import {fr} from 'vuejs-datepicker/dist/locale'

export default {
  name:'Reservation',
  data(){
    return{
      fr:fr,
      vModelExample: null,
    }
  },
  components: {
     'Datepicker' : Datepicker
  },
  mounted(){
    console.log(Datepicker)
  }
}
</script>
