<template>
  <div>
    <h2>Contact</h2>
    <div  v-for="result in resultat">
    <p>adresse : {{result.adresse}}</p>
    <p>civilite : {{result.civilite}}</p>
    <p>cp : {{result.cp}}</p>
    <p>email : {{result.email}}</p>
    <p>message : {{result.message}}</p>
    <p>nom : {{result.nom}}</p>
    <p>prenom : {{result.prenom}}</p>
    <p>societe : {{result.societe}}</p>
    <p>tel : {{result.tel}}</p>
    <p>ville : {{result.ville}}</p>
    <br> <br>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
  name:'Contact',
  data(){
    return{
      resultat:{
      adresse: 'myadress',
      civilite: 'M/F',
      cp: 12345,
      email: 'myemai@exemple.com',
      message: 'mymessage',
      nom: 'mylastname',
      prenom: 'myfirstname',
      societe: 'society',
      tel: 123456789,
      ville: 'city'
      }
    }
  },
  methods:{
    getData: function(){
      let self = this;
      axios.get("/api/contact")
      .then( response =>{
        console.log(response)
        self.$set(this, "resultat", response.data.resultat)
      })
      .catch((errors)=>console.log(errors))
    }
  },
  mounted(){
    this.getData()
  }
}
</script>

