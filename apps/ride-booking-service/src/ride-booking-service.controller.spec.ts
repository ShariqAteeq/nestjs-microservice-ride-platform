import { Test, TestingModule } from '@nestjs/testing';
import { RideBookingServiceController } from './ride-booking-service.controller';
import { RideBookingServiceService } from './ride-booking-service.service';

describe('RideBookingServiceController', () => {
  let rideBookingServiceController: RideBookingServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RideBookingServiceController],
      providers: [RideBookingServiceService],
    }).compile();

    rideBookingServiceController = app.get<RideBookingServiceController>(RideBookingServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(rideBookingServiceController.getHello()).toBe('Hello World!');
    });
  });
});
