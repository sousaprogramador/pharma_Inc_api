import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsHash,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { UsersConstants } from '../users.constants';
import { Status } from '../enum/status.enum';

export class CreateUserDto {
  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOGINUUID_EXAMPLE,
  })
  @IsUUID()
  loginUuid: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_GENDER_EXAMPLE,
  })
  @IsString()
  gender: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_NAMETITLE_EXAMPLE,
  })
  @IsString()
  nameTitle: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_NAMEFIRST_EXAMPLE,
  })
  @IsString()
  nameFirst: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_NAMELAST_EXAMPLE,
  })
  @IsString()
  nameLast: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOCATIONSTREETNUMBER_EXAMPLE,
  })
  @IsNumber()
  locationStreetNumber: number;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOCATIONSTREETNAME_EXAMPLE,
  })
  @IsString()
  locationStreetName: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOCATIONCITY_EXAMPLE,
  })
  @IsString()
  locationCity: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOCATIONSTATE_EXAMPLE,
  })
  @IsString()
  locationState: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOCATIONCOUNTRY_EXAMPLE,
  })
  @IsString()
  locationCountry: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOCATIONPOSTCODE_EXAMPLE,
  })
  @IsString()
  locationPostcode: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOCATIONCOORDINATESLATITUDE_EXAMPLE,
  })
  @IsString()
  locationCoordinatesLatitude: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOCATIONCOORDINATESLONGITUDE_EXAMPLE,
  })
  @IsString()
  locationCoordinatesLongitude: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOCATIONTIMEZONEOFFSET_EXAMPLE,
  })
  @IsString()
  locationTimezoneOffset: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOCATIONTIMEZONEDESCRIPTION_EXAMPLE,
  })
  @IsString()
  locationTimezoneDescription: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_EMAIL_EXAMPLE,
  })
  @IsString()
  email: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOGINUSERNAME_EXAMPLE,
  })
  @IsString()
  loginUsername: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOGINPASSWORD_EXAMPLE,
  })
  @IsString()
  loginPassword: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOGINSALT_EXAMPLE,
  })
  @IsString()
  loginSalt: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOGINMD5_EXAMPLE,
  })
  @IsHash('md5')
  loginMd5: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOGINSHA1_EXAMPLE,
  })
  @IsHash('sha1')
  loginSha1: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_LOGINSHA256_EXAMPLE,
  })
  @IsHash('sha256')
  loginSha256: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_DOBDATE_EXAMPLE,
  })
  @IsDate()
  dobDate: Date;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_DOBAGE_EXAMPLE,
  })
  @IsNumber()
  dobAge: number;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_REGISTEREDDATE_EXAMPLE,
  })
  @IsDate()
  registeredDate: Date;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_REGISTEREDAGE_EXAMPLE,
  })
  @IsNumber()
  registeredAge: number;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_PHONE_EXAMPLE,
  })
  @IsString()
  phone: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_CELL_EXAMPLE,
  })
  @IsString()
  cell: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_IDNAME_EXAMPLE,
  })
  @IsString()
  @IsOptional()
  idName: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_IDVALUE_EXAMPLE,
  })
  @IsString()
  @IsOptional()
  idValue: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_PICTURELARGE_EXAMPLE,
  })
  @IsString()
  pictureLarge: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_PICTUREMEDIUM_EXAMPLE,
  })
  @IsString()
  pictureMedium: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_PICTURETHUMBNAIL_EXAMPLE,
  })
  @IsString()
  pictureThumbnail: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_NAT_EXAMPLE,
  })
  @IsString()
  nat: string;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_IMPORTED_T_EXAMPLE,
  })
  @IsDate()
  imported_t: Date;

  @ApiProperty({
    type: 'string',
    example: UsersConstants.USER_STATUS_EXAMPLE,
  })
  @IsString()
  status: Status;
}
