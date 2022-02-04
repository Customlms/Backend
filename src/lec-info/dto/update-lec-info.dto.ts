import { PartialType } from '@nestjs/swagger';
import { CreateLecInfoDto } from './create-lec-info.dto';

export class UpdateLecInfoDto extends PartialType(CreateLecInfoDto) {}
