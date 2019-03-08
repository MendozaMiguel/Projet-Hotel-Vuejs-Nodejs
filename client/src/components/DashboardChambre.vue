<template>
  <div>
    <span>AJOUTER UNE CHAMBRE :
      <b-button variant="success" :to="{ name: 'DashboardChambreAdd'}">Ajouter</b-button>
    </span>
    <div v-for="chambre in chambres" :key="chambre.id">
      <span>
        ID :
        {{chambre.id}} -
      </span>
      <span>
        Nom :
        <input name="name" type="text" v-model="chambre.name">
      </span>
      <span>
        Description :
        <input name="description" type="text" v-model="chambre.description">
      </span>
      <span>
        Prix :
        <input name="price" type="text" v-model="chambre.price">
      </span>
      <span>
        Image :
        <label>{{chambre.image}}</label>
        <input type="file" name="file" accept="image/*" ref="file">
        <!-- <img :src="`../../static/chambres/img_${chambre.image}`" :alt=chambre.image height="100" width="100"> -->
      </span>
      <span>
        Categorie :
        <input name="category" type="text" v-model="chambre.category">
      </span>
      <button
        type="button"
        class="btn btn-primary"
        @click="updateChambre(chambre.id, chambre.name, chambre.description, chambre.price, chambre.category)"
      >modifier</button>
      <button
        type="button"
        class="btn btn-danger pull-right"
        @click="deleteChambre(chambre.id)"
      >Delete</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "DashboardChambre",
  data() {
    return {
      chambres: {
        id: 1,
        name: "myChambre",
        description: "Description",
        price: 1,
        image: "nameimage",
        category: 1
      },
      file: ""
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(">>>> 1st element in files array >>>> ", this.file);
    },
    getPage: function() {
      axios
        .get("/api/admin")
        .then(responses => {
          console.log(responses);
        })
        .catch(errors => {
          console.log(errors);
          router.push("/login");
        });
    },
    getData: function() {
      let self = this;
      axios
        .get("/api/admin")
        .then(response => {
          console.log(response.data.resultat);
          self.$set(this, "chambres", response.data.resultat);
        })
        .catch(errors => console.log(errors));
    },
    updateChambre: function(id,nom,description,prix,categorie) {
      let formdata = new FormData();
      let config = {
        header: {
          "Content-Type": "multipart/form-data"
        }
      };
      formdata.set("file", this.file);
      formdata.set("name", nom);
      formdata.set("description", description);
      formdata.set("price", prix);
      formdata.set("category", categorie);

      console.log(formdata, this.file);

      axios
        .put("/api/admin/" + id, formdata, config)
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    deleteChambre: function(id) {
      axios.delete("/api/admin/" + id).then(response => {
        const index = this.chambres.findIndex(chambre => chambre.id === id); // find the post index
        if (~index)
          // if the post exists in array
          this.chambres.splice(index, 1); //delete the post
        console.log(response);
      });
    }
  },
  mounted() {
    this.getPage();
    this.getData();
  }
};
</script>
