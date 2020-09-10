import { promisify } from "util";

const sleep = promisify(setTimeout);

console.log("start");
await sleep(2000);
console.log("finish")
