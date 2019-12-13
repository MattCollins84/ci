"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
test('Expect person to initialise with name Matt', () => {
    const person = new Person_1.default('Matt');
    expect(person.name).toBe('Matt');
});
test('Expect person to initialise with name Steve', () => {
    const person = new Person_1.default('Steve');
    expect(person.name).toBe('Steve');
});
//# sourceMappingURL=Person.test.js.map