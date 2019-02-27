<template>
  <div>
    <h2>Dashboard</h2>
    <div v-for="user in users" :key="user.id">
      <p>ID : {{user.id}}</p>
      <p>Prenom : {{user.prenom}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
  name:'Dashboard',
  data(){
    return{
      users:{
        id: 1,
        prenom:'Miguel'
      }
    }
  },
  methods:{
    getUserData: function(){
      let self = this
      axios.get("/api/utilisateurs")
      .then((response)=>{
        console.log(response)
        self.$set(this, "users", response.data.resultat)
      })
      .catch((errors)=>{
        console.log(errors)
        router.push("/login")
      })
    }
  },
  mounted(){
    this.getUserData()
  }
}
</script>

