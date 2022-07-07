import type { NextApiRequest, NextApiResponse } from "next";
import { instance } from "../../config";

type ResponseData = {
  readonly error: string;
};

async function asisConnect(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { status } = req.body;
        const {
          asisDbType,
          asisIpAddress,
          asisPort,
          asisDb,
          asisId,
          asisPassword,
        } = status;

        const response = await instance.post("/database/connect/", {
          dbms: asisDbType,
          server: asisIpAddress,
          port: asisPort,
          database: asisDb,
          username: asisId,
          password: asisPassword,
        });

        res.status(200).json(response.data);
      } catch (err) {
        res.status(500).send({ error: "failed to fetch data" });
      }
      break;
    default:
      res.status(405).send({ error: "request method를 확인해주세요" });
      break;
  }
}

export default asisConnect;
