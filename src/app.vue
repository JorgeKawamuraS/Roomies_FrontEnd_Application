<template>
  <v-app>
    <v-app-bar app color="#fba31a" fixed >
      <v-img src="./assets/logoRoomies.png" max-width="8%" height="50" ></v-img>
      <v-toolbar-items>
        <span v-if="!currentUser" >
          <v-btn text to="/">Home</v-btn>
          <v-btn text to="/leaseholder">Buscar inmueble</v-btn>
          <v-btn text to="/login">Publicar anuncio</v-btn>
          <v-btn text to="/login">Iniciar sesión</v-btn>
          <v-btn text to="/register">Registrarse</v-btn>
       </span>
        <span v-else>
          <span v-if="getPlan()<3">
             <v-btn text @click.prevent="goToLandlord">Home</v-btn>
            <v-btn text to="/leaseholder">Buscar inmueble</v-btn>
            <v-btn text to="/favourite-posts">Posts Favoritos</v-btn>
             <v-btn text @click.prevent="goToLandlord">{{this.currentUser.firstName}}</v-btn>
            <v-btn text @click.prevent="logout">Cerrar sesión</v-btn>
          </span>
          <span v-if="getPlan()>=3">
            <v-btn text @click.prevent="goToLeaseholder">Home</v-btn>
            <v-btn text to="/leaseholder">Buscar inmueble</v-btn>
            <v-btn text to="/create-post">Publicar anuncio</v-btn>
             <v-btn text @click.prevent="goToLeaseholder">{{this.currentUser.firstName}}</v-btn>
            <v-btn text @click.prevent="logout">Cerrar sesión</v-btn>
          </span>
      </span>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="#fba31a">
      <v-card class="flex" flat tile color="#fba31a">
        <v-card-title>
          <strong >Roomies 2021</strong>
          <v-spacer></v-spacer>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>
          <v-card-text align="center">
            {{ new Date().getFullYear() }} — <strong>Roomies</strong>
          </v-card-text>
        </v-card-subtitle>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

import UserApiService from "./services/users-api.service";

export default {
  name: 'App',

  components: {},

  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },

  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },

    getPlan() {
      UserApiService.getPerfilbyUserId(this.currentUser.id).then( (response) => {
        this.profileId=response.data.id;
        this.planId= response.data.plan.id;
      });
      return this.planId;
    },
    goToLandlord(){
      this.$router.push({name:"home-landlord", params:{profileId:this.profileId}});
    },
    goToLeaseholder(){
      this.$router.push({name:"home-leaseholder", params:{profileId:this.profileId}});
    },
  },

  data: () => ({

    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    planId: 0,
    plan: 0,
    userId: 0,
    profileId:0
  }),

};
</script>