import { TransportationLoggerMiddleware } from './transportation-logger.middleware';

describe('TransportationLoggerMiddleware', () => {
  it('should be defined', () => {
    expect(new TransportationLoggerMiddleware()).toBeDefined();
  });
});
