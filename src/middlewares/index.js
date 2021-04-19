// middlewares dépendencies
import {jwtService} from '../libs';

// middlewares
import AuthMiddleware from './auth';

// initialize middlewares with dependencies injection
const auth = new AuthMiddleware(jwtService);


// export all middlewares
export {auth};