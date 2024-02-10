import { IConfig } from '@src/config/IConfig';

/**
 * @param
 */
let development: IConfig = {
    logPath: '@src/logs/',
    logLevel: 'info',
    logValue: 5,
    fileSize: 250
};

export default { development: development };