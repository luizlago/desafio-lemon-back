import dotenv from 'dotenv-safe'

dotenv.config()

const env = process.env.NODE_ENV
const port = process.env.PORT
const apiPath = process.env.API_PREFIX

export { env, port, apiPath }
