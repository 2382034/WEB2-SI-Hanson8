"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
class LoggerMiddleware {
    logger = new common_1.Logger(LoggerMiddleware.name);
    use(req, res, next) {
        switch (req.method) {
            case 'POST':
            case 'PUT':
                this.logger.log('LoggerMiddleware | Request [${req.method}] | Request Body ${JSON.stringify(req.body)}');
                break;
            case 'GET':
            case 'DELETE':
                this.logger.log('LoggerMiddleware | Request  [${req.method}]');
                break;
            default:
                this.logger.log('LoggerMiddleware | Request [${req.method}] default logging');
        }
        next();
    }
}
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.middleware.js.map