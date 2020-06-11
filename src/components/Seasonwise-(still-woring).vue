<template>
<div>
    <div id="example-1">
      <md-card>
                        <md-button class="md-dense md-raised color" v-on:click="selecteddata(x)" 
                        v-for="x in capData"
                        :key="x.index">   
                        {{ x.Season_Year }}
                        </md-button>
     
       
     <transition name="fadeInRight">
     <div  class="text-md-center centerd">
     <md-card class="md-primary md-card-scope" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Man Of The Series</div>
              </md-card-header>
               <md-card-content>
                {{ value.Man_of_the_Series_Id }}
              </md-card-content>
            </md-ripple>
          </md-card>

            <md-card class="md-card-scope orange-cap" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Orange Cap</div>
              </md-card-header>
              <md-card-content>
                 {{ value.Orange_Cap_Id }}
              </md-card-content>
            </md-ripple>
          </md-card>

            <md-card class=" md-card-scope purple-cap" md-with-hover>
            <md-ripple>
              <md-card-header>
                <div class="md-title">Purple Cap</div>
              </md-card-header>
              <md-card-content>
                  {{ value.Purple_Cap_Id }}
              </md-card-content>
            </md-ripple>
          </md-card>

          
          </div>
     </transition>
           </md-card>
          </div>
         
</div>            
    
</template>

<script>
export default {
    data: function() {
         return {
            capData: [],
            value: '',
            filter: [],
        }
       
    },
    
    methods: {
      selecteddata (x) {
          this.value=x;
      //  this.filter.push(this.x.Purple_Cap_Id);
        // this.filter.forEach(element => { 
        
          // this.filter.push(this.x.Season_Year)
          console.log(this.filter);
          
        // });
      // this.x.push(this.capData[this.x].Season_Year)
      // console.log(this.filter);
      }
      
    },
    
    mounted () {
        this.$axios.get('https://mighty-garden-54587.herokuapp.com/getOrangePurpleSeries')
        .then(({ data }) => {
            this.capData = data.data
            // console.log(data.data[5].index);
        })
       
    }    




}
</script>


<style  scoped>


.fadeInRight-enter-active {
  transition: all .3s ease;
}
.fadeInRight-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fadeInRight-enter, .fadeInRight-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
  .md-card {
    text-align: center;
    padding: 18px !important;
    
      
  }
  .orange-cap{
      background-color:#f9771b;
      color: #ffffff;
  }
  .purple-cap{
      background-color: #743594;
       color: #ffffff;
  }
  .md-card-scope {
  max-width: 400px;
  max-height: 200px;
  margin: 48px;
  display: inline-block;
  vertical-align: top;
  border-radius: 6px;
}
.design-card{
    height: 48px;
    width: 10%;
    padding: 5px;
}

 
  .color{
      background-color: #448aff;
      color: #ffffff;
      margin:20px;
      height: 38px !important;
      width: 9% !important;
      font-size: 18px !important;
    
  }
</style>


mycode