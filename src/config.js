import dotenv from 'dotenv'

dotenv.config()

const mongo = {
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    url: process.env.MONGO_URL,
    port: process.env.MONGO_PORT,
    db_auth: process.env.MONGO_DB_AUTH,
    db_name: process.env.MONGO_DB_NAME,
}

const rpc = {
    url: process.env.BCH_NODE_URL,
    username: process.env.BCH_NODE_USERNAME,
    password: process.env.BCH_NODE_PASSWORD,
}

export  {
    mongo,
    rpc
}
