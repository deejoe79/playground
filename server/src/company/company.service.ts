import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CompanyServiceBase } from "./base/company.service.base";

@Injectable()
export class CompanyService extends CompanyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
