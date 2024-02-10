import { IConfig } from '@src/config/IConfig';

/**
 * @param
 */
let production: IConfig = {
    logPath: '@src/logs/',
    logLevel: 'error',
    logValue: 2,
    fileSize: 250
};

export default { production: production } as const;