import dotenv from "dotenv";
dotenv.config();

import _ from "lodash";

_.intersection([2, 1], [2, 3]);
_.capitalize("hello");

console.log("Hello, Hexlet!");

console.log(_.last(["one", "two"]));

console.log(process.env.jwtToken);
