import { MethodLayout } from "../layout";
import StatusAsis from "./StatusAsis";
import StatusHeader from "./StatusHeader";
import Connect from "./Connect";
import StatusFormTobe from "./StatusFormTobe";

function Status({ type }: { type: string }) {
  return (
    <MethodLayout>
      <StatusHeader type={type} />
      {type === "ASIS" ? <StatusAsis /> : <StatusFormTobe />}
      <Connect type={type} />
    </MethodLayout>
  );
}

export default Status;
