import * as graphql from "@nestjs/graphql";
import { PersonalPageResolverBase } from "./base/personalPage.resolver.base";
import { PersonalPage } from "./base/PersonalPage";
import { PersonalPageService } from "./personalPage.service";

@graphql.Resolver(() => PersonalPage)
export class PersonalPageResolver extends PersonalPageResolverBase {
  constructor(protected readonly service: PersonalPageService) {
    super(service);
  }
}
