<template>
  <v-app>
    <v-app-bar app dense>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/nuevologo-radical.png"
          transition="scale-transition"
          width="180"
        />

        
      </div>

      <v-spacer></v-spacer>
      <v-menu left bottom >

                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" >
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-list dense>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title> <v-icon>mdi-account</v-icon></v-list-item-title>
                                 </v-list-item-content>
                        </v-list-item>
                                <v-divider></v-divider>
                        <v-list-item-group
                        >
                        <v-list-item >
                            <v-list-item-title>
                                <v-icon small>mdi-logout</v-icon>
                                Salir </v-list-item-title
                            >
                        </v-list-item>
                        </v-list-item-group>



                    </v-list>
                </v-menu>
    </v-app-bar>

    <v-main>
            <v-container fluid >
                <!-- If using vue-router -->
                <router-view></router-view>

            </v-container>
      
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  

  data: () => ({
    //
  })
};
</script>
