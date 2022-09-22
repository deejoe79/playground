import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PhotoService } from "./photo.service";
import { PhotoControllerBase } from "./base/photo.controller.base";

@swagger.ApiTags("photos")
@common.Controller("photos")
export class PhotoController extends PhotoControllerBase {
  constructor(
    protected readonly service: PhotoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
