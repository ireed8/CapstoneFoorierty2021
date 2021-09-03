import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

import Navigo from "navigo";
import { capitalize } from "lodash";
import dotenv from "dotenv";
import axios from "axios";

const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

dotenv.config();

const router = new Navigo(window.location.origin);
// console.log("ivan-process.env: ", process.env);

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
// function data {
//   fetch("/")
//     .then(response => response.json);
//     .then (datat => console.log(data));
// }

function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

// function addEventListeners(st) {
//   if (st.view === "Order") {
//   }
// }

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
        state.Home.hits = [];

        axios
          .get(
            `https://api.edamam.com/api/recipes/v2?type=public&q=fish&app_id=f0844243&app_key=a862c1a1db33241e55b7dcc323c93cfa`
          )
          .then(response => {
            response.data.hits.forEach(hit => {
              // console.log("hit hit"), hit.recipe);
              state.Home.hits.push({
                label: hit.recipe.label,
                image: hit.recipe.image
              });
            });
            done();
          })
          .catch(err => console.log(err));
    }
  }
});

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();
