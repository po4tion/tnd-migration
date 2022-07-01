import type { NextApiRequest, NextApiResponse } from "next";
import { instance } from "../../config";

type ResponseData = {
  readonly error: string;
};

async function asisPreview(
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
          selectSchema,
          selectTable,
        } = status;

        // const response = await instance.post("/database/tabledata/", {
        //   dbms: asisDbType,
        //   server: asisIpAddress,
        //   port: asisPort,
        //   database: asisDb,
        //   username: asisId,
        //   password: asisPassword,
        //   schema: selectSchema,
        //   table: selectTable,
        // });

        const response = await instance.post("/database/tabledata/", {
          dbms: "MSSQL",
          server: "124.53.4.95",
          port: 31433,
          database: "AdventureWorks2019",
          username: "tnd",
          password: "tnd123!@#",
          schema: status.selectSchema,
          table: status.selectTable,
        });

        res.status(200).json(response.data.data);
      } catch (err) {
        res.status(500).send({ error: "failed to fetch data" });
      }
      break;
    default:
      res.status(405).send({ error: "request method를 확인해주세요" });
      break;
  }
}

export default asisPreview;
