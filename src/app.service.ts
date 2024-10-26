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
    const svg = await QRCode.toString(url, {
      type: 'svg',
      errorCorrectionLevel: 'H',
      margin: 1,
      color: {
        dark: '#1a1a80',
        light: '#FFFFFF',
      },
    });

    return svg;
  }
}
