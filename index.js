'use strict';

//This function places the input number into the GET(fetch) Request
//then a JSON response is generated
//then the response is logged to the console
//if any errors are caught an alert will be displayed
function getDogImage(dogNum) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}
//This function responds to the form submission by taking the input number
//and placing it into the GET Request
//The default is set to 3 if there is no input
function watchForm(){
    $('form').submit(event => {
        if($('#dogamt').val().length===0){
            event.preventDefault();
            let dogNum = 3;
            console.log(dogNum);
            getDogImage(dogNum);
        }else{
        event.preventDefault();
        let dogNum= $('#dogamt').val();
        console.log(dogNum);
        getDogImage(dogNum);
        $('#dogamt').val('');
        }
    })
}

$(function() {
    console.log('App loaded! Waiting for submit');
    watchForm();
});