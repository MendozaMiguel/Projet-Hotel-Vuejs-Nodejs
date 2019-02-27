<template>
  <div>
    <b-container class="bv-example-row">
      <!-- <b-row>
        <b-col>
          <h1>Bienvenue à l'Hôtel de l'Étoile</h1>
        </b-col>
      </b-row>-->
      <b-row>
        <b-col>
          <h3>Présentation</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>
            Lourdes, centre mondial de pèlerinage, accueille des visiteurs du monde entier. Chaque année, 5 millions de visiteurs viennent se recueillir devant la grotte des apparitions.
            Les sanctuaires sont proches de notre hôtel, vous pouvez réaliser les visites principales à pied.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h3>Bienvenue à l’Hôtel de l’Etoile !</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>
            Une équipe chaleureuse, disponible et polyglotte vous accueille et vous assurera un séjour réussi.
            Vous trouverez confort et calme dans toutes nos chambres. Elles sont équipées de bain/douche, wc indépendant, sèche cheveux, téléphone direct, télévision. Sur demande, vous pourrez disposer de chambres avec balcon.
            Il est possible d’organiser des excursions vers les Pyrénées ou la Côte Atlantique depuis l’hôtel.
            La salle de restaurant, lumineuse, spacieuse et climatisée vous donnera l’occasion d’apprécier la cuisine de notre chef. Menus végétariens et régime sur demande.
            Notre boutique de souvenirs vous permettra de trouver un cadeau pour vos proches ou pour vous-même.
            Partenaires, professionnels du tourisme, tours opérateurs, organisateurs de groupes et de pèlerinage, nous sommes à votre disposition pour vos demandes de disponibilité et de devis.
            Parking pour bus et voiture. Garage souterrain privé, gratuit.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "Index",
  methods: {
    getData: function() {
      axios
        .get("/api/home")
        .then(response => {
          console.log(response);
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
</style>
