import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { RepairsModule } from './repairs/repairs.module';
import { PosModule } from './pos/pos.module';
import { InventoryModule } from './inventory/inventory.module';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';
import { ReportsModule } from './reports/reports.module';
import { MarketingModule } from './marketing/marketing.module';
import { NotificationsModule } from './notifications/notifications.module';
import { IntegrationsModule } from './integrations/integrations.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',    // Type of database
    // host: 'us-east-1.aws.neon.tech',  // Host of the database
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1996",
    database: "neetechsDB",
    //entities: [__dirname + '/**/*.entity{.ts,.js}'],
    autoLoadEntities: true, // Automatically load entities
    synchronize: true,      // Set to false in production to avoid data loss
    //"extra": {
    //"ssl": "true"
  //},
  }),
  DashboardModule, RepairsModule, PosModule, InventoryModule, CustomersModule, EmployeesModule, ReportsModule, MarketingModule, NotificationsModule, IntegrationsModule, AuthModule, UsersModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
