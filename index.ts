import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { RestHandler } from 'rest-core';
import { Http } from '@angular/http';
import { RestHandlerHttp } from './src/RestHandlerHttp';

export * from './src/RestHandlerHttp';
// export * from './src/RestHandlerHttpClient';

export interface IRestModuleConfig {
  handler?: Provider;
}

@NgModule()
export class RestModule {

  /**
   * For root
   * @param {IRestModuleConfig} config
   * @return {ModuleWithProviders}
   */
  static forRoot(config: IRestModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: RestModule,
      providers: [
        config.handler || {provide: RestHandler, useClass: RestHandlerHttp, deps: [Http]}
      ]
    };
  }

  /**
   * For child
   * @param {IRestModuleConfig} config
   * @return {ModuleWithProviders}
   */
  static forChild(config: IRestModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: RestModule,
      providers: [
        config.handler || {provide: RestHandler, useClass: RestHandlerHttp, deps: [Http]}
      ]
    };
  }
}
