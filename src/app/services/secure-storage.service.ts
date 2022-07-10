import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SecureStorageService {

  private key: string = 'MIICXQIBAAKBgQC9KRM0H2L4ej/qybGksDrdDjXS9umuU4GuPy+VUKlG6yek64xO' +
    'vK97XKvoLeSoRPRpBSFojLbCfJFsUxRlCmjdrxg48H7hq7FkHW12bXaXwg/B+Co2' +
    'CQYer9q+nBmKhYVP9v19gRiporaRbRh3gQnXotpYfPbiUMgRJYK9ZF1XIQIDAQAB' +
    'AoGAQk9p2fW+vhgs2+OEkJTurZtTpvbDiEbhyPGBfrhd/uxkY13nO5rNcVNVN/kO' +
    'lSZG/6G6ymm5j4gXen/NQHZbt/Adru2mLlr19Dga1lFDhxEMtAZBBZhjXHeEJOq0' +
    'tdH70kQwkHszAWcsZ6xqsQkdh/FwMjvxNfmpXwLc0bRHFKECQQDp2HMbBGHlX6Y5' +
    'PhMIMk/fkAW1AYZYfN+Dg7Xlr3IQkXgnUyvuduOcZ+NWMwHgMR9R+E0Naa3XnIPc' +
    'KfHbIQItAkEAzxTcSI0nCoiTGfjOE+ygQ81vV6w4Zhy/qjRw9RCRCfvAdIz13kbL' +
    'jLHG1xCiOZEO+cPlMPp/Kp55P601VoxlRQJBAIBEhf7PzJLwgFDtx6q7Tiym5zp9' +
    '958Z/9A3stKmBb8oy+tmJ7bJ59em9IAXwnOi/jcMJ9evm/ekln9xUoSL+pECQEWq' +
    'nvFJi3jfuZ1jNvE9Ci3FT1APgGnaAiEgw1+u0xyotXaAdbbx2kjbBioUTn9PbdpZ' +
    'LSHtJBsSdXgWrXsQgIECQQCqDTPc5RgCkiBlJfPXq0fSLNFylVbAFQGxcVSJWbcl' +
    '+A7se4LKOcD5ls24tQ14n9hJ3WdCR2nAIuP/oIoVsIYx';

  public getToken(token: string): string {
    return CryptoJS.AES.decrypt(token, this.key).toString(CryptoJS.enc.Utf8);
  }

  public setToken(token: string): string {
    return CryptoJS.AES.encrypt(token, this.key).toString();
  }
}
