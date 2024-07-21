/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TagService } from "../tag.service";
import { TagCreateInput } from "./TagCreateInput";
import { Tag } from "./Tag";
import { Post } from "../../post/base/Post";
import { TagFindManyArgs } from "./TagFindManyArgs";
import { TagWhereUniqueInput } from "./TagWhereUniqueInput";
import { TagUpdateInput } from "./TagUpdateInput";

export class TagControllerBase {
  constructor(protected readonly service: TagService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tag })
  async createTag(@common.Body() data: TagCreateInput): Promise<Tag> {
    return await this.service.createTag({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Tag] })
  @ApiNestedQuery(TagFindManyArgs)
  async tags(@common.Req() request: Request): Promise<Tag[]> {
    const args = plainToClass(TagFindManyArgs, request.query);
    return this.service.tags({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async tag(@common.Param() params: TagWhereUniqueInput): Promise<Tag | null> {
    const result = await this.service.tag({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTag(
    @common.Param() params: TagWhereUniqueInput,
    @common.Body() data: TagUpdateInput
  ): Promise<Tag | null> {
    try {
      return await this.service.updateTag({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Tag })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTag(
    @common.Param() params: TagWhereUniqueInput
  ): Promise<Tag | null> {
    try {
      return await this.service.deleteTag({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
