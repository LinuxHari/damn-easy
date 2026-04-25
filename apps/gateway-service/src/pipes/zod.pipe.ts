import { PipeTransform, BadRequestException } from '@nestjs/common';
import type { ZodObject } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodObject) {}

  transform<T>(value: T) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
