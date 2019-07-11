//NPM module axios - used only with Nodejs
const axios = require('axios');
// NPM module isomophic fetch - used only with Nodejs
const fetch = require('isomorphic-fetch');

axios.get('https://reqres.in/api/products/3')
  .then(function (response) {
    console.log("Axios response: ",response.data);
  })

fetch('https://reqres.in/api/products/3')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log("Fetch response: ", data);
    });