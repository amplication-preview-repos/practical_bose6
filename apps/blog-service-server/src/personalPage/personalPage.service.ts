import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PersonalPageServiceBase } from "./base/personalPage.service.base";

@Injectable()
export class PersonalPageService extends PersonalPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
