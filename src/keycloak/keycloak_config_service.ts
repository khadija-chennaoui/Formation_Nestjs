import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { KeycloakConnectOptionsFactory,KeycloakConnectOptions ,TokenValidation} from 'nest-keycloak-connect'

Injectable()
export class keycloakConfigService implements KeycloakConnectOptionsFactory {
 constructor(private readonly configService :ConfigService ){}
 createKeycloakConnectOptions(): KeycloakConnectOptions  {
  return {
    authServerUrl: process.env.KEYCLOAK_AUTH_URL,
    realm : process.env.KEYCLOAK_REALM,
    clientId : process.env.KEYCLOAK_CLIENT_ID,
    secret : process.env.KEYCLOAK_CLIENT_SECRET,
    realmPublicKey: process.env.KEYCLOAK_REALM_PUBLIC_KEY,
    useNestLogger:false,
    tokenValidation:TokenValidation.OFFLINE,
  }   
 }
}