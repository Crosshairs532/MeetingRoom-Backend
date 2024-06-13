/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import path from "path";
require("dotenv").config({ path: path.join(process.cwd(), ".env") });

export default {
  db_url: process.env.db_url,
  port: process.env.port,
  secret:process.env.secret
};
