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
        const { data } = req.body;
        console.log(data);
        const response = await instance.post("/database/connect/", {
          server: "124.53.4.95",
          username: "tnd",
          password: "tnd123!@#",
          database: "AdventureWorks2019",
          port: 31433,
          dbms: "mssql",
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
