import { Module } from "@nestjs/common";
import { AuthService } from "./AuthService";

@Module({
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule { }