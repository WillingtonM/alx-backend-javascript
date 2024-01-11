import { RowID, RowElement} from './interface'

export function updateRow(rowId: RowID, row: RowElement): RowID;

export function deletetRow(rowId: RowID): void;

export function insertRow(row: RowElement): number;
