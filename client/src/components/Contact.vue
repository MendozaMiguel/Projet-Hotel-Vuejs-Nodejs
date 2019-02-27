<template>
  <div>
    <form v-on:submit="envoyer">
      <input type="radio" name="civilite" value="M"> M<br>
      <input type="radio" name="civilite" value="Mlle"> Mlle<br>
      <input type="radio" name="civilite" value="Mme"> Mme<br>
      <input type="text" name="prenom" placeholder="prenom"><br>
      <input type="text" name="nom" placeholder="nom"><br>
      <input type="text" name="email" placeholder="email"><br>
      <input type="text" name="societe" placeholder="societe"><br>
      <input type="text" name="adresse" placeholder="adresse"><br>
      <input type="text" name="cp" placeholder="cp"><br>
      <input type="text" name="ville" placeholder="ville"><br>
      <input type="text" name="tel" placeholder="tel"><br>
      <input type="text" name="msg" placeholder="msg"><br>
      <input type="submit" value="envoyer">
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "Contact",
  methods: {
    getData: function() {
      axios
        .get("/api/contact")
        .then(response => {
          console.log(response);
        })
        .catch(errors => console.log(errors));
    },
    envoyer:(e)=>{
      e.preventDefault()
      let civilite = e.target.elements.civilite.value
      let prenom = e.target.elements.prenom.value
      let nom = e.target.elements.nom.value
      let email = e.target.elements.email.value
      let societe = e.target.elements.societe.value
      let adresse = e.target.elements.adresse.value
      let cp = e.target.elements.cp.value
      let ville = e.target.elements.ville.value
      let tel = e.target.elements.tel.value
      let msg = e.target.elements.msg.value
      let envoyer = () => {
        let data = {
          civilite: civilite,
          nom : nom,
          prenom : prenom,
          email:email,
          societe:societe,
          adresse:adresse,
          cp:cp,
          ville:ville,
          tel:tel,
          message:msg
        }
        axios.post('/api/contact', data)
        .then((response) => {
          console.log("formulaire envoyer")
          router.push("/home")
        })
        .catch((errors) => {
          console.log("Can't push form")
        })
      }
      envoyer();
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

