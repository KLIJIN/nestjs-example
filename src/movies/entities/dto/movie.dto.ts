import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovie {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: true })
  readonly genres: string[];
}

export class UpdateMovie {
  @IsOptional()
  @IsString()
  readonly title?: string;
  @IsOptional()
  @IsNumber()
  readonly year?: number;
  @IsOptional()
  @IsString({ each: true })
  readonly genres?: string[];
}
