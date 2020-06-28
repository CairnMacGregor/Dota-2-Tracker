<template>

  <div class="container">
       <Navbar/>
    <router-view/>
 
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar';
export default {
  name: 'App',
  components: {
   'Navbar': Navbar
  }
}
</script>

<style>

:root {
  --primary-color: white;
  --secondary-color:#B44335;
  --tertiary-color:#e2;
  --border-color:black;
  --text-color:black;

}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 

}

body {
  background: var(--primary-color);
  font-family: 'Rajdhani', sans-serif;
  color: var(--text-color);
  line-height: 1.6;
}

a {
  color: var(--text-color);
  text-decoration: none;
}
ul {
  list-style: none;
}
.wrapper{
  min-height: 100%;
}
.container {
  max-width: 960px;
  margin: 1rem auto;
  overflow: auto;
  padding: 0 2rem;
  }
.form-group {
  margin: 1rem 0;
}
.search {
  margin-top: 1rem;
  padding: 2rem;
  border: 2px solid var(--border-color);
  border-radius: 0;
}

input,
select,
textarea {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: none;
  background-color: var(--secondary-color);
}
.btn {
  background-color: var(--primary-color); 
  border: 2px solid var(--secondary-color);
  color: var(--text-color);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  margin: 5px 2.5px;
  cursor: pointer;
}

.btn:hover{
  background: var(--secondary-color); 
  color: var(--primary-color);
 
}


</style>
