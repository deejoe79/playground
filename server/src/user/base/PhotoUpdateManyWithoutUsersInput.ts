/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PhotoWhereUniqueInput } from "../../photo/base/PhotoWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class PhotoUpdateManyWithoutUsersInput {
  @Field(() => [PhotoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PhotoWhereUniqueInput],
  })
  connect?: Array<PhotoWhereUniqueInput>;

  @Field(() => [PhotoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PhotoWhereUniqueInput],
  })
  disconnect?: Array<PhotoWhereUniqueInput>;

  @Field(() => [PhotoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PhotoWhereUniqueInput],
  })
  set?: Array<PhotoWhereUniqueInput>;
}
export { PhotoUpdateManyWithoutUsersInput };
