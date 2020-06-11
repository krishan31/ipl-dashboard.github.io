<template>
    
    <div>
        <!-- <div class="tile is-parent">
                            <span>Filter By:  </span>
                            <select v-bind:as="selected">
                          
                            <option value="1">Season 1</option>
                            <option value="2">Season 2</option>
                            <option value="3">Season 3</option>
                            <option value="4">Season 4</option>
                            <option value="5">Season 5</option>
                            <option value="6">Season 6</option>
                            <option value="7">Season 7</option>
                            <option value="8">Season 8</option>
                            <option value="9">Season 9</option>
                            </select>
                        </div> -->
                        <!-- <div>
                                <article>
                                    <p>Points Table</p>
                                    <table-element :data="filteredData" :columns="tableColumns"></table-element>
                                </article>
                        </div> -->
                        <div>
                                <article>
                                    <div class="inner-para">Team win</div>
                                    <donut-chart :data="filteredTeamsData" :labels="teamList"></donut-chart>
                                </article>
                            </div>
    </div>
</template>

<script>

// import TableElement from "./TableElement"
import DonutChart from "./DonutChart"

import seasonList from "../assets/data/season_list.json"
import teamData from "../assets/data/match_team.json"

export default {
  name: 'SeasonSplit',
  components: {
        DonutChart
        },
    data () {
        let filteredData = [];
        let teamList = [];
        let dataArr = [];
        teamData.slice(0,8).forEach(element => {
            if(element.season[0] === seasonList[this.selected-1]){
              filteredData.push(element)
              teamList.push(element.team)
              dataArr.push(element.wins)
              // console.log();
              
            }
        });
    return {
      selected: '1',
      teamData: teamData,
      teamList: teamList,
      seasonList: seasonList,
      filteredData: filteredData ,
      tableColumns: ['team', 'matches',' toss_wins', 'wins', 'losses', 'pts'],
      filteredTeamsData: dataArr
      
    }
  }
}
</script>

<style>
.inner-para{
  font-size: 25px !important;
  padding-top: 2%;
  padding-left: 4%;
  font-weight: 600;
}
</style>