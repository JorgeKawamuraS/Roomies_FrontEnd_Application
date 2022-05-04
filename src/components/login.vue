<template>
  <v-app>
    <v-container fluid>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="8">
          <v-card>
            <v-card-title primary-title class="justify-center text-h3 pt-8 pb-6">Iniciar sesión</v-card-title>
            <v-spacer/>
            <v-form @submit.prevent="handleLogin" v-model="isValid">
              <v-container fluid>
                <v-row class="d-flex justify-center">
                  <v-col cols="12" sm="10" class="pb-5">
                    <v-text-field filled rounded dense label="Username"
                                  v-model="user.username"
                                  autocomplete="username"
                                  :rules="[v => !!v || 'Username is required.']"
                                  required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="10" class="pb-9">
                    <v-text-field filled rounded dense label="Password"
                                  v-model="user.password"
                                  type="password"
                                  autocomplete="current-password"
                                  :rules="[v => !!v || 'Password is required']"
                                  required></v-text-field>
                  </v-col>
                  <div v-if="message">
                    {{ message }}
                  </div>
                  <v-col cols="12" sm="10" class="pb-5">
                    <v-btn block elevation="2" x-large color="amber darken-1"  type="submit" >
                      Iniciar Sesión
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="10" class="pb-5">
                    <v-btn block elevation="2" x-large color="amber lighten-1" to="register">Registrarme en Roomies</v-btn>
                  </v-col>
                  <v-col cols="12" sm="10">
                    <v-btn text block color="amber lighten-1">Olvidé mi contraseña</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

import User from "@/models/user";
import UsersApiService from "@/services/users-api.service"

export default {
  name: "login",
  data() {
    return {
      user: new User('', '', '', '', ''),
      message: '',
      isValid: true,
      planId: 0
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }

  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },

  methods: {

    async handleLogin() {
      console.log('Starting Login handling');

      if (!this.isValid) {
        console.log('Invalid');
        return;
      }
      if (this.user.username && this.user.password) {
        console.log('Starting Request');
        await this.$store.dispatch('auth/login', this.user).then(
            (user) => {
              console.log('Logged In');
              console.log(user);
              UsersApiService.getPerfilbyUserId(user.id)
              .then(result=>{
                console.log("Id del plan:",result.data.plan.id);

                if(result.data.plan.id<=2){
                  this.$router.push({name:"home-leaseholder", params:{profileId:result.data.id}});
                }
                else {
                  this.$router.push({name:"home-landlord", params:{profileId:result.data.id}});
                }
              }).catch(error=>{
                console.log(error);
              })
            },
            error => {
              console.log('Error');
              this.message = (error.response && error.response.data)
                  || error.message || error.toString();
            }
        ).
        catch(function (error){
          alert('El usuario o contraseña es incorrecto');
          this.message = (error.response && error.response.data)
              || error.message || error.toString();

        })
      }
    }
  }
}
</script>


<style scoped>

</style>

