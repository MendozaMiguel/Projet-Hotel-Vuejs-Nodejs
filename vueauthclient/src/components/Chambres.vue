<template>
  <div>
    <div v-for="chambre in chambres" :key="chambre.id">
      <div>{{chambre.id}}</div>
      <div>{{chambre.name}}</div>
      <div>{{chambre.description}}</div>
      <div>{{chambre.price}}</div>
      <div>{{chambre.image}}</div>
      <img :src="`../../static/chambres/img_${chambre.image}`">
      <div>{{chambre.category}}</div>
      <br><br>
    </div>
  </div>
</template>

<script>

import router from '../router'
import axios from 'axios'

export default {
  name:'Chambres',
  data(){
    return{
      chambres:{
        id:1,
        name:'typeChambre',
        descritpion:'Description de la chambre',
        price: 99,
        image: 'nom_image',
        category: 'categorie_chambre'}
    }
  },
  methods:{
    getData: function(){
      let self = this;
      axios.get('api/chambres')
      .then((response)=>{
        console.log(response.data.chambres);
        self.$set(this,"chambres",response.data.chambres)
      })
      .catch(errors=>console.log(errors))
    }
  },
  mounted(){
   this.getData()
  }
}
</script>
