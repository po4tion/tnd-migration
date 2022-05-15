export interface asisColumnType {
  readonly COLUMN_ID: string;
  readonly COLUMN_NAME: string;
  readonly COLUMN_NO: number;
  readonly COL_TYPE: string;
  readonly FK: string;
  readonly NULL_YN: string;
  readonly PK: string;
  readonly UQ: string;
  readonly referenced_column_name: string | null;
  readonly referenced_object: string | null;
}
