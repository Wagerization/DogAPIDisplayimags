function dogImageBreed() {
  let number = $(".js-query").val();
  let breed = $(".dog-selector option:selected").val().replace("-", "/");
  const originalURL = `https://dog.ceo/api/breed/hound/images/random/${number}`;
  const queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL;
  fetch(queryURL)
    .then(response => response.json())
    .then(responseJson => {
      for (i = 0; i < responseJson.message.length; i++) {
        console.log(responseJson.message[i]);
        $(".results").addClass("active");
        $(".results").prepend(
          `<img  class="images" src="${responseJson.message[i]}" />`
        );
      }
    });
}

function dogImageNumber() {
  let number = $(".js-query").val();
  let breed = $(".dog-selector option:selected").val().replace("-", "/");
  const originalURL = `https://dog.ceo/api/breed/${breed}/images/random/1`;
  const queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL;
  fetch(queryURL)
    .then(response => response.json())
    .then(responseJson => {
      for (i = 0; i < responseJson.message.length; i++) {
        console.log(responseJson.message[i]);
        $(".results").addClass("active");
        $(".results").prepend(
          `<img  class="images" src="${responseJson.message[i]}" />`
        );
      }
    });
}


function clickForm() {
  $(".form-list-one ").submit(event => {
    event.preventDefault();
    dogImageBreed();
  });
}

function clickFormTwo(){
  $('.form-list-two').submit(event => {
    event.preventDefault();
    dogImageNumber();
  })
}

$(".js-submit-one").click(event => {
  $(".js-results").empty();
});

$(".js-submit-two").click(event => {
  $(".js-results").empty();
});

$(function() {
  console.log("app loaded");
  clickForm();
  clickFormTwo();
});
