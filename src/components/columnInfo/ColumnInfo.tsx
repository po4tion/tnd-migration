import { MethodLayout } from "../layout";
import ColumnForm from "./ColumnForm";
import ColumnInfoHeader from "./ColumnInfoHeader";

function Preview() {
  return (
    <MethodLayout>
      <ColumnInfoHeader />
      <ColumnForm />
    </MethodLayout>
  );
}

export default Preview;
