<template>
  <div id="align-items">
    <div v-for="chambre in chambres" :key="chambre.id">
      <b-card
        :title="`${chambre.name}`"
        :img-src="`../../static/chambres/img_${chambre.image}`"
        :img-alt="`${chambre.name}`"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>{{chambre.description}}...</b-card-text>
        <b-button href="#" variant="primary">en savoir +</b-button>
      </b-card>
    </div>
  </div>

  <!-- <b-row>
      <b-col id="chambres" >
        <div>{{chambre.name}}</div>
        <div>{{chambre.description}}</div>
        <div>{{chambre.price}}€</div>
        <img class="resize" >
      </b-col>
  </b-row>-->
</template>

<script>
import router from "../router";
import axios from "axios";

export default {
  name: "Chambres",
  data() {
    return {
      chambres: {
        id: 1,
        name: "typeChambre",
        descritpion: "Description de la chambre",
        price: 99,
        image: "nom_image",
        category: "categorie_chambre"
      }
    };
  },
  methods: {
    getData: function() {
      let self = this;
      axios
        .get("api/chambres")
        .then(response => {
          console.log(response.data.chambres);
          self.$set(this, "chambres", response.data.chambres);
        })
        .catch(errors => console.log(errors));
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
#align-items {
  display: flex;
  align-self: flex-end;
  justify-content: space-around;
  align-items: baseline;
}
</style>

