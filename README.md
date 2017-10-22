# rest-ngx-http

It's implementation of `RestHandler` which uses Angular `Http` from `@angular/http`

## How to install and setup it
```bash
& npm i --save rest-core rest-ngx-http
```

In you app module
```typescript

// AoT requires an exported function for factories
export function myHandlerFactory(http: Http) {
    return new MyRestHandler(http);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // Default RestHandler uses class `RestHandlerHttp`
    RestModule.forRoot()
    
    // Or set you own handler
    //RestModule.forRoot({
    //  handler: { provide: RestHandler, useFactory: (myHandlerFactory), deps: [Http] }
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

## [Docs about rest-core](https://github.com/troyanskiy/rest-core/blob/master/README.md)
# rest-ngx-http
