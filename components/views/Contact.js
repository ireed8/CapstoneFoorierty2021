import html from "html-literal";

export default () => html`

<form
action="https://formspree.io/f/mwkanadr"
method="POST"
enctype="multipart/form-data"
>
<label>
Your email:
<input type="email" name="_replyto">
</label>
<label>
Your Name:
<input type="Name" name="upload">
</label>
<button type="submit">Send</button>
</form>
<script src="./index.js"></script>
</body>
  <form id="register" method="POST" action="">
    <h2>Text</h2>
    <div>
      <label for="url">Phone:</label>
      <input
        type="text"
        name="url"
        id="url"
        placeholder="Enter # for text"
        required
      />
    </div>
    </div>
    <input type="submit" name="submit" value="Submit Email" />
  </form>
`;
