<template>
  <div>
    <b-form-group label="Dashboard Utilisateurs">
      <b-form-checkbox inline v-model="striped">Striped</b-form-checkbox>
      <b-form-checkbox inline v-model="bordered">Bordered</b-form-checkbox>
      <b-form-checkbox inline v-model="borderless">Borderless</b-form-checkbox>
      <b-form-checkbox inline v-model="outlined">Outlined</b-form-checkbox>
      <b-form-checkbox inline v-model="small">Small</b-form-checkbox>
      <b-form-checkbox inline v-model="hover">Hover</b-form-checkbox>
      <b-form-checkbox inline v-model="dark">Dark</b-form-checkbox>
      <b-form-checkbox inline v-model="fixed">Fixed</b-form-checkbox>
      <b-form-checkbox inline v-model="footClone">Foot Clone</b-form-checkbox>
    </b-form-group>

    <b-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :fields="fields"
      :items="users"
    >
      <template slot="actions">
        <!-- <form v-on:submit="deleteUser"> -->
        <button type="button" class="btn btn-danger pull-right" @click="deleteUser(users.id)">Delete</button>

        <!-- <div v-for="user in users" :key="user.id"> -->
          <button type="button" class="btn btn-primary" @click="showID(user.id)">modifier</button>
        <!-- </div> -->
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
import Vue from "vue";

export default {
  name: "Dashboard",
  data() {
    return {
      fields: ["id", "prenom", "actions"],
      users: [
        {
          id: 1,
          prenom: "Miguel"
        }
      ],
      striped: true,
      bordered: true,
      borderless: false,
      outlined: false,
      small: false,
      hover: true,
      dark: true,
      fixed: false,
      footClone: false
    };
  },
  methods: {
    getUserData: function() {
      let self = this;
      axios
        .get("/api/utilisateurs")
        .then(response => {
          console.log(response);
          self.$set(this, "users", response.data.resultat);
        })
        .catch(errors => {
          console.log(errors);
          router.push("/login");
        });
    },
    deleteUser: function(id) {
      axios.delete("/api/utilisateurs/" + id).then(response => {
        this.users.splice(id, 1);
        console.log(this.users);
      });
    },
    showID: function(id) {
      console.log(id);
    }
  },
  mounted() {
    this.getUserData();
  }
};
</script>

