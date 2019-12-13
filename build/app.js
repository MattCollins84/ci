"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./lib/Person");
const source_map_support_1 = require("source-map-support");
source_map_support_1.install();
const names = ["Matt", "Steve", "Penny"];
const people = names.map(name => new Person_1.default(name));
people.forEach(person => console.log(person.name));
//# sourceMappingURL=app.js.map