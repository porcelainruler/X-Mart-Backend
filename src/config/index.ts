import Development from '@src/config/development';
import Production from '@src/config/production';
import { IConfig } from '@src/config/IConfig';


/**
 * Config object
 */
let init: boolean = false;
let config: IConfig;
let environment: string = process.env.NODE_ENV || 'production';


/**
 * Get config object
 */
const getConfig = (): IConfig => {
    if (!init) {
        init = true;
        switch (environment) {
            case 'development':
                config = Development.development;
                break;
            case 'production':
                config = Production.production;
                break;
            default:
                config = Development.development;
                break;
        }
    }
    return config;
};

export default getConfig() as IConfig;