<template>
  <div class="row">
    <div class="col-md-12 text-center">
      <h1>Liste des chambres</h1>
    </div>
    <!-- 1 -->
    <div class="col-md-12">
      <div class="col-md-4">
        <p>Chambre</p>
      </div>
      <div class="col-md-3">
        <p>Composition</p>
      </div>
      <div class="col-md-3">
        <p>Capacité</p>
      </div>
      <div class="col-md-2">
        <p>Prix</p>
      </div>
    </div>
    <!-- 1 -->
    <!-- 2 -->
    <div class="col-md-12">
      <div class="col-md-4">
        <p>Twin 2 lits</p>
      </div>
      <div class="col-md-3">
        <div class="col-md-offset-2 col-md-2">
          <p>
            <img src="/public/images/chambres/lit1.png" alt>
          </p>
        </div>
        <div class="col-md-offset-2 col-md-2">
          <p>
            <img src="/public/images/chambres/lit1.png" alt>
          </p>
        </div>
      </div>
      <div class="col-md-3">
        <p>2 pers max</p>
      </div>
      <div class="col-md-2">
        <p>55 €</p>
      </div>
    </div>
    <!-- 2 -->
    <!-- 3 -->
    <div class="col-md-12">
      <div class="col-md-4">
        <p>Single</p>
      </div>
      <div class="col-md-3">
        <div class="col-md-offset-4 col-md-2">
          <p>
            <img src="/public/images/chambres/lit2.png" alt>
          </p>
        </div>
      </div>
      <div class="col-md-3">
        <p>2 pers max</p>
      </div>
      <div class="col-md-2">
        <p>55 €</p>
      </div>
    </div>
    <!-- 3 -->
    <!-- 4 -->
    <div class="col-md-12">
      <div class="col-md-4">
        <p>Familial Triple 2 lits</p>
      </div>
      <div class="col-md-3">
        <div class="col-md-offset-3 col-md-2">
          <p>
            <img src="/public/images/chambres/lit2.png" alt>
          </p>
        </div>
        <div class="col-md-2">
          <p>
            <img src="/public/images/chambres/lit1.png" alt>
          </p>
        </div>
      </div>
      <div class="col-md-3">
        <p>3 pers max</p>
      </div>
      <div class="col-md-2">
        <p>68 €</p>
      </div>
    </div>
    <!-- 4 -->
    <!-- 5 -->
    <div class="col-md-12">
      <div class="col-md-4">
        <p>Familial Triple 3 lits</p>
      </div>
      <div class="col-md-3">
        <div class="col-md-offset-2 col-md-2">
          <p>
            <img src="/public/images/chambres/lit1.png" alt>
          </p>
        </div>
        <div class="col-md-2">
          <p>
            <img src="/public/images/chambres/lit1.png" alt>
          </p>
        </div>
        <div class="col-md-2">
          <p>
            <img src="/public/images/chambres/lit1.png" alt>
          </p>
        </div>
      </div>
      <div class="col-md-3">
        <p>3 pers max</p>
      </div>
      <div class="col-md-2">
        <p>68 €</p>
      </div>
    </div>
    <!-- 5 -->
    <!-- 5 -->
    <div class="col-md-12">
      <div class="col-md-4">
        <p>Familial Quadruple</p>
      </div>
      <div class="col-md-3">
        <div class="col-md-offset-3 col-md-2">
          <p>
            <img src="/public/images/chambres/lit2.png" alt>
          </p>
        </div>
        <div class="col-md-2">
          <p>
            <img src="/public/images/chambres/lit2.png" alt>
          </p>
        </div>
      </div>
      <div class="col-md-3">
        <p>4 pers max</p>
      </div>
      <div class="col-md-2">
        <p>70 €</p>
      </div>
    </div>
    <!-- 5 -->
    <!-- DIV ROW -->
  </div>
</template>


<script>
import axios from "axios";
import router from "../router";

export default {
  name: "Prix",
  methods: {
    getData: function() {
      axios
        .get("/api/tarif")
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
