import * as winston from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';

const isDevEnv = process.env.NODE_ENV === 'development';
export const WINSTON_CONFIG = {
    level: 'debug',
    transports: [
      new winston.transports.Console({
        format: isDevEnv
          ? winston.format.combine(
              winston.format.timestamp(),
              nestWinstonModuleUtilities.format.nestLike('TODO-LOGGER', {
                colors: true,
                prettyPrint: true,
              }),
            )
          : winston.format.json(),
        handleExceptions: true,
      }),
    ],
    exitOnError: false,
  };