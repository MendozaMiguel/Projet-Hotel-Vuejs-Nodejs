<template>
  <div id="app">
    <div>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand :to="{ name: 'Index'}">Hotel de l'Etoile</b-navbar-brand>

          <b-navbar-toggle target="nav_collapse"/>

          <b-collapse is-nav id="nav_collapse">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item :to="{ name: 'Chambres'}">Chambres Disponibles</b-nav-item>
              <b-nav-item :to="{ name: 'Prix'}">Prix</b-nav-item>
              <b-nav-item :to="{ name: 'Reservation'}">Réservation</b-nav-item>
              <b-nav-item :to="{ name: 'Noustrouver'}">Nous trouver</b-nav-item>
              <b-nav-item :to="{ name: 'Contact'}">Contact</b-nav-item>
              <b-nav-item-dropdown text="Admin" right>
                <b-dropdown-item :to="{name : 'DashboardAdminAdd'}">Add Admin</b-dropdown-item>
                <b-dropdown-item :to="{name : 'DashboardAdmin'}">Gestion Admin</b-dropdown-item>
                <b-dropdown-item :to="{name: 'DashboardChambre'}">Gestion Chambres</b-dropdown-item>
              </b-nav-item-dropdown>
              <!-- Form for login -->
              <b-nav-item-dropdown text="Sign in" right>
                <b-dropdown-form v-on:submit="login">
                  <b-form-group label="Identifiant" label-for="ddown-form-email">
                    <b-form-input
                      type="text"
                      name="email"
                      size="sm"
                      placeholder="email@example.com"
                      id="ddown-form-email"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="Password" label-for="ddown-form-passwd">
                    <b-form-input
                      name="password"
                      type="password"
                      size="sm"
                      placeholder="Password"
                      id="ddown-form-passwd"
                    ></b-form-input>
                  </b-form-group>

                  <b-button type="submit" variant="primary" size="sm">Sign In</b-button>
                </b-dropdown-form>
              </b-nav-item-dropdown>

              <b-nav-item href="#" v-on:click="logout">Logout</b-nav-item>
              <!-- Form for login -->
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
import router from "./router";

export default {
  name: "App",
  methods: {
    logout: function(e) {
      axios.get("/api/deconnexion").then(() => {
        console.log("logged out");
        router.push("/");
      });
    },
    login: e => {
      e.preventDefault();
      let prenomUtilisateur = e.target.elements.email.value;
      let motDePasseUtilisateur = e.target.elements.password.value;
      let login = () => {
        let data = {
          prenom: prenomUtilisateur,
          motdepasse: motDePasseUtilisateur
        };
        axios
          .post("/api/login", data)
          .then(response => {
            router.push("/dashboardAdmin");
          })
          .catch(errors => {
            router.push("/login");
          });
      };
      login();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
