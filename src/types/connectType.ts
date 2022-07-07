export interface connectType {
  dbType: string | null;
  ip: string | null;
  port: string | null;
  db: string | null;
  id: string | null;
  pw: string | null;
}

export interface previewType extends connectType {
  schema: string | null;
  table: string | null;
}
