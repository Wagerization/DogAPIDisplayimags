function dogImage() {
  let number = $(".js-query").val();
  let breed = $(".dog-selector option:selected").val().replace("-","/");
  var originalURL = `https://dog.ceo/api/breed/${breed}/images/random/${number}`;
  var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL;
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
  $(".form-list").submit(event => {
    event.preventDefault();
    dogImage();
  });
}

$(".js-submit").click(event => {
  $(".js-results").empty();
});

$(function() {
  console.log("app loaded");
  clickForm();
});
