import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGistDto {
  // @IsString()
  // @IsNotEmpty()
  title: string;

  // @IsString()
  // @IsNotEmpty()
  codeBlock: string;
}
