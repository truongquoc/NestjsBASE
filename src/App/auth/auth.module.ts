import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Role } from 'src/entity/role.entity';
import { AuthController } from 'src/App/auth/auth.controller';
import { AuthServices } from 'src/App/auth/auth.service';
import { PermissionsEntity } from 'src/entity/permission.entity';
import { JWTStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, PermissionsEntity]),
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthServices, JWTStrategy],
  exports: [AuthServices],
})
export class AuthModule {}
