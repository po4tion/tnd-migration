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
        const { dbType, ip, port, db, id, pw, schema, table } = status;

        const response = await instance.post("/database/tabledata/", {
          dbms: dbType,
          server: ip,
          port: port,
          database: db,
          username: id,
          password: pw,
          schema: schema,
          table: table,
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
