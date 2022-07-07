export interface asisConnectType {
  readonly asisDbType: string | null;
  readonly asisIpAddress: string | null;
  readonly asisPort: string | null;
  readonly asisDb: string | null;
  readonly asisId: string | null;
  readonly asisPassword: string | null;
}

export interface asisPreviewType extends asisConnectType {
  readonly selectSchema: string | null;
  readonly selectTable: string | null;
}

export interface connectType {
  dbType: string | null;
  ip: string | null;
  port: string | null;
  db: string | null;
  id: string | null;
  pw: string | null;
}
