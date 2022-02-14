import {userRouter} from './User';
import {bookRouter} from './Book';

const routes = {
    '/users': userRouter,
    '/books': bookRouter
};

export default routes;