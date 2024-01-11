/**
 * Interface named Student that accepts following elements:
 * - firstName,
 * - lastName,
 * - age,
 * - location
 */

export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

/**
 * Create 2 students, & create array named studentsList
 * containing 2 variables
 */

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Jhb',
};

const student2: Student = {
  firstName: 'Alex',
  lastName: 'Sanchez',
  age: 29,
  location: 'Pretoria',
};

const studentsList: Array<Student> = [
  student1,
  student2,
];


/**
 * - Using Vanilla JS, render table & for each elements in array, append new row to table
 * - Each row should contain first name of student and location
 */

export const renderTable = (studentsList: Array<Student>): void =>  {
  // create tag for table 
  const tb = document.createElement('table');
  const hr = document.createElement('tr');
  tb.insertAdjacentElement('beforeend', hr);

  // header insertion
  hr.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  hr.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const stu of studentsList) {
    const stuRow = document.createElement('tr')
    stuRow.insertAdjacentHTML('beforeend', `<td>${stu.firstName}</td>`);
    stuRow.insertAdjacentHTML('beforeend', `<td>${stu.location}</td>`);
    tb.insertAdjacentElement('beforeend', stuRow);
  }

  document.body.insertAdjacentElement('beforeend', tb);
}

renderTable(studentsList);
