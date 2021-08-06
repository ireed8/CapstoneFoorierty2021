import html from "html-literal";

export default links => html`
  <nav>
    <div class="topnav">
      ${links.map(
        link =>
          `<a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a>`
      )}
    </div>
  </nav>
`;
