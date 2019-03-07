<template>
  <div>
    <h2>ADD CHAMBRE</h2>
    <form v-on:submit="addChambre" enctype="multipart/form-data">
      <input type="text" name="nom" placeholder="Nom" id="nom">
      <br>
      <input type="text" name="description" placeholder="Description" id="description">
      <br>
      <input type="text" name="prix" placeholder="Prix" id="prix">
      <br>
      <label for="fichier">Choisir l'image:</label>
      <input type="file" ref="file" name="fichier" id="fichier" v-on:change="handleFileUpload()">
      <br>
      <input type="text" name="categorie" placeholder="categorie" id="categorie">
      <input type="submit" value="addChambre">
    </form>
  </div>
</template>


<script>
import axios from "axios";
import router from "../router";

export default {
  name: "DashboardChambreAdd",
  data() {
    return {
      file: ""
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      console.log(">>>> 1st element in files array >>>> ", this.file);
    },
    getData: function() {
      axios
        .get("/api/admin/ajouter")
        .then(response => {
          console.log(response);
        })
        .catch(errors => console.log(errors));
    },
    addChambre: function() {
      let formdata = new FormData();
      let config = {
        header: {
          "Content-Type": "multipart/form-data"
        }
      };
      formdata.append("file", this.file);
      formdata.append("name", e.target.elements.nom.value);
      formdata.append("description", e.target.elements.description.value);
      formdata.append("price", e.target.elements.prix.value);
      formdata.append("category", e.target.elements.categorie.value);
      console.log(formdata, this.file);
      axios
        .post("/api/admin", formdata, config)
        .then(responses => {
          console.log("Added Chambre");
          router.push("/dashboardChambre");
        })
        .catch(errors => {
          console.log("Cant add Chambre");
          router.push("/dashboardChambre");
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
