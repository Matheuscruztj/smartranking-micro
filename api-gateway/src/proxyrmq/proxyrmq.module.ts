import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientProxySmartRanking } from './client-proxy';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [ClientProxySmartRanking],
  exports: [ClientProxySmartRanking],
})
export class ProxyRMQModule {}
