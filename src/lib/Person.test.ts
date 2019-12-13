import Person from './Person'

test('Expect person to initialise with name Matt', () => {

  const person = new Person('Matt')
  expect(person.name).toBe('Matt')

})