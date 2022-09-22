import { Module } from "@nestjs/common";
import { PhotoModuleBase } from "./base/photo.module.base";
import { PhotoService } from "./photo.service";
import { PhotoController } from "./photo.controller";
import { PhotoResolver } from "./photo.resolver";

@Module({
  imports: [PhotoModuleBase],
  controllers: [PhotoController],
  providers: [PhotoService, PhotoResolver],
  exports: [PhotoService],
})
export class PhotoModule {}
