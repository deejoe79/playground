import { Module } from "@nestjs/common";
import { CompanyModuleBase } from "./base/company.module.base";
import { CompanyService } from "./company.service";
import { CompanyController } from "./company.controller";
import { CompanyResolver } from "./company.resolver";

@Module({
  imports: [CompanyModuleBase],
  controllers: [CompanyController],
  providers: [CompanyService, CompanyResolver],
  exports: [CompanyService],
})
export class CompanyModule {}
