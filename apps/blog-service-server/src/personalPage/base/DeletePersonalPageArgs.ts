/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PersonalPageWhereUniqueInput } from "./PersonalPageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeletePersonalPageArgs {
  @ApiProperty({
    required: true,
    type: () => PersonalPageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PersonalPageWhereUniqueInput)
  @Field(() => PersonalPageWhereUniqueInput, { nullable: false })
  where!: PersonalPageWhereUniqueInput;
}

export { DeletePersonalPageArgs as DeletePersonalPageArgs };
