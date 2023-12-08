import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { options } from './config/configuration' ;
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { WinstonModule } from 'nest-winston';
import { WINSTON_CONFIG } from './config/winston.config';
import  LoggerAdapter  from './core/logger.adapter';
import { keycloakConfigService } from './keycloak/keycloak_config_service';
import { keycloadModule } from './keycloak/keycloak_module';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      useExisting: keycloakConfigService,
      imports : [keycloadModule]
    }),
    TypeOrmModule.forRoot(options),
    WinstonModule.forRoot(WINSTON_CONFIG),
    TasksModule,
    UsersModule,
    // LoggerAdapter,  //Please remove "LoggerAdapter" (including forwarded occurrences, if any) from all of the "imports" arrays.
    
  ],
  controllers: [AppController],
  providers: [AppService, LoggerAdapter],
})
export class AppModule {}
