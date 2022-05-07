import { MethodLayout } from "../layout";
import StatusFormASIS from "./StatusFormASIS";
import StatusAnnouncement from "./StatusAnnouncement";
import StatusHeader from "./StatusHeader";
import ConnectButton from "./ConnectButton";
import StatusFormTOBE from "./StatusFormTOBE";

function Status({ type }: { type: string }) {
  return (
    <MethodLayout>
      <StatusHeader type={type} />
      <StatusAnnouncement />
      {type === "ASIS" ? <StatusFormASIS /> : <StatusFormTOBE />}

      <ConnectButton type={type} />
    </MethodLayout>
  );
}

export default Status;
