<template>
  <div>
     <!-- <v-card elevation="2" :loading="loading">
        <v-card-title
          >
            Ofensas
          <v-spacer></v-spacer>
          <v-col cols="auto">
              <v-text-field
              v-model="searchOfensas"
              append-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
              filled
            rounded
            dense
          ></v-text-field>
          </v-col>

        </v-card-title>
       
        <v-card-text>
             <v-data-table
                :headers="headersOfensas"
                :items="regla_136124"
                :search="searchOfensas"
            >
            <template v-slot:item="row">
                <tr>
                    <td>{{row.item.description}}</td>
                    <td>{{row.item.categories}}</td>
                    <td>{{row.item.offense_source}}</td>
                    <td>{{row.item.status }}</td>
                    <td>{{row.item.event_count}}</td>
                    <td>{{row.item.magnitude}}</td>
                    <td>{{row.item.severity}}</td>
                    
                </tr>
            </template>
    </v-data-table> 
        </v-card-text>
    </v-card>
    <br><br> -->
    <v-row>
       <v-col cols="3">
          <v-card
         class="mx-auto"
         max-width="344"
         shaped
         :color="(regla_136124.length>0) ? 'red' : 'green'"
      >
         <v-list-item 
         
            >
            <v-list-item-content>
            <div class="text-overline mb-4 text--secondary">
               {{ this.CELEPSA[0].nombre }}
            </div>
            <v-list-item-title class="text-h1 mb-1">
               <h1 class="display-4 text-center font-weight-bold" :loading="loading">{{regla_136124.length}}</h1>
            </v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
         </v-list-item>

         <v-card-actions>
            
         </v-card-actions>
      </v-card>
       </v-col>
       <v-col cols="3">
          <v-card
         class="mx-auto"
         max-width="344"
         shaped
         :color="(regla_136125.length>0) ? 'red' : 'green'"
      >
         <v-list-item 
         
            >
            <v-list-item-content>
            <div class="text-overline mb-4 text--secondary">
               {{ this.CELEPSA[1].nombre }}
            </div>
            <v-list-item-title class="text-h1 mb-1">
               <h1 class="display-4 text-center font-weight-bold">{{regla_136125.length}}</h1>
            </v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
         </v-list-item>

         <v-card-actions>
            
         </v-card-actions>
      </v-card>
       </v-col>
       <v-col cols="3">
          <v-card
         class="mx-auto"
         max-width="344"
         shaped
         :color="(regla_136128.length>0) ? 'red' : 'green'"
      >
         <v-list-item 
         
            >
            <v-list-item-content>
            <div class="text-overline mb-4 text--secondary">
               {{ this.CELEPSA[2].nombre }}
            </div>
            <v-list-item-title class="text-h1 mb-1">
               <h1 class="display-4 text-center font-weight-bold">{{regla_136128.length}}</h1>
            </v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
         </v-list-item>

         <v-card-actions>
            
         </v-card-actions>
      </v-card>
       </v-col>
       <v-col cols="3">
          <v-card
         class="mx-auto"
         max-width="344"
         shaped
         :color="(regla_136127.length>0) ? 'red' : 'green'"
      >
         <v-list-item 
         
            >
            <v-list-item-content>
            <div class="text-overline mb-4 text--secondary">
               {{ this.CELEPSA[3].nombre }}
            </div>
            <v-list-item-title class="text-h1 mb-1">
               <h1 class="display-4 text-center font-weight-bold">{{regla_136127.length}}</h1>
            </v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
         </v-list-item>

         <v-card-actions>
            
         </v-card-actions>
      </v-card>
       </v-col>
       <v-col cols="3">
          <v-card
         class="mx-auto"
         max-width="344"
         shaped
         :color="(regla_136123.length>0) ? 'red' : 'green'"
      >
         <v-list-item 
         
            >
            <v-list-item-content>
            <div class="text-overline mb-4 text--secondary">
               {{ this.CELEPSA[4].nombre }}
            </div>
            <v-list-item-title class="text-h1 mb-1">
               <h1 class="display-4 text-center font-weight-bold">{{regla_136123.length}}</h1>
            </v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
         </v-list-item>

         <v-card-actions>
            
         </v-card-actions>
      </v-card>
       </v-col>
    </v-row>
    <v-row v-show="chartOptions.series.length>0">
       <v-col cols="12">
          <v-card>
       <v-card-text>
            <highcharts :options="chartOptions" ></highcharts>
       </v-card-text>
    </v-card>
       </v-col>
    </v-row>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  
  name: "Ofensas",
  data() {
     return {
        loading:false,
        ofensas:[],
        regla_136124:[],
        regla_136125:[],
        regla_136128:[],
        regla_136127:[],
        regla_136123:[],
        configHeaders : {
         "auth":{
                  "username": "jperugachi",
                  "password": "jk1609PV*"
               }
         },
         searchOfensas: "",
            headersOfensas: [
                 { text: "description", value: "description" },
                 { text: "categories", value: "categories" },
                 { text: "offense_source", value: "offense_source" },
                 { text: "status", value: "status" },
                 { text: "event_count", value: "event_count" },
                 { text: "magnitude", value: "magnitude" },
                 { text: "severity", value: "severity" },
            ],
         CELEPSA:[
                     {id:136124,nombre:'R.1 Conexiones desde IPs Maliciosas'},
                     {id:136125,nombre:'R.2 Conexiones hacia IPs Maliciosas'},
                     {id:136128,nombre:'R.3 Creación o Habilitación de Usuarios AD'},
                     {id:136127,nombre:'R.4 Eliminación o Deshabilitación de Usuarios AD'},
                     {id:136123,nombre:'R.6 Escaneo de Red'},
                  ],
         chartOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Cantidad de Ofensas por caso de uso'
        },
        series: [ ]
      },
        
     }
  },
   mounted() {
      this.getData()
     
  },
  created() {
     
     
    // this.creaChart();
     
  },
  methods:{
     async getData(){
        await this.celepsaRegla_136124();
        await this.celepsaRegla_136125();
        await this.celepsaRegla_136128();
        await this.celepsaRegla_136127();
        await this.celepsaRegla_136123();
        //wait this.creaChart();
     },
     
     async celepsaRegla_136124() {
        this.loading=true;
        await this.axios
            .get(`siem/offenses?filter=status=OPEN and rules contains(id=${this.CELEPSA[0].id})`,this.configHeaders)
            .then(response => {
               this.regla_136124=response.data;
               
               this.loading=false;
            }).catch(err => console.log(err))
            .finally(() => {
               this.chartOptions.series.push({name:this.CELEPSA[0].nombre,data:[this.regla_136124.length]})

               
            });
            
     },
     celepsaRegla_136125() {
        this.loading=true;
        this.axios
            .get(`siem/offenses?filter=status=OPEN and rules contains(id=${this.CELEPSA[1].id})`,this.configHeaders)
            .then(response => {
               this.regla_136125=response.data;
            }).catch(err => console.log(err))
            .finally(() => {
               this.chartOptions.series.push({name:this.CELEPSA[1].nombre,data:[this.regla_136125.length]})
               this.loading=false;
               //this.chartOptions.series.push({name:this.CELEPSA[0].nombre,data:[this.regla_136124.length]})

               
            });
     },
     celepsaRegla_136128() {
        this.loading=true;
        this.axios
            .get(`siem/offenses?filter=status=OPEN and rules contains(id=${this.CELEPSA[2].id})`,this.configHeaders)
            .then(response => {
               this.regla_1136128=response.data;
            }).catch(err => console.log(err))
            .finally(() => {
               this.chartOptions.series.push({name:this.CELEPSA[2].nombre,data:[this.regla_1136128.length]})
               this.loading=false;

               
            });
     },
     celepsaRegla_136127() {
        this.loading=true;
        this.axios
            .get(`siem/offenses?filter=status=OPEN and rules contains(id=${this.CELEPSA[3].id})`,this.configHeaders)
            .then(response => {
               this.regla_136127=response.data;
               
            }).catch(err => console.log(err))
            .finally(() => {
               this.chartOptions.series.push({name:this.CELEPSA[3].nombre,data:[this.regla_136127.length]})
               this.loading=false;

               
            });
     },
     celepsaRegla_136123() {
        this.loading=true;
        this.axios
            .get(`siem/offenses?filter=status=OPEN and rules contains(id=${this.CELEPSA[4].id})`,this.configHeaders)
            .then(response => {
               this.regla_1136123=response.data;
            }).catch(err => console.log(err))
            .finally(() => {
               this.chartOptions.series.push({name:this.CELEPSA[4].nombre,data:[this.regla_1136123.length]})
               this.loading=false;

               
            });
     }
  }
  
};
</script>
