import * as winston from 'winston';
import 'winston-daily-rotate-file';
import * as Transport from 'winston-transport';
import Config from '@src/config';

interface loggerConfig {
    level: string;
    format: winston.Logform.Format;
    transports: Array<Transport>;
    exitOnError: boolean;
}

const loggerConf: loggerConfig = {
    level: Config.logLevel,
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.DailyRotateFile({
            filename: 'application-%DATE%.log',
            dirname: `${Config.logPath}`,
            level: 'info',
            handleExceptions: true,
            json: false,
            zippedArchive: true,
            maxSize: `${Config.fileSize}m`,
            maxFiles: '14d',
            datePattern: 'YYYY-MM-DD',
        })
    ],
    exitOnError: false
};

let isInit: boolean = false;
let logger: winston.Logger;

function getLogger (): winston.Logger {
    if (!isInit) {
        logger = winston.createLogger(loggerConf);
        isInit = true;
    }
    return logger;
}
winston.createLogger(loggerConf);

export default getLogger() as winston.Logger;