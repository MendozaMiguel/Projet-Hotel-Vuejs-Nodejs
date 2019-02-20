<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="4">Période de réservation (*)</b-col>
        <b-col>
          <input type="text" id="startDate" v-model="startDate">
          <button type="button" class="btn btn-default" @click="test">valider</button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          Nuits (*) :
          <select v-model="selected">
            <option v-for="option in options"  v-bind:value="option.value">{{ option.text }}</option>
          </select>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Reservation",
  data() {
    return {
      startDate: "",
      selected: "A",
      options: [
        { text: "Un", value: "A" },
        { text: "Deux", value: "B" },
        { text: "Trois", value: "C" }
      ]
    };
  },
  methods: {
    test() {
      console.log(this.startDate); // the startDate value is ''
    }
  }
};
</script>
