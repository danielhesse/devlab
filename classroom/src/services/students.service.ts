import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class StudentsService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) { }

  listAllStudents() {
    return this.prisma.student.findMany();
  }
}
