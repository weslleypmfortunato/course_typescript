import mongoose from "mongoose";
import config from 'config'
import Logger from "../config/logger";
import 'dotenv/config'

async function connect() {
  const dbUri = config.get<string>("dbUri")

  try {
    await mongoose.connect(dbUri)
    Logger.info("Connected to Database!")
  }catch (error) {
    Logger.error("Connection failure")
    Logger.error(`Error: ${error}`)
    process.exit(1)
  }
}

export default connect



// const connectDB = async () => {
//   const connection = await mongoose.connect(process.env.MONGO_URI as string)
//   console.log('Connected to mongo! Database: ', connection.connections[0].name)
// }

// export default connectDB