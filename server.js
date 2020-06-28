const express = require('express'),
      morgan  = require('morgan'),
      dotenv  = require('dotenv');


      dotenv.config({path: './config.env'});

      const app = express();
      
      
      if(process.env.NODE_ENV === 'development'){
          app.use(morgan('dev'));
      }

app.use('/api/v1/players', require('./routes/players'));
app.use('/api/v1/matches', require('./routes/matches'));
app.use('/api/v1/heros', require('./routes/heros'));
app.use('/api/v1/proPlayers', require('./routes/proPlayers'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});