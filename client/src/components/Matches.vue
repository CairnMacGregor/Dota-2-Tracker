<template>
<section>
    <div v-if="loading">
         <h3>Loading ...</h3>
     </div>

     <div v-if="error">
         <h1>{{error}}</h1>
         <route-link to="/">Go back</route-link>
     </div>
    

    <!-- ALL PLAYERS THAT WERE IN THIS MATCH, 
         WITH EACH PLAYER LINKING TO THEIR PROFILE,
        UNLESS PROFILE IS NULL -->

<div v-if="matchData" class = "container">
    <!-- DISPLAY WINNING TEAM -->
   

    <h1>Match #{{matchData.match_id}}</h1>
    <h2 class = "win" v-if="matchData.radiant_win === true"> Radiant Victory</h2>
    <h2 class = "loss" v-else> Dire Victory</h2>
    
<span><i class="far fa-hourglass"></i>{{moment.utc(moment.duration(matchData.duration, "seconds").asMilliseconds()).format("HH:mm:ss")}}</span>

   
   
    
<!-- DISPLAY RADIANT TEAM -->
<div class="teams_container">
<div class = "grid">
    <ul>
             <h2 class = "radiant">Radiant</h2>
             <span><h3>{{matchData.radiant_score}}</h3></span> 
      
        <li class = "player_private" v-if="matchData.players[0].account_id === null"> Player account is private</li>
   <a v-else v-bind:href="'/players/' + matchData.players[0].account_id">
    <li class="player">{{matchData.players[0].personaname}}</li> 
  </a>
<hr>
     <li class = "player_private" v-if="matchData.players[1].account_id === null"> Player account is private</li>
   <a v-else v-bind:href="'/players/' + matchData.players[1].account_id">
    <li class="player">{{matchData.players[1].personaname}}</li> 
  </a>
<hr>
        <li class = "player_private" v-if="matchData.players[2].account_id === null"> Player account is private</li>
   <a v-else v-bind:href="'/players/' + matchData.players[2].account_id">
    <li class="player">{{matchData.players[2].personaname}}</li> 
  </a>
  <hr>
         <li class = "player_private" v-if="matchData.players[3].account_id === null"> Player account is private</li>
   <a v-else v-bind:href="'/players/' + matchData.players[3].account_id">
    <li class="player">{{matchData.players[3].personaname}}</li> 
  </a>
  <hr>
         <li class = "player_private" v-if="matchData.players[4].account_id === null"> Player account is private</li>
   <a v-else v-bind:href="'/players/' + matchData.players[4].account_id">
    <li class="player">{{matchData.players[4].personaname}}</li> 
  </a>
        </ul>
    
<!-- DISPLAY DIRE TEAM -->
        <ul>
             <h2  class = "dire">Dire</h2>
             <span> <h3>{{matchData.dire_score}}</h3></span>
     <li class = "player_private" v-if="matchData.players[5].account_id === null"> Player account is private</li>
   <a v-else v-bind:href="'/players/' + matchData.players[5].account_id">
    <li class="player">{{matchData.players[5].personaname}}</li> 
  </a>
  <hr>
   <li class = "player_private" v-if="matchData.players[6].account_id === null"> Player account is private</li>
   <a v-else v-bind:href="'/players/' + matchData.players[6].account_id">
    <li class="player">{{matchData.players[6].personaname}}</li> 
  </a> 
  <hr>
     <li class = "player_private" v-if="matchData.players[7].account_id === null"> Player account is private</li>
   <a v-else v-bind:href="'/players/' + matchData.players[7].account_id">
    <li class="player">{{matchData.players[7].personaname}}</li> 
  </a>
  <hr>
     <li class = "player_private" v-if="matchData.players[8].account_id === null"> Player account is private</li>
   <a v-else v-bind:href="'/players/' + matchData.players[8].account_id">
    <li class="player">{{matchData.players[8].personaname}}</li> 
  </a>
  <hr>
     <li class = "player_private" v-if="matchData.players[9].account_id === null"> Player account is private</li>
   <a v-else v-bind:href="'/players/' + matchData.players[9].account_id">
    <li class="player">{{matchData.players[9].personaname}}</li> 
  </a>
         </ul>      
</div> 
</div>
</div>

<!-- INDIVIDUAL PLAYER STATS -->

<div v-for="(value, index) in matchData.players"  
  v-bind:key="index">
    <div class="container">
      <div class="match">
        <p class = "player_private" v-if="value.account_id === null"> Player account is private</p>
        <a v-else :href="'/players/' + value.account_id">
        <p class="player">{{value.personaname}}</p> 
        </a>
      <div class = "match_item">
        <p>Hero Played</p>
        <img class="hero_icon" :src="require(`@/assets/images/${value.hero_id}.png`)" alt="">
      </div>
    <div class = "match_item">
      <p>LEVEL</p>
      {{value.level}}
    </div>
    <div class = "match_item">
      <p>KDA</p>
      {{value.kills}}
      {{value.deaths}}
      {{value.assists}}
    </div>
 
    <div class = "match_item">
      <p>Kills per Min</p>
      {{value.benchmarks.kills_per_min.raw.toFixed(2)}}
    </div>
    <div class = "match_item">
      <p>Last hit Denies</p>
      {{value.last_hits}}
      {{value.denies}}
    </div>
    <div class = "match_item">
      <p>Last hits per min</p>
      {{value.benchmarks.last_hits_per_min.raw.toFixed(2)}}
    </div>
    <div class = "match_item">
    <p>EXP AND GOLD PER MIN</p>
      {{value.gold_per_min.toFixed(2)}}
      {{value.benchmarks.xp_per_min.raw.toFixed(2)}}
    </div>
    <div class = "match_item">
      <p>Total EXP and GOLD</p>
        {{value.total_gold}}
        {{value.total_xp}}
    </div>
    <div class = "match_item">
       <P>DAMAGE DEALT</P>
      {{value.hero_damage}}
      {{value.tower_damage}}
    </div>
    <div class = "match_item">
      <p>Hero damage per min</p>
      {{value.benchmarks.hero_damage_per_min.raw.toFixed(2)}}
    </div>
    <div class = "match_item">
      <p>HEALING</p>
      {{value.hero_healing}}
    </div>
    <div class = "match_item">
      <p>Hero Healing Per Minute</p>
      {{value.benchmarks.hero_healing_per_min.raw.toFixed(2)}}
    </div>
    <div class = "match_item">
    <p>ITEMS</p>
      {{value.item_0}}
      {{value.item_1}}
      {{value.item_2}}
      {{value.item_3}}
      {{value.item_4}}
      {{value.item_5}}
      {{value.item_neutral}}
    </div>
  </div>
  </div>
</div>
     
</section>
</template>



<script>
import axios from 'axios'
export default {
name: 'player',
data(){
    return{
        loading: false,
        error: null,
        matchData: "",
        heros: []
    
    }
},
    async created(){
        this.loading = true;
        try {
            
            const res = await axios.get(`/api/v1/matches/${this.$route.params.match_id}`
            );
          const res2 = await axios.get('/api/v1/heros');
        this.matchData = res.data;
        this.heros = res2.data;
        console.log(this.matchData);
        this.loading = false
} catch (err) {
            this.loading = false;
            this.error = err.response.data.message;
        }
    },
    
}

</script>

<style  scoped>

.player{
  font-size: 1.5rem;
  color: var(--secondary-color);
}
.player_private{
  font-size: 1.5rem;
  color: grey;
}
span{
  color: var(--text-color);
}
.teams_container {
  background: var(--primary-color);
  color: var(--primary-color);
  max-width: 700px;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  border-radius: 5px;

}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.container{
  background: var(--primary-color);
  color: var(--text-color);
  margin: 1rem auto;
  padding: 0;
  border-radius: 5px;
  border: 2px solid var(--border-color);
  text-align: center;
}

.duration{
    text-align: center;
    display: block;
}
.recent_matches{
    margin: 0 2rem ;
    align-items: center;
    justify-content: center;
    padding: 0%;
}

.match_item{
    display: block;
    
}
hr{
    width: 100%;
}
.btn   {
    margin: 0;
    padding: 0;
}
.btn:hover{
   border: 5px solid var(--border-color);
}
.account_id{
    padding: 5px;
    text-align: center;
}

h2{
    text-align: center;
}

.win{
    color: green;
}

.loss{
    color: red;
}

.radiant{
  color: green;
}
.dire{
  color: red;
}


@media screen and (max-width: 650px) {
  .teams_container {
  background: var(--primary-color);
  color: var(--text-color);
  max-width: 700px;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  border-radius: 5px;
  
}
.player{
  font-size: 1.2rem;
  color: var(--secondary-color);
}
.player_private{
  font-size: 1.2rem;
  color: grey;
}


.matches{
    margin: 0 2rem ;
    align-items: center;
    justify-content: center;
}

.match_item{
    display: block;
    padding: 5px;
    text-align: center;
}
hr.big{
    display: none;
}
hr.small{
    display:block;
    width: 50%;
    transform: translatex(50%);
}
}
</style>