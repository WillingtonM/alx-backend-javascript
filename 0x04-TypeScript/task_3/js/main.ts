/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const nRowID: RowID = CRUD.insertRow(row);
const updtRow: RowElement = {...row, age: 23}

CRUD.updatedRow(nRowID, updtRow);

CRUD.deleteRow(nRowID);
