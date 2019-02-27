<template>
  <div>
    <b-container class="bv-example-row">
      <form role="form" action="/api/reservation" method="post" @submit="onSubmit" @reset="onReset">
        <b-row>
          <b-col cols="4">Période de réservation (*)</b-col>
          <b-col>
            <input type="text" name="date" v-model="form.startDate">
          </b-col>
        </b-row>
        <b-row>
          <b-col id="reservationNuit-Personnes">
            <p>Nuits (*) :</p>
            <select v-model="form.nuits" name="nuits">
              <option v-for="option in nuits" v-bind:value="option.value">{{ option.text }}</option>
            </select>
            <p>Nombre de personnes (*) :</p>
            <select v-model="form.nbPersonnes" name="nbPersonnes">
              <option v-for="option in nbPersonnes" v-bind:value="option.value">{{ option.text }}</option>
            </select>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h3>Type d'hébergement</h3>
            <b-col>
              <b-form-group label="Type :">
                <b-form-radio-group v-model="form.type" :options="type" name="type"/>
              </b-form-group>
            </b-col>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h3>Informations vous concernant (*)</h3>

            <b-form-group label="Entrer votre Nom (*) :" label-for="Nom">
              <b-form-input id="Nom" type="text" v-model="form.nom" name="nom" placeholder="Nom" required/>
            </b-form-group>

            <b-form-group label="Entrer votre Prenom (*) :" label-for="Prenom">
              <b-form-input
                id="Prenom"
                type="text"
                v-model="form.prenom"
                name="prenom"
                placeholder="Prenom"
                required
              />
            </b-form-group>

            <b-form-group label="Entrer votre numero de Téléphone (*) :" label-for="Telephone">
              <b-form-input
                id="Telephone"
                type="text"
                v-model="form.tel"
                name="tel"
                required
                placeholder="Telephone"
              />
            </b-form-group>

            <b-form-group
              label="Votre Email (*) :"
              label-for="email"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="email"
                type="email"
                v-model="form.email"
                name="email"
                required
                placeholder="Email"
              />
            </b-form-group>

            <b-form-group label="Adresse :" label-for="Adresse">
              <b-form-input id="Adresse" type="text" v-model="form.Adresse" name="adresse" placeholder="Adresse"/>
            </b-form-group>

            <b-form-group label="Complément d'adresse :" label-for="complementAdresse">
              <b-form-input
                id="complementAdresse"
                type="text"
                v-model="form.complementAdresse"
                name="complementAdresse"
                placeholder="complement d'adresse"
              />
            </b-form-group>

            <b-form-group label="Entrer votre code Postal (*) :" label-for="cp">
              <b-form-input
                id="cp"
                type="text"
                v-model="form.codepostal"
                name="cp"
                required
                placeholder="Code Postal"
              />
            </b-form-group>

            <b-form-group label="Entrer votre ville (*) :" label-for="ville">
              <b-form-input
                id="ville"
                type="text"
                v-model="form.ville"
                name="ville"
                required
                placeholder="Ville"
              />
            </b-form-group>

            <b-form-group label="Entrer votre Pays (*) :" label-for="pays">
              <b-form-input id="pays" type="text" v-model="form.pays" name="pays" required placeholder="Pays"/>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col id="align-chambres">
            <b-col cols="12">
              <h3>Chambres (*)</h3>
            </b-col>
            <b-col cols="4">
              <p>type de chambres</p>
              <p>Single GL (2 pers max)</p>
              <p>Twin 2 lits PL PL (2 pers max)</p>
              <p>Familial Triple 2 lits GL PL (3 pers max)</p>
              <p>Familial Triple 3 lits PL PL PL (3 pers max)</p>
              <p>Familial Quadruple GL GL (4 pers max)</p>
            </b-col>
            <b-col cols="4">
              <p>Prix</p>
              <p>55.00 €</p>
              <p>55.00 €</p>
              <p>68.00 €</p>
              <p>68.00 €</p>
              <p>70.00 €</p>
            </b-col>
            <b-col cols="4">
              <p>Nombres de chambres</p>
              <b-col>
                <select v-model="form.nbChambre1" name="nbChambre1">
                  <option v-for="option in nbChambre1" v-bind:value="option.value">{{ option.text }}</option>
                </select>
              </b-col>
              <b-col>
                <select v-model="form.nbChambre2" name="nbChambre2">
                  <option v-for="option in nbChambre2" v-bind:value="option.value">{{ option.text }}</option>
                </select>
              </b-col>

              <b-col>
                <select v-model="form.nbChambre3" name="nbChambre3">
                  <option v-for="option in nbChambre3" v-bind:value="option.value">{{ option.text }}</option>
                </select>
              </b-col>

              <b-col>
                <select v-model="form.nbChambre4" name="nbChambre4">
                  <option v-for="option in nbChambre4" v-bind:value="option.value">{{ option.text }}</option>
                </select>
              </b-col>
              <b-col>
                <select v-model="form.nbChambre5" name="nbChambre5">
                  <option v-for="option in nbChambre5" v-bind:value="option.value">{{ option.text }}</option>
                </select>
              </b-col>
            </b-col>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h3>Options supplémentaires</h3>
            <b-col>
              <p>Nombre de petits déjeuners par nuit</p>
              <select v-model="form.dejeuners" name="nbChambre6">
                <option v-for="option in dejeuners" v-bind:value="option.value">{{ option.text }}</option>
              </select>
            </b-col>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <h3>Préferences</h3>
          </b-col>
          <b-col>
            <b-form-group label="Balcon :">
              <b-form-radio-group v-model="form.selectedA" :options="balcon" name="Balcon"/>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Vue extérieure :">
              <b-form-radio-group v-model="form.selectedB" :options="vueExt" name="Vue"/>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Climatisation :">
              <b-form-radio-group
                v-model="form.selectedC"
                :options="climatisation"
                name="climatisation"
              />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <h3>Ajouter un message complémentaire</h3>
          </b-col>
          <b-col>
            <textarea v-model="form.msg" cols="30" rows="10" name="msg"></textarea>
          </b-col>
        </b-row>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </form>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import router from "../router";

export default {
  name: "Reservation",
  data() {
    return {
      complementAdresse:"",
      nuits: [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 }
      ],
      nbPersonnes: [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 }
      ],
      typeHeber: [
        { text: "Chambre seule", value: "Chambre seule" },
        { text: "Demi-pension", value: "Demi-pension" },
        { text: "Pension complète", value: "Pension complète" }
      ],
      form: {
        startDate: "2017-06-15 04:00:40"
        // email: "",
        // msg: ""
      },
      nbChambre1: [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 }
      ],
      nbChambre2: [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 }
      ],
      nbChambre3: [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 }
      ],
      nbChambre4: [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 }
      ],
      nbChambre5: [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 }
      ],
      dejeuners: [
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 }
      ],
      selectedA: "Sans importance",
      balcon: [
        { text: "Sans importance", value: "Sans importance" },
        { text: "Oui", value: "oui" }
      ],
      selectedB: "Sans importance",
      vueExt: [
        { text: "Sans importance", value: "Sans importance" },
        { text: "Oui", value: "oui" }
      ],
      selectedC: "Sans importance",
      climatisation: [
        { text: "Sans importance", value: "Sans importance" },
        { text: "Oui", value: "oui" }
      ]
    };
  },
  methods: {
    getData: function() {
      axios
        .get("/api/reservation")
        .then(response => {
          console.log(response);
        })
        .catch(errors => console.log(errors));
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.postReservation();
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.nom = "";
      this.form.prenom = "";
      this.form.email = "";
      this.form.Adresse = "";
      this.form.complementAdresse = "";
      this.form.codepostal = "";
      this.form.ville = "";
      this.form.pays = "";
      this.form.msg = "";
    },
    postReservation: (e)=> {
       e.preventDefault()
      let self = this.$data;
      // console.log(self)

      let postReservation = () => {
        let nuits = self.form.nuits;
        let nuit = parseInt(nuits);

        let nbPersonnes = self.form.nbPersonnes;
        let nbPersonne = parseInt(nbPersonnes);

        let codepostal = self.form.codepostal;
        let cp = parseInt(codepostal);

        let nbChambre1 = self.form.nbChambre1;
        let nbChambreA = parseInt(nbChambre1);

        let nbChambre2 = self.form.nbChambre2;
        let nbChambreB = parseInt(nbChambre2);

        let nbChambre3 = self.form.nbChambre3;
        let nbChambreC = parseInt(nbChambre3);

        let nbChambre4 = self.form.nbChambre4;
        let nbChambreD = parseInt(nbChambre4);

        let nbChambre5 = self.form.nbChambre5;
        let nbChambreE = parseInt(nbChambre5);

        let dejeuners = self.form.dejeuners;
        let dej = parseInt(dejeuners);

        // console.log(typeof(dej))

        let data = {
          datechoisi: self.form.startDate,
          nb_nuit: nuits,
          nb_personnes: nbPersonnes,
          type: self.form.type,
          nom: self.form.nom,
          prenom: self.form.prenom,
          tel: self.form.tel,
          adresse: self.form.Adresse,
          comp_adresse: self.form.complementAdresse,
          cp: cp,
          ville: self.form.ville,
          pays: self.form.pays,
          chambres1: nbChambreA,
          chambres2: nbChambreB,
          chambres3: nbChambreC,
          chambres4: nbChambreD,
          chambres5: nbChambreE,
          petitdej: dej,
          balcon: self.form.selectedA,
          vue: self.form.selectedB,
          climatisation: self.form.selectedC,
          msgcomplementaire: self.form.msg
        };
        axios
          .post('/api/reservation', data)
          .then((response) => {
            // console.log(response);
            console.log("form pushed");
            router.push("/dashboard");
          })
          .catch(errors => {
            console.log(errors);
          });
      };
      postReservation();
    }
  },
  mounted() {
    this.getData();
  }
};
</script>


<style>
#reservationNuit-Personnes {
  display: flex;
}
#align-chambres {
  display: flex;
  flex-wrap: wrap;
}
</style>

