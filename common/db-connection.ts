import { DataSource } from "typeorm";

const dbConnection = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'jovan',
    password: '09#b$A~P(U',
    database: 'Gym'
})

export default dbConnection;