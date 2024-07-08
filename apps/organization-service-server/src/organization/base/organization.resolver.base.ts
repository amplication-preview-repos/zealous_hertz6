/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Organization } from "./Organization";
import { OrganizationCountArgs } from "./OrganizationCountArgs";
import { OrganizationFindManyArgs } from "./OrganizationFindManyArgs";
import { OrganizationFindUniqueArgs } from "./OrganizationFindUniqueArgs";
import { CreateOrganizationArgs } from "./CreateOrganizationArgs";
import { UpdateOrganizationArgs } from "./UpdateOrganizationArgs";
import { DeleteOrganizationArgs } from "./DeleteOrganizationArgs";
import { CommissionFindManyArgs } from "../../commission/base/CommissionFindManyArgs";
import { Commission } from "../../commission/base/Commission";
import { ReportFindManyArgs } from "../../report/base/ReportFindManyArgs";
import { Report } from "../../report/base/Report";
import { EmployeeFindManyArgs } from "../../employee/base/EmployeeFindManyArgs";
import { Employee } from "../../employee/base/Employee";
import { OrganizationService } from "../organization.service";
@graphql.Resolver(() => Organization)
export class OrganizationResolverBase {
  constructor(protected readonly service: OrganizationService) {}

  async _organizationsMeta(
    @graphql.Args() args: OrganizationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Organization])
  async organizations(
    @graphql.Args() args: OrganizationFindManyArgs
  ): Promise<Organization[]> {
    return this.service.organizations(args);
  }

  @graphql.Query(() => Organization, { nullable: true })
  async organization(
    @graphql.Args() args: OrganizationFindUniqueArgs
  ): Promise<Organization | null> {
    const result = await this.service.organization(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Organization)
  async createOrganization(
    @graphql.Args() args: CreateOrganizationArgs
  ): Promise<Organization> {
    return await this.service.createOrganization({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Organization)
  async updateOrganization(
    @graphql.Args() args: UpdateOrganizationArgs
  ): Promise<Organization | null> {
    try {
      return await this.service.updateOrganization({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Organization)
  async deleteOrganization(
    @graphql.Args() args: DeleteOrganizationArgs
  ): Promise<Organization | null> {
    try {
      return await this.service.deleteOrganization(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Commission], { name: "commissions" })
  async findCommissions(
    @graphql.Parent() parent: Organization,
    @graphql.Args() args: CommissionFindManyArgs
  ): Promise<Commission[]> {
    const results = await this.service.findCommissions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Report], { name: "reports" })
  async findReports(
    @graphql.Parent() parent: Organization,
    @graphql.Args() args: ReportFindManyArgs
  ): Promise<Report[]> {
    const results = await this.service.findReports(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Employee], { name: "employees" })
  async findEmployees(
    @graphql.Parent() parent: Organization,
    @graphql.Args() args: EmployeeFindManyArgs
  ): Promise<Employee[]> {
    const results = await this.service.findEmployees(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
