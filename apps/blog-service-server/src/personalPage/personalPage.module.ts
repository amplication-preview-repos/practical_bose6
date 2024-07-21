import { Module } from "@nestjs/common";
import { PersonalPageModuleBase } from "./base/personalPage.module.base";
import { PersonalPageService } from "./personalPage.service";
import { PersonalPageController } from "./personalPage.controller";
import { PersonalPageResolver } from "./personalPage.resolver";

@Module({
  imports: [PersonalPageModuleBase],
  controllers: [PersonalPageController],
  providers: [PersonalPageService, PersonalPageResolver],
  exports: [PersonalPageService],
})
export class PersonalPageModule {}
