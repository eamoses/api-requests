// Vanilla JavaScript for the DOM
const xmlh = document.getElementById('xml-button');
xmlh.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products/3", true);
    xhr.onload = function(){
        const xmlText = document.getElementById('xmlhttp');
        xmlText.innerHTML = `
        XHR Response:
            ${xhr.responseText}
        `
    };
    xhr.send();
})

// jQuery using ajax - also for DOM
$('#ajax-button').click(function(){
    $.ajax({
        url: "https://reqres.in/api/products/3",
        success: function(response){
            const jsonResponse = JSON.stringify(response)
            const ajaxText = document.getElementById('ajax');
            ajaxText.innerHTML = `
            Ajax Response:
                ${jsonResponse}
            `
        }
    });
})
// Output must be json.stringified to be readable on UI

// ES6 fetch - used with DOM
const fetchMe = document.getElementById('fetch-button');
fetchMe.addEventListener('click', function(){
    fetch('https://reqres.in/api/products/3')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const jsonResponse = JSON.stringify(data)
        const fetchIt = document.getElementById('fetchIt');
        fetchIt.innerHTML = `
        Fetch Response:
            ${jsonResponse}
        `
    });
})
// Output must be json.stringified to be readable on UI
