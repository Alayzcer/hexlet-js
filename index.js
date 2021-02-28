import dotenv from 'dotenv';

import _ from 'lodash';

dotenv.config();

_.intersection([2, 1], [2, 3]);
_.capitalize('hello');

console.log('Hello, Hexlet!');

console.log(_.last(['one', 'two']));

console.log(process.env.jwtToken);
