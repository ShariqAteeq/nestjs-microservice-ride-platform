import { Controller, Get } from '@nestjs/common';
import { RideBookingServiceService } from './ride-booking-service.service';

@Controller()
export class RideBookingServiceController {
  constructor(private readonly rideBookingServiceService: RideBookingServiceService) {}

  @Get()
  getHello(): string {
    return this.rideBookingServiceService.getHello();
  }
}
