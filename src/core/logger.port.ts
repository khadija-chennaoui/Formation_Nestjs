export default interface LoggerPort {
  info(message: string, context: string, metaData?: any): void;
  warn(message: string, context?: string, metaData?: any): void;
  error(error: Error, context: string, metaData?: any): void;
}
