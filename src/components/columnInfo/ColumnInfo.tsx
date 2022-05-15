import { MethodLayout } from "../layout";
import ColumnForm from "./ColumnForm";
import ColumnFormTobe from "./ColumnFormTobe";
import ColumnInfoHeader from "./ColumnInfoHeader";

function ColumnInfo({ type }: { type: string }) {
  return (
    <MethodLayout>
      <ColumnInfoHeader />
      {type === "ASIS" ? <ColumnForm /> : <ColumnFormTobe />}
    </MethodLayout>
  );
}

export default ColumnInfo;
