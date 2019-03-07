<template>
  <div>
    <h2>ADD ADMIN</h2>
    <form v-on:submit="addAdmin">
      <input type="text" name="identifiant" placeholder="Identifiant">
      <br>
      <input type="password" name="password" placeholder="Password">
      <br>
      <input type="submit" value="addAdmin">
    </form>
  </div>
</template>

<script>
import router from "../router"
import axios from "axios"

export default {
  name:"DashboardAdminAdd",
  methods:{
    getData: function() {
      axios
        .get("/api/enregistrement")
        .then(response => {
          console.log(response);
        })
        .catch(errors => console.log(errors));
    },
    addAdmin:(e)=>{
      e.preventDefault()
      let prenom = e.target.elements.identifiant.value
      let motdepasse = e.target.elements.password.value
      let addAdmin = () => {
        let data = {
          prenom : prenom,
          motDePass : motdepasse
        }
        axios.post('/api/utilisateurs', data)
        .then((response) => {
          console.log("Added Admin")
          router.push("/dashboardAdmin")
        })
        .catch(errors => {
          console.log(errors);
          router.push("/login");
        });
      }
      addAdmin();
    }
  },
  // mounted() {
  //   this.getData();
  // }
}
</script>
