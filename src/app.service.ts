import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly http: HttpService) {}
  async getAbstractContent(id: number, type: string) {
    const path = 'https://' + type + '.ncbi.nlm.nih.gov/' + id;
    console.log('call');
    return 'call';
    //return this.http.get<string>(path).pipe(map((r) => r.data));
  }
}
