import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PersonalPageService } from "./personalPage.service";
import { PersonalPageControllerBase } from "./base/personalPage.controller.base";

@swagger.ApiTags("personalPages")
@common.Controller("personalPages")
export class PersonalPageController extends PersonalPageControllerBase {
  constructor(protected readonly service: PersonalPageService) {
    super(service);
  }
}
