const express = require('express');
const app = express();
const routes = require('./routes/routes')
const path = require('path');
require('dotenv').config()
const axios = require('axios');
const qs = require('qs');

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
/*
app.get('/', (req, res) => {
    res.json({mssg:'welcome to the app'})
}) */

/*
const client_id = process.env.SPOTIFY_API_ID; // Your client id
const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

const getAuth = async () => {
  try{
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({'grant_type':'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    //return access token
    console.log(response.data.access_token)
    return response.data.access_token;
    //console.log(response.data.access_token);   
  }catch(error){
    //on fail, log the error in console
    console.log(error);
  }
}
*/

/*
const getToken = async (
  clientId = process.env.SPOTIFY_CLIENT_ID,
  clientSecret = process.env.SPOTIFY_CLIENT_SECRET
) => {
  const headers = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: "client_credentials",
  };
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      headers
    );
    //console.log(response.data.access_token)
  return response.data.access_token;
  } catch (err) {
    console.log(err);
  }
};

getToken()
*/

const client_id = process.env.SPOTIFY_API_ID; // Your client id
const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

const getAuth = async () => {
  try{
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({'grant_type':'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    //return access token
    console.log(response.data.access_token)
    const result = response.data.access_token
    return result
    //console.log(response.data.access_token);   
  }catch(error){
    //on fail, log the error in console
    console.log(error);
  }
}


/*
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

app.get('/spotify-authorization', (req, res, next) => {
  axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    data: qs.stringify({'grant_type':'client_credentials'}),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(client_id + ':' + client_secret).toString('base64')
    }
  })
    .then(response => {
       let token = response.data.access_token
    console.log(response.data.access_token)
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  res.send(success);
});
*/
const access_token = getAuth()
/*
/*
axios.get('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', {
  headers: {
    'Authorization': `bearer ${access_token}`,
    'Content-Type': 'application / json' 

  }
})
.then((res) => {
  //console.log(res.data)
})
.catch((error) => {
  console.error(error)
})
*/

async function findSongs() {




    let result = await axios.request({
        method: "get",
        url: "https://api.spotify.com/v1/6rqhFgbbKwnb9MLmUQDhG6",
        headers: { 'Authorization':  `Bearer ${access_token}` ,
        'Content-Type': 'application / json' }

        //params: { 'q': search_query, 'type': 'track' }
    })/*.catch(async function handleError(err) {
        console.log(err)
        let refreshed_token = await refreshToken(username)
        let result_new = await findSongs(username, refreshed_token, search_query)
        console.log(result_new)
        return result_new.data.tracks


    })
*/

    return result.data.tracks
}
*/
//findSongs()


app.use('/api/routes', routes)








// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 3000')
})
