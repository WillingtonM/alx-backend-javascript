#!/usr/bin/env node

/* eslint-disable */

/**
 * HolbertonClass class
 * 
*/

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /* getter year */
  get year() {
    return this._year;
  }

  /* getter location */
  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const clss2019 = new HolbertonClass(2019, 'San Francisco');
const clss2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', clss2020);
const student2 = new StudentHolberton('John', 'Doe', clss2020);
const student3 = new StudentHolberton('Albert', 'Clinton', clss2019);
const student4 = new StudentHolberton('Donald', 'Bush', clss2019);
const student5 = new StudentHolberton('Jason', 'Sandler', clss2019);

const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
