import 'dotenv/config'

export default {
  mongoUrl: process.env.MONGO_URL || `${process.env.STRING_DB_CONNECT}`,
  port: process.env.PORT || 3000
}
