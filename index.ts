import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { Http } from '@angular/http';
import { ResourceHandler } from '@ngx-resource/core';
import { ResourceHandlerHttp } from './src/ResourceHandlerHttp';

export * from './src/ResourceHandlerHttp';

export interface IResourceModuleConfig {
  handler?: Provider;
}

@NgModule()
export class ResourceModule {

  /**
   * For root
   * @param {IResourceModuleConfig} config
   * @return {ModuleWithProviders}
   */
  static forRoot(config: IResourceModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: ResourceModule,
      providers: [
        config.handler || {provide: ResourceHandler, useClass: ResourceHandlerHttp, deps: [Http]}
      ]
    };
  }

  /**
   * For child
   * @param {IResourceModuleConfig} config
   * @return {ModuleWithProviders}
   */
  static forChild(config: IResourceModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: ResourceModule,
      providers: [
        config.handler || {provide: ResourceHandler, useClass: ResourceHandlerHttp, deps: [Http]}
      ]
    };
  }
}
