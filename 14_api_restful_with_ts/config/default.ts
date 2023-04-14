import 'dotenv/config'

export default {
  port: `${process.env.PORT}`,
  env: "development",
  dbUri: `${process.env.DB_URI}`
}

