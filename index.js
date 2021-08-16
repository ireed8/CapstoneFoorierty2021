import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const router = new Navigo(window.location.origin);
console.log("ivan-process.env: ", process.env);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;

  router.updatePageLinks();

  // eslint-disable-next-line no-undef
  addEventListeners(st);
}

router.hooks({
  before: (done, params) => {
    const page =
      // eslint-disable-next-line no-prototype-builtins
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";

    switch (page) {
      case "Blog":
        state.Blog.posts = [];
        axios
          .get("https://jsonplaceholder.typicode.com/posts/")
          .then(response => {
            response.data.forEach(post => {
              state.Blog.posts.push(post);
            });
            done();
            // console.log(state.Blog.posts);
          })
          .catch(err => console.log(err));
        break;

      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=st.%20louis&appid=${process.env.WEATHER_API_KEY}`
          )
          .then(response => {
            state.Home.weather = {};
            // console.log(response, state.Home.weather);
            state.Home.weather.city = response.data.name;
            state.Home.weather.temp = response.data.main.temp;
            state.Home.weather.feelsLike = response.data.main.feels_like;
            state.Home.weather.humidity = response.data.main.humidity;
            state.Home.weather.description =
              response.data.weather[0]["description"];
            done();
          })
          .catch(err => console.log(err));
        break;

      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();

