import express from 'express';
import Server from './src/config/server';
import config from './src/config/env';

import routes from './src/modules';

const application = new Server({express, routes});

application.listen(config.app_port);