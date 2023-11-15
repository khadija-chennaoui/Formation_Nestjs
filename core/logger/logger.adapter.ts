import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { Inject, Injectable } from '@nestjs/common';
import LoggerPort from './logger.port';
@Injectable()
export default class LoggerAdapter implements LoggerPort {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  info(message: string, context: string, metaData?: any): void {
    if (metaData) {
      this.logger.info(message, { metaData: { ...metaData }, context });
    } else {
      this.logger.info(message, { context });
    }
  }

  warn(message: string, context: string, metaData?: any): void {
    if (metaData) {
      this.logger.warn(message, { metaData: { ...metaData }, context });
    } else {
      this.logger.warn(message, { context });
    }
  }

  error(error: Error, context: string, metaData?: any): void {
    if (metaData) {
      this.logger.debug(error.message, {
        name: error.name,
        trace: error.stack,
        context,
        metaData: { ...metaData },
      });
      this.logger.error(error.message, {
        name: error.name,
        trace: error.stack,
        context,
      });
      this.logger.error(error.message, { ...error, context });
    } else {
        this.logger.debug(error.message, {
          name: error.name,
          trace: error.stack,
          context,
        });
        this.logger.error(error.message, { ...error, context });
      }
  }
}
