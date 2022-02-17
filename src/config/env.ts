import dotenv from 'dotenv';
dotenv.config();

const config = {
    app_port: process.env.APP_PORT || "3000",
    db_port: Number(process.env.TYPEORM_PORT) || 3306,
    db_name: process.env.TYPEORM_DATABASE || "bookstore",
    db_user: process.env.TYPEORM_USERNAME || "root",
    db_host: process.env.TYPEORM_HOST || "localhost",
    db_type: process.env.TYPEORM_CONNECTION || 'mysql',
    db_password: process.env.TYPEORM_PASSWORD || "root",
    jwt_secret: process.env.JWT_SECRET || "blabla"
}

export default config;