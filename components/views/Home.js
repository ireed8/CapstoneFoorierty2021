import html from "html-literal";

// const kelvinToFahrenheit = kelvinTemp =>

//   Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`



  <h2>Fooriety</h2>
  <a
  href=""
  onClick="alert('Welcome to Fooriety')
  "
  >"Welcome"</a
  >
  </section>

  <h4 id="recipe">
    Temperature in ${st.title.hits}, and the weather is ...
    ${st.hits.recipe}
  </h4>
`;
