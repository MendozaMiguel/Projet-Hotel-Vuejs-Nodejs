<template>
  <div>
    <!-- <b-form-group label="Dashboard Utilisateurs">
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
    >-->
    <!-- <template slot="id" slot-scope="{ fields }">
        <td v-for="field in fields" :key="field.key">{{field.id}}</td>
    </template>-->
    <!-- <template slot="prenom" v-for="user in items">
        {{user.id}}
    </template>-->
    <!-- <template slot="actions">
        <button type="button" class="btn btn-primary" @click="updateUser()">modifier</button>
    </template>-->
    <!-- </b-table> -->
    <div v-for="user in users" :key="user.id">
      <span>
        ID :
        {{user.id}} -
      </span>
      <span>
        Prenom :
        <input name="prenom" type="text" v-model="user.prenom">
      </span>
      <span>
        Mot de passe :
        <input name="motdepasse" v-model="user.motdepasse" :type="passwordFieldType">
      </span>
      <button type="button" class="btn btn-success" @click="switchVisibility">Voir mdp</button>
      <button type="button" class="btn btn-primary" @click="updateUser(user.id)">modifier</button>
      <!-- <button type="button" class="btn btn-primary" @click="updateUsers(user)">modifier2</button> -->
      <button type="button" class="btn btn-danger pull-right" @click="deleteUser(user.id)">Delete</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
import Vue from "vue";

export default {
  name: "DashboardAdmin",
  data() {
    return {
      passwordFieldType: "password",
      fields: ["id", "prenom", "actions"],
      users: {
        id: 1,
        prenom: "Miguel",
        motdepasse: "idk"
      },
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
    switchVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
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
    updateUser: (id) => {
      let data = {
        prenom: this.users.prenom,
        motDePass: this.users.motdepasse
      };
      console.log(data);
      axios
        .put("/api/utilisateurs/" + id, data)
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    // updateUsers(user) {
    //   let data = {
    //     prenom: this.users.prenom,
    //     motDePass: this.users.motdepasse
    //   };
    //   console.log(data)
    //   let uri ="/api/utilisateurs/";
    //   axios
    //   .put(uri + user.id, data)
    //   .then(res => {
    //     console/log(res);
    //   })
    //   .catch(e => { console.log(e)})
    // },
    deleteUser: function(id) {
      console.log("my users" + this.users);
      axios.delete("/api/utilisateurs/" + id).then(response => {
        const index = this.users.findIndex(user => user.id === id); // find the post index
        if (~index)
          // if the post exists in array
          this.users.splice(index, 1); //delete the post
        console.log(response);
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

