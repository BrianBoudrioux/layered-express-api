import csurf from 'csurf';

const csrfMiddleware = csurf({cookie: true});

export default csrfMiddleware;