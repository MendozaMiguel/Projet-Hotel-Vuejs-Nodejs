<template>
  <div>
    <h2>login</h2>
    <form v-on:submit="login">
      <input type="text" name="email" placeholder="email"><br>
      <input type="password" name="password"><br>
      <input type="submit" value="login">
    </form>
  </div>
</template>

<script>
import router from "../router"
import axios from "axios"

export default {
  name:"Login",
  methods:{
    login:(e)=>{
      e.preventDefault()
      let prenomUtilisateur = e.target.elements.email.value
      let motDePasseUtilisateur = e.target.elements.password.value
      let login = () => {
        let data = {
          prenom : prenomUtilisateur,
          motdepasse : motDePasseUtilisateur
        }
        axios.post('/api/login', data)
        .then((response) => {
          console.log("logged in")
          router.push("/dashboard")
        })
        .catch((errors) => {
          console.log("Cannot log in")
          router.push("/login")
        })
      }
      login();
    }
  }
}
</script>

