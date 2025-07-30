import { NestFactory } from '@nestjs/core';
import { RideBookingServiceModule } from './ride-booking-service.module';

async function bootstrap() {
  const app = await NestFactory.create(RideBookingServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
