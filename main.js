//toggle menu

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//gif search
let APIKEY = "hQN34yaZ18XlFNlBumjsOwDhaNynT58M";
const limit = 5;
document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("btnSearch").addEventListener("click", (ev) => {
    ev.preventDefault(); //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=${limit}&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        //  data, pagination, meta
        console.log(content.data);
        console.log("META", content.meta);
        let out = document.querySelector(".out");
        out.innerHTML = "";
        content.data.forEach((gif) => {
          let fig = document.createElement("figure");
          let img = document.createElement("img");
          let fc = document.createElement("figcaption");
          img.src = content.data[0].images.downsized.url;
          img.alt = gif.title;
          fig.appendChild(img);
          fig.appendChild(fc);
          out.appendChild(fig);
        });

        document.querySelector("#search").value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
