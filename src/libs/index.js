// config
import config from '../config/env';

// services
import MailerService from './mailer';
import JwtService from './jwt';

// services dependencies
import nodemailer from "nodemailer";
import jwt from 'jsonwebtoken';

// Instanciate all your singleton service with dépendencies injection
const mailerService = new MailerService(nodemailer);
const jwtService = new JwtService(jwt, config.jwt_secret);


// export all the libs services
export {mailerService, jwtService};