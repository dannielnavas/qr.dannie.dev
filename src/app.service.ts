import { ForbiddenException, Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async generateQrCode(url: string, key: string): Promise<string> {
    if (key !== process.env.KEY) {
      throw new ForbiddenException('Invalid key');
    }
    const qrCode = await QRCode.toString(url, {
      type: 'utf8',
      width: 600,
      errorCorrectionLevel: 'H',
    });

    return qrCode;
  }
}
