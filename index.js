let cameras = document.getElementsByClassName("cameras");

let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
    let response = JSON.parse(this.response);
    for (let i = 0; i < 5; i++) {
      console.log(response[i]);
      console.log(response[i].imageUrl);
      cameras[i].innerHTML = '<img src="' + response[i].imageUrl + '"/>';
    }
  }
};

request.open("GET", "http://localhost:3000/api/cameras", true);
request.send();
