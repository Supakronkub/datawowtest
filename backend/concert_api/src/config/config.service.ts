import * as _ from 'config';
import { ConfigSchema } from './config.interface';

const config: ConfigSchema = {
    serverEndpoint: _.get('serverEndpoint'),
};

function updateConfig() {}

function getConfig() {
    return config;
}

export default { getConfig };
