import { MethodLayout } from "../layout";
import StatusFormAsis from "./StatusFormAsis";
import StatusAnnouncement from "./StatusAnnouncement";
import StatusHeader from "./StatusHeader";
import ConnectButton from "./ConnectButton";
import StatusFormTobe from "./StatusFormTobe";

function Status({ type }: { type: string }) {
  return (
    <MethodLayout>
      <StatusHeader type={type} />
      <StatusAnnouncement />
      {type === "ASIS" ? <StatusFormAsis /> : <StatusFormTobe />}

      <StatusFormTobe />
      <ConnectButton type={type} />
    </MethodLayout>
  );
}

export default Status;
