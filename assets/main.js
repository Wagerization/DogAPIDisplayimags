function dogImage() {
  let number = $(".js-query").val();
  let queryURL = "https://cors-anywhere.herokuapp.com/"
  fetch(`${queryURL}https://dog.ceo/api/breed/hound/images/random/${number}`)
    .then(response => response.json())
    .then(responseJson => {
      for (i = 0; i < responseJson.message.length; i++) {
		//console.log(responseJson.message[i]);
		$('.js-submit').on('click', event =>{
			event.preventDefault();
			$('.results').addClass('active');
			$('.results').prepend(`<img  src='https://dog.ceo/api/breed/hound/images/random/${number}' />`);
		});

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
