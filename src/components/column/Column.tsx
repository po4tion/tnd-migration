import { MethodLayout } from "../layout";
import ColumnTable from "./ColumnTable";
import ColumnFormTobe from "./ColumnFormTobe";
import ColumnHeader from "./ColumnHeader";

function Column({ type }: { type: string }) {
  return (
    <MethodLayout>
      <ColumnHeader />
      {type === "ASIS" ? <ColumnTable /> : <ColumnFormTobe />}
    </MethodLayout>
  );
}

export default Column;
