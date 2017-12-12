# @ngx-resource/ngx-http-legacy

It's implementation of `ResourceHandler` which uses Angular `Http` from `@angular/http`

## How to install and setup it
```bash
& npm i --save @ngx-resource/core @ngx-resource/ngx-http-legacy
```

In you app module
```typescript

// AoT requires an exported function for factories
export function myHandlerFactory(http: Http) {
    return new MyResourceHandler(http);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Default ResourceHandler uses class `ResourceHandlerHttp`
    ResourceModule.forRoot()
    
    // Or set you own handler
    //ResourceModule.forRoot({
    //  handler: { provide: ResourceHandler, useFactory: (myHandlerFactory), deps: [Http] }
    //})
  ],
  declarations: [...],
  bootstrap: [...],
  entryComponents: [...],
  providers: [...]
})
export class AppModule {
}
```

## [Docs about @ngx-resource/core](https://github.com/troyanskiy/ngx-resource-core/blob/master/README.md)
