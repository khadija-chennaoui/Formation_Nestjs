import { Module } from "@nestjs/common";
import { keycloakConfigService } from "./keycloak_config_service";
import { ConfigService } from "@nestjs/config";

@Module({
    providers:[keycloakConfigService,ConfigService],
    exports: [keycloakConfigService]
})
export class keycloadModule {}