<template>
     <section class="des" md-with-hover>
        <md-ripple class="card-inner">
           <md-card :class="'yes '+ cards.color" md-with-hover 
           v-for="cards in teamCard"
           :key="cards.color">
            <md-ripple>
                <h2 class="bg-text"> {{ cards.bgtext }} </h2>
               
                <md-card-media class="inner-img">
                    <img  :src="cards.src">
                </md-card-media>
                <md-card-header>
                   <h3> <strong>{{ cards.title }} </strong></h3> 
                </md-card-header>

            </md-ripple>
            </md-card>
        </md-ripple>
     </section>
</template>


<script>
export default {
    name: 'Seasonteam',
    data () {
        return {
            teamCard: [
                {
                    title: 'Chennai Super King',
                    color: 'yellow',
                    bgtext: 'CSK',
                    src: require('../assets/img/Webp.net-resizeimage (7).png')
                },
                {
                    title: 'Deccan Chargers',
                    color: 'grey',
                    bgtext: 'DC',
                    src: require('../assets/img/Deccan_Chargers.png')
                },
                {
                    title: 'Delhi Daredevils',
                    color: 'hotred',
                    bgtext: 'DD',
                    src: require('../assets/img/Webp.net-resizeimage (4).png'),
                    
                },
                {
                    title: 'Kings X1 Punjab',
                    color: 'red',
                    bgtext: 'KX1',
                    src: require('../assets/img/Kings_XI_Punjab.png')
                },
                {
                    title: 'Kolkata Knight Riders',
                    color: 'purple',
                    bgtext: 'KKR',
                    src: require('../assets/img/Webp.net-resizeimage (8).png')
                },
                {
                    title: 'Mumbai Indians',
                    color: 'blue',
                    bgtext: 'MI',
                    src: require('../assets/img/Webp.net-resizeimage (5).png')
                },
                {
                    title: 'Rajasthan Royals',
                    color: 'darkblue',
                    bgtext: 'RR',
                    src: require('../assets/img/Webp.net-resizeimage (9).png')
                },
                {
                    title: 'Royal Challengers Banglore',
                    color: 'Orange',
                    bgtext: 'RCB',
                    src: require('../assets/img/Webp.net-resizeimage (6).png')
                },
                {
                    title: 'Gujarat Lions',
                    color: 'brown',
                    bgtext: 'GL',
                    src: require('../assets/img/Webp.net-resizeimage (10).png')
                },
                 {
                    title: 'Pune Warriors',
                    color: 'black',
                    bgtext: 'PW',
                    src: require('../assets/img/Webp.net-resizeimage (15).png')
                },
                 {
                    title: 'Rising Pune',
                    color: 'mehroon',
                    bgtext: 'RP',
                    src: require('../assets/img/Webp.net-resizeimage (14).png')
                }, 
                {
                    title: 'Sunrisers Hyderabad',
                    color: 'white',
                    bgtext: 'SH',
                    src: require('../assets/img/Webp.net-resizeimage (11).png')
                },
                

            ]
        }
    }
}
</script>

<style >
.yes{
    height: 320px;
    width: 18%;
    display: flex;
    display: inline-block;
    margin: 35px;
    text-align: -webkit-center;
    padding-top: 38px;
}
.des {
    text-align: center;
    /* max-width: 986px  !important; */
   
    flex: 1 1 33.333%;
  }
  .card-inner{
      position: relative !important;
      padding: 25px !important; 
       
  }
  .inner-img{
      width: 45% !important;
      text-align: center !important;    
  }
  .yes.blue {
      background-image: linear-gradient(to bottom right, rgb(36, 177, 212), #005FA2);
  }
  .yes.yellow {
      background-image: linear-gradient(to bottom right, #F9CD05, #FFFF3C);
  }
  .yes.grey {
      background-image: linear-gradient(to bottom right, #425170, #D5D6D0, #021B3A);
  }
  .yes.Orange {
      background-image: linear-gradient(to bottom right, #252829, 10%, #E63329, #FADF8D);
  }
  .yes.darkblue {
      background-image: linear-gradient(to bottom right, #D1AB3E, #004BA0, 80%, #004BA0);
  }
   .yes.hotred {
      background-image: linear-gradient(to bottom right, rgb(64, 64, 128), #E32A26);
  }
  .yes.red {
      background-image: linear-gradient(to bottom right, rgb(241, 33, 40), #D7D8DA);
  }
  .yes.purple {
      background-image: linear-gradient(to bottom right, #B3A123, 30%, #2E0854);
  }
  .yes.brown {
      background-image: linear-gradient(to bottom right,#F8EF22, #F97324, 30%, #8C411E);
  }
  .yes.white {
      background-image: linear-gradient(to bottom right,rgba(246, 112, 17, 0.945),60%, #000000);
  }
  .yes.mehroon {
      background-image: linear-gradient(to bottom right, #2C04A2,60%, #D11D9B);
  }
  .yes.black {
      background-image: linear-gradient(to bottom right, #66A24B,40%, #FFFFFF, #FCF105,  #000000);
  }
  .bg-text{
      text-align: left;
      padding-left: 5px;
      position: absolute;
      top: -23px;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 0;
      overflow: hidden;
     color: #313131;
      font-size: 90px;
      font-weight: 900;
      opacity: 0.2;
      transform-origin: center;
      perspective: 10000px;
  }
   @media only screen and (max-width: 650px) {
      .des{
          width: 100%;
      }
      .yes{
          width: 100%;
          
      }
      .bg-text{
      text-align: left;
      padding-left: 5px;
      position: absolute;
      top: -23px;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 0;
      overflow: hidden;
     color: #313131;
      font-size: 90px;
      font-weight: 900;
      opacity: 0.2;
      transform-origin: center;
      perspective: 10000px;
  } 
   }
  
</style>
 



  
