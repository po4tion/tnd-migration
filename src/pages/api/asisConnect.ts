import type { NextApiRequest, NextApiResponse } from "next";
import { outer } from "../../config";

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
        const response = await outer.post("/database/connect/");

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
