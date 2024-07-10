var XMLHttpRequest = require("xhr2");
const Http = new XMLHttpRequest();
const url='https://open.spotify.com/user/i91flmduj29wne9np2jfeup6w?si=595f1775158d4efb';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  const json = JSON.stringify(Http.responseText);
  const obj = JSON.parse(json);
  console.log(obj)
  //console.log(Http.responseText)
}
