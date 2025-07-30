import { Module } from '@nestjs/common';
import { RideBookingServiceController } from './ride-booking-service.controller';
import { RideBookingServiceService } from './ride-booking-service.service';

@Module({
  imports: [],
  controllers: [RideBookingServiceController],
  providers: [RideBookingServiceService],
})
export class RideBookingServiceModule {}
