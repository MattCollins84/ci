import Person from './Person'

test('Expect person to initialise with name Matt', () => {

  const person = new Person('Matt')
  expect(person.name).toBe('Matt')

})

test('Expect person to initialise with name Steve', () => {

  const person = new Person('Steve')
  expect(person.name).toBe('Steve')

})

test('Expect person to initialise with name Penny', () => {

  const person = new Person('Penny')
  expect(person.name).toBe('Penny')

})