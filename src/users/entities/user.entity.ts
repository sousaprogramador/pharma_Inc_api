import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Exclude, Transform } from 'class-transformer';
import { Status } from '../enum/status.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Transform(({ obj }) => obj._id.toString(), { toClassOnly: true })
  @Prop()
  loginUuid: string;

  @Prop()
  gender: string;

  @Prop()
  nameTitle: string;

  @Prop()
  nameFirst: string;

  @Prop()
  nameLast: string;

  @Prop()
  locationStreetNumber: number;

  @Prop()
  locationStreetName: string;

  @Prop()
  locationCity: string;

  @Prop()
  locationState: string;

  @Prop()
  locationCountry: string;

  @Prop()
  locationPostcode: string;

  @Prop()
  locationCoordinatesLatitude: string;

  @Prop()
  locationCoordinatesLongitude: string;

  @Prop()
  locationTimezoneOffset: string;

  @Prop()
  locationTimezoneDescription: string;

  @Prop()
  email: string;

  @Prop()
  loginUsername: string;

  @Prop()
  @Exclude()
  loginPassword: string;

  @Prop()
  loginSalt: string;

  @Prop()
  loginMd5: string;

  @Prop()
  loginSha1: string;

  @Prop()
  loginSha256: string;

  @Prop()
  dobDate: Date;

  @Prop()
  dobAge: number;

  @Prop()
  registeredDate: Date;

  @Prop()
  registeredAge: number;

  @Prop()
  phone: string;

  @Prop()
  cell: string;

  @Prop()
  idName: string;

  @Prop()
  idValue: string;

  @Prop()
  pictureLarge: string;

  @Prop()
  pictureMedium: string;

  @Prop()
  pictureThumbnail: string;

  @Prop()
  nat: string;

  @Prop()
  imported_t: Date;

  @Prop()
  status: Status;
}

export const UserSchema = SchemaFactory.createForClass(User);
