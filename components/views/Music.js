import html from "html-literal";

export default st => html`
  <table id="musics">
    <tr>
      <th>Crust</th>
      <th>Cheese</th>
      <th>Sauce</th>
      <th>Toppings</th>
    </tr>
    ${st.musics
      .map(music => {
        return `<tr><td>${music.crust}</td><td>${music.cheese}</td><td>${
          music.sauce
        }</td><td>${music.toppings.join(" & ")}</td></tr>`;
      })
      .join("")}
  </table>
`;
