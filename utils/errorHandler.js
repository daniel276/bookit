class ErrorHandler extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.constructor.prototype.__proto__ = Error.prototype

        // Error.captureStackTrace(this, this.constructor);
    }

}

export default ErrorHandler;