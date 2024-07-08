/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumReportReportType } from "./EnumReportReportType";
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class ReportCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumReportReportType,
  })
  @IsEnum(EnumReportReportType)
  @IsOptional()
  @Field(() => EnumReportReportType, {
    nullable: true,
  })
  reportType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reportName?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrganizationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrganizationWhereUniqueInput)
  @IsOptional()
  @Field(() => OrganizationWhereUniqueInput, {
    nullable: true,
  })
  organization?: OrganizationWhereUniqueInput | null;
}

export { ReportCreateInput as ReportCreateInput };
