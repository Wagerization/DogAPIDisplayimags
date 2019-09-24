function dogImage() {
  let number = $(".js-query").val();
  let bread = $(".dog-selector option:selected").html();
  var originalURL = `https://dog.ceo/api/breed/${bread}/images/random/${number}`;
  var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL;
  fetch(queryURL)
    .then(response => response.json())
    .then(responseJson => {
      for (i = 0; i < responseJson.message.length; i++) {
        console.log(responseJson.message[i]);
        $(".results").addClass("active");
        $(".results").prepend(`<img src="${responseJson.message[i]}" />`);
      }
    })
    .catch(error => alert("Something went wrong. Try again later."));
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
