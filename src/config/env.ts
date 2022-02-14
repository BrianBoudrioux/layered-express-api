import dotenv from 'dotenv';
dotenv.config();

const config = {
    app_port: process.env.APP_PORT || "3000",
    db_port: Number(process.env.DB_PORT) || 3306,
    db_name: process.env.DB_NAME || "bookstore",
    db_user: process.env.DB_USER || "root",
    db_host: process.env.DB_HOST || "localhost",
    db_password: process.env.DB_PASSWORD || "root",
    jwt_secret: process.env.JWT_SECRET || "blabla"
}

export default config;