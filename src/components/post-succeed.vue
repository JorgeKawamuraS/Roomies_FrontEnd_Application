<template>
  <v-app style="background-color: #f0f0f0" class="justify-center align-center">
          <v-card max-width="60%" class="my-13 align-self-center" id="succed-back">
            <div class="align-content-end">
              <v-card-title class="justify-center">¡Tu propiedad se publicó exitosamente!</v-card-title>
              <v-img class="mx-auto" max-width="90%" :src="cards[11]" height="300" ></v-img>
              <v-card-actions class="d-flex justify-center">
                <v-btn text @click="navigateToDetailedPost"  class="my-4" elevation="2" style="color: white"  x-large id="button-back">Ver publicación</v-btn>
              </v-card-actions>
            </div>
          </v-card>
  </v-app>
</template>

<script>
export default {
  name: "post-succeed",
  data: () => ({
    cards: [
      { id: 1,src: 'https://q-ec.bstatic.com/images/hotel/max1024x768/193/193401125.jpg'},
      { id: 2,src: 'https://d3rny71whgunfp.cloudfront.net/eyJidWNrZXQiOiJyZXNlbS1wZSIsImtleSI6IjE2MDEzMzE2NzY4MDhfLTc2ODY1OTE0My5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjM1NCwiaGVpZ2h0IjoyNDAsImZpdCI6ImNvdmVyIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfX19' },
      { id: 3,src: 'https://d3rny71whgunfp.cloudfront.net/eyJidWNrZXQiOiJyZXNlbS1wZSIsImtleSI6IjE1ODk2MTExOTE3MTFfMzkzMTY5OTk2LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODQwLCJoZWlnaHQiOjYzMCwiZml0IjoiY292ZXIiLCJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWV9fX0=' },
      { id: 4,src: 'https://www.requieromicasaventas.com/wp-content/uploads/2019/09/Departamentos-en-venta-en-Surco.jpg'},
      { id: 5,src: 'https://static.tokkobroker.com/pictures/109555395905328607171649885392781135955452625865933643697834565602442661197831.jpg'},
      { id: 6,src: 'https://thumbs4.properati.com/VnfJV5Z3MC5uQENtv8wm9AtIvOU=/360x270/filters:strip_icc()/https%3A%2F%2Fcdn-us.inmokey.com%2Fproperties%2F8%2F3%2Fp-664283-010221102612-885390.jpeg' },
      { id: 7,src: 'https://d2f2b72of8fmj1.cloudfront.net/1562901965801_15602006.jpeg'},
      { id: 8,src: 'https://img-us-1.trovit.com/img1pe/X1hs10l16B1Y/X1hs10l16B1Y.1_11.jpg' },
      { id: 9,src: 'https://www.bienesonline.com/peru/photos/venta-de-iluminado-y-espacioso-departamento-en-surco-DEV333171618799274-324.jpg'},
      { id: 10,src: 'https://static.tokkobroker.com/pictures/47168099978317268818807495368407560918424258965754953793026510610240177842409.jpg'},
      { id: 11,src: 'https://img.nuroa.com/alquilo_lindo_departamento_amoblado_equipado_surco_8790124614867276716.jpg'},
      { id: 12,src: 'https://img10.naventcdn.com/avisos/11/00/00/50/79/95/1200x1200/3973715.jpg'},
    ],
  }),


  methods: {
    navigateToDetailedPost() {
      this.$router.push({name: 'detailed-post'});
    },
    navigateToDetailedPostId(id) {
      this.$router.push({name: 'detailed-post', params: { id: id}});
    },
  }

}
</script>

<style scoped>
#succed-back{
  background-color: #dddddd;
}

#button-back{
  background-color: #742d5f;
}
</style>