import html from "html-literal";

// const kelvinToFahrenheit = kelvinTemp =>

//   Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`

<ol>
  <li>Food Substitute</li>
  <p class="intro">This is my recipe for making Pizza purely with no bread</p>
  <li>Nutrition</li>
  <p class="intro">How do you watch what you eat and work</p>
  <li>Local Grocery Stores</li>
  <p class="intro">Look up the groceries and stores in your area</p>
  <li>About</li>
  <p class="intro">This is how I started, now when will you</p>
</ol>

  <h2>Fooriety</h2>
  <a
  href=""
  onClick="alert('Welcome to Fooriety')
  "
  >"Welcome"</a
  >
  </section>

  <h4 id="weather">
    Temperature in ${st.data.humidity}, and the weather is ...
    ${st.weather.description}
  </h4>
`;
