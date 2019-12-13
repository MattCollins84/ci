import Person from './lib/Person'
import { install as SourceMapInstall } from 'source-map-support'
SourceMapInstall()

const names = ["Matt", "Steve", "Penny"]

const people = names.map(name => new Person(name))

people.forEach(person => console.log(person.name))