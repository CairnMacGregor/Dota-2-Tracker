<template>
 <section>
     
     <div v-if="loading">
         <h3>Loading ...</h3>
     </div>

     <div v-if="error">
         <h1>{{error}}</h1>
         <a href="/">Back to search</a>
     </div>


     <div v-if="playerData" class="container">
        <a :href="playerData.profile.profileurl"><h3 class = "account_id"><i class="fab fa-steam"></i>Account ID :{{playerData.profile.account_id}}</h3></a>
         <div class = "profile">
         
         
            <div class = "profile_item">
                <h2>{{playerData.profile.personaname}}</h2>
                <img class ="profile_pic" :src="playerData.profile.avatarmedium" alt="">
            </div>
        
        <div class = "profile_item">
             {{playerData.mmr_estimate.estimate}}
             <p>Estimated MMR</p>
        </div>

        <div class = "profile_item">
             <span class = "win">{{playerWL.win}}</span> to <span class ="loss">{{playerWL.lose}}</span>
             <p>Wins vs Loses</p>
        </div>
        <div class = "profile_item">
            {{playerData.profile.loccountrycode}}
            <p>Country</p>
        </div>
        </div>
    </div>
     
     
    <h2 v-if="playerData">Most Recent Matches</h2>
    

     <div class="matchGrid" v-if="playerData">
   
    <div v-for="(value, index) in recentMatches"  
    v-bind:key="index">
    <div class="container">
        <div class = "recent_matches">
            <p class ="win" v-if="value.player_slot < 100 && value.radiant_win === true || value.player_slot > 100 && value.radiant_win === false"><i class="fas fa-trophy"></i> Victory</p>
            <p class = "loss" v-else>Loss</p>
            <span class = "duration">{{moment.unix(value.start_time).format('dddd, MMMM Do, YYYY h:mm:ss A')}}</span>
            
            
         
         <div class="match_item">
            <img class="hero_img" :src="require(`@/assets/images/${value.hero_id}.png`)" alt="">
        </div>
            <div class="match_item">
             <p>Duration</p>
             <hr class = "big">
            <span><i class="far fa-hourglass"></i> {{moment.utc(moment.duration(value.duration, "seconds").asMilliseconds()).format("HH:mm:ss")}}</span>
        <hr class = "small">
        </div>
        
        <div class="match_item">
            <h5>KDA</h5>
            <hr class = "big">
            {{value.kills}}/{{value.deaths}}/{{value.assists}}
            <hr class = "small">
        </div>
        <div class="match_item">
            <h5>XPM</h5>
            <hr class = "big">
            <p><i class="fas fa-book-medical"></i> {{ value.xp_per_min}}</p>
            <hr class = "small">
        </div>
        <div class="match_item">
            <h5>GPM</h5>
            <hr class = "big">
            <p><i class="fas fa-coins"></i> {{value.gold_per_min}}</p>

        </div> 
      </div>
      <a class="btn" v-bind:href="'/matches/' + value.match_id">Get Match - {{value.match_id}}</a> 
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
        playerData: "",
        playerWL:"",
        recentMatches: [],
        heros: []
    }

},
    async created(){
        this.loading = true;
        try {
            
            const res = await axios.get(`/api/v1/players/${this.$route.params.account_id}`
            );
            const res2 = await axios.get(`/api/v1/players/${this.$route.params.account_id}/wl`
            );
            const res3 = await axios.get(`/api/v1/players/${this.$route.params.account_id}/recentMatches`
            );
            const res4 = await axios.get('/api/v1/heros');

        this.playerData = res.data;
        this.playerWL = res2.data;
        this.recentMatches = res3.data;
        this.heros = res4.data;
        console.log(this.playerData);
        console.log(this.playerWL);
        this.loading = false
} catch (err) {
            this.loading = false;
            this.error = err.response.data.message;
        }
    },
    
}

</script>


<style scoped>
 .matchGrid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(239px, 1fr));
    grid-gap: 10px;
 }

.container{
  font-size: 1.2rem;
  background: var(--primary-color);
  color: var(--text-color);
  margin: 1rem auto;
  padding: 0;
  border-radius: 5px;
  border: 2px solid var(--border-color);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
}

.duration{
    text-align: center;
    display: block;
}
.recent_matches{
    margin: 0 2rem ;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0%;
}

.match_item{
    display: block;
}

.hero_img{
    width: 100%;
}



hr{
    width: 100%;
}


.account_id{
    padding: 5px;
    text-align: center;
}

.profile_pic{
    width: 100%;
    border: 1px solid var(--border-color);
}
.profile{
  color: var(--text-color);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  
}
h2{
    text-align: center;
}
.profile_item{
    padding: 20px;
    display: inline-block;

}
.recent_matches{
    margin-top: 20px;
}

.win{
    color: green;
}

.loss{
    color: red;
}

hr.small{
    display:none;
}
.hero_icon{
    width: 50%;
   
}

@media screen and (max-width: 680px) {
 .profile{
  color: var(--text-color);
  margin: 1rem auto;
  display: block;
  border: none;
  border-radius: 5px;

}

.hero_icon{
width: 20%;
margin-top: 5px;
border: 1px solid var(--border-color);
}    
.profile_item{
        padding: 5px;
        display: block;
        text-align: center;
   
}
.profile_pic{
    width: 20%;
    border: 1px solid var(--border-color);
}

.recent_matches{
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