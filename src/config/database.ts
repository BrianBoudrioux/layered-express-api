import {getConnectionManager} from "typeorm";
const ormConfig = require('../../ormconfig');

const connectionManager = getConnectionManager();

const db = connectionManager.create(ormConfig);

export default db;