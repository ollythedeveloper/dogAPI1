'use strict';

function getDogImage(dogNum) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        let dogNum= $('#dogamt').val();
        console.log(dogNum);
        getDogImage(dogNum);
    })
}

$(function() {
    console.log('App loaded! Waiting for submit');
    watchForm();
});