// https://medium.com/@pprathameshmore/top-level-await-support-in-node-js-v14-3-0-8af4f4a4d478
import axios from "axios";

const response = await axios(
  "https://quote-garden.herokuapp.com/api/v2/quotes/random"
);
console.log(response.data);
