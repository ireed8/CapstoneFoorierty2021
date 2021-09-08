import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`
  <section id="jumbotron">
    <h2>Fooriety</h2>

    <a
      href=""
      onClick="alert('Welcome to Fooriety')
    "
      ></a
    >
  </section>
  <p> <body>
  If you are trying to improve your diet, health experts recommend you try to monitor how much you eat each day, eat a wide variety of foods, base your diet on cereals and whole grains, and increase fruit and vegetable consumption. Also, drink plenty of water and reduce consumption of fat, salt and sugar.</p>
    <body/>

    <h4>
    <img id="fresh food"
    src="https://everydaypower.com/wp-content/uploads/2019/05/healthy-eating-quotes-celebrating-better-food-choice.jpg"
  </p>
  </h4>


  <footer>
    Temperature in ${st.weather.city} is
    ${kelvinToFahrenheit(st.weather.temp)}F, feels like
    ${kelvinToFahrenheit(st.weather.feelsLike)}F. ${st.weather.clouds}, and
    seems to have ${st.weather.description}: ${st.footer}
  </footer>
`;
