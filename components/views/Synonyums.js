import html from "html-literal";

export default () => `
<form id="order" method="POST" action="">
  <h2> Synonyums My Food</h2>
  <div>
    <label for="meat">Meat:</label>
    <select id="meat" name="meat">
      <option value="">Select a Meat</option>
      <option value="beef">Beef</option>
      <option value="pork">Pork</option>
      <option value="fish">Fish</option>
      <option value="chicken">HellChicken</option>
      <option value="turkey">Turkey</option>
      <option value="lamb">Lamb</option>
    </select>
  </div>
  <div>
    <label for="cheese">Cheese:</label>
    <input type="text" name="cheese" id="cheese" placeholder="Enter Cheese" required>
  </div>
  <div>
    <label for="sauce">Sauce:</label>
    <input type="text" name="sauce" id="sauce" placeholder="Enter Sauce" required>
  </div>
  <div>
    <label for="toppings">Toppings:</label>
    <input type="checkbox" id="id_of_checkbox1" class="items1" name="toppings" value="Chicken">
    <label for="top1">chicken</label>
    <input type="checkbox" id="id_of_checkbox2" class="items1" name="toppings" value="onion">
    <label for="top2">onion</label>
    <input type="checkbox" id="id_of_checkbox3" class="items1" name="toppings" value="spinach">
    <label for="top3">spinach</label>
    <input type="checkbox" id="id_of_checkbox4" class="items1" name="toppings" value="Extra cheese">
    <label for="top4">extra cheese</label>
    <input type="checkbox" id="id_of_checkbox5" class="items1" name="toppings" value="red pepper">
    <label for="top5">red pepper</label>
  </div>
  <input type="submit" name="submit" value="Submit Pizza">
</form>
`;
