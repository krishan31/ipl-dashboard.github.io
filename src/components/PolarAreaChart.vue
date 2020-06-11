<script>
  import { PolarArea } from 'vue-chartjs'

  export default {
    extends: PolarArea,
    data () {
      return {
        chartData: {
          labels: ['caught', 'caught and bowled', 'lbw', 'run out', 'stumped', 'lbw', 'stumped', 'bowled', 'ritered hut', 'obstructing the field'],
          datasets: [
            {
              label: 'Polar Area Chart',
              borderWidth: 1,
              backgroundColor: [
                "#4F5565",
                "#ED5F5A",
                "#70FFA0",
                "#CCCCCC",
                "#EA8CFF",
                "#47C2FF",
                "#F4F78F",
                "#4893B2",
                "#FECEB5",
                "#2B9E86",
                "#D38E7D",
                "#B1FFFF",
                "#A26B28",
                "#003468"

              ],
              data: [248, 148, 326, 583, 187, 28, 127, 80,552, 225]
            }
            
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    }
  }
</script>