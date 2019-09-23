function dogImage() {
  let number = $(".js-query").val();
  var originalURL = `https://dog.ceo/api/breed/hound/images/random/${number}`;
  var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL;
  fetch(queryURL)
    .then(response => response.json())
    .then(responseJson => {
      for (i = 0; i < responseJson.message.length; i++) {
        console.log(responseJson.message[i]);
        // $('.js-submit').on('click', event =>{
        // 	event.preventDefault();
        $(".results").addClass("active");
        $(".results").prepend(
           `<img  src='${responseJson.message[i]}' />`
        );
        // });
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

$(function() {
  console.log("app loaded");
  clickForm();
});
