import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class PurchasesService {
  // eslint-disable-next-line prettier/prettier
  constructor(private prisma: PrismaService) { }

  listAllPurchases() {
    return this.prisma.purchase.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
