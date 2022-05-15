/* *
 * true: disabled
 */

export const handleCheckBtn = (
  schema: string | null,
  table: string | null
): boolean => {
  const schemaLength = schema?.length;
  const tableLength = table?.length;

  if (schemaLength && tableLength) {
    return false;
  }

  return true;
};
