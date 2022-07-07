import { MethodLayout } from "../layout";
import StatusTable from "./StatusTable";
import StatusHeader from "./StatusHeader";
import Connect from "./Connect";

function Status({ type }: { type: string }) {
  return (
    <MethodLayout>
      <StatusHeader type={type} />
      {/* {type === "ASIS" ? <StatusAsis /> : <StatusFormTobe />} */}
      <StatusTable analysis={type} />
      <Connect type={type} />
    </MethodLayout>
  );
}

export default Status;
