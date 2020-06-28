<template>
<section>
     <div class="search">
      
      <h1 class = "title">Track Player Stats</h1>
      <form v-on:submit.prevent="onSubmit">
         <div class="form-group">
             <label for="account_id">Please enter your <i class="fab fa-steam"></i> account ID</label>
             <input type="text"
             v-model="account_id" 
                id="account_id" 
                placeholder="87944681">
         </div>
         <div class="form-group">
                <input type="submit" value ="Submit" class = "btn">
            </div>
      </form>
  </div>
    
    <h2 class = "title">Pro Players</h2>
    <div v-if="loading">
         <h3>Loading ...</h3>
    </div>
  <div class = "profileContainer" v-if="proPlayers">
      
      <div v-for="(value, index) in proPlayers.slice(0, 12)"  
        v-bind:key="index">
            <div class = "proProfile">
                <img :src="value.avatarfull" alt="">
                <a class ="btn" :href="'/players/' + value.account_id"><p>{{value.name}}</p></a>
                <a :href="value.profileurl"><i class="fab fa-steam"></i></a>
            </div>
      </div>
  </div>
  
  </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'Search',
    data(){
        return {
            loading: false,
            account_id:"",
            proPlayers: [],
            heros: []
        }
    },
    async created(){
        this.loading = true;
        try {
            
            const res = await axios.get(`/api/v1/proPlayers`
            );
            const res4 = await axios.get('/api/v1/heros');

        this.proPlayers = res.data;
        this.heros = res4.data;
       
        
        this.loading = false
} catch (err) {
            this.loading = false;
            this.error = err.response.data.message;
        }
    },
    methods:{
        onSubmit(){
            if(!this.account_id){
                this.$toasted.show("Please enter an account", {
                    duration: 3000,
                    icon: "exclamation-cirlce"
                });
            } else {
                this.$router.push(`/players/${this.account_id}`)
            }
        },
    }
}
</script>

<style scoped>
.search{
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
}

 .title{
     text-align: center; 
 }
 
 .profileContainer{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    grid-gap: 10px;
 }
 .proProfile{
     border: 1px solid var(--border-color);
     margin: 10px auto;
     text-align: center;
     box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
     max-width: 186px;
 }

input[type=text]{
    background-color:white;
    border-bottom: 2px solid var(--secondary-color)
}
i{
   font-size: 2rem;
}
</style>