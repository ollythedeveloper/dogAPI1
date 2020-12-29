'use strict';

function getDogImage(dogNum) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

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