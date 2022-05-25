/* eslint-disable @typescript-eslint/no-explicit-any */
export const objectDepth = (column: any, table: string) => {
  const firstKey = Object.keys(column?.["object_id"])[0];
  const secondKey = Object.keys(
    column?.["object_id"][firstKey]["TABLE_ID"][table]["TABLE_NAME"]
  )[0];

  return column["object_id"][firstKey]["TABLE_ID"][table]["TABLE_NAME"][
    secondKey
  ];
};

