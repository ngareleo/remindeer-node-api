require("dotenv").config();

const env = {
  port: 3000,
  db: process.env.DB_URL || "",
};

export default env;
