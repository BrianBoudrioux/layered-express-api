class ApiError extends Error {
    public statusCode;
    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

export default ApiError;