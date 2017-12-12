import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response, ResponseContentType } from '@angular/http';
import { RequestArgs } from '@angular/http/src/interfaces';
import { Observable } from 'rxjs/Observable';
import {
  IResourceRequest, IResourceResponse, ResourceRequestMethod,
  ResourceResponseBodyType
} from '@ngx-resource/core';
import { ResourceHandlerAbstract } from './ResourceHandlerAbstract';

@Injectable()
export class ResourceHandlerHttp extends ResourceHandlerAbstract {

  constructor(private http: Http) {
    super();
  }

  protected request(request: any): Observable<any> {
    return this.http.request(request);
  }

  protected prepareRequest(req: IResourceRequest): Request {

    const options: RequestArgs = {
      url: req.url,
      body: req.body,
      withCredentials: req.withCredentials
    };

    switch (req.method) {

      case ResourceRequestMethod.Get:
        options.method = RequestMethod.Get;
        break;

      case ResourceRequestMethod.Post:
        options.method = RequestMethod.Post;
        break;

      case ResourceRequestMethod.Put:
        options.method = RequestMethod.Put;
        break;

      case ResourceRequestMethod.Delete:
        options.method = RequestMethod.Delete;
        break;

      case ResourceRequestMethod.Head:
        options.method = RequestMethod.Head;
        break;

      case ResourceRequestMethod.Options:
        options.method = RequestMethod.Options;
        break;

      case ResourceRequestMethod.Patch:
        options.method = RequestMethod.Patch;

    }

    switch (req.responseBodyType) {

      case ResourceResponseBodyType.Json:
        options.responseType = ResponseContentType.Json;
        break;

      case ResourceResponseBodyType.ArrayBuffer:
        options.responseType = ResponseContentType.ArrayBuffer;
        break;

      case ResourceResponseBodyType.Blob:
        options.responseType = ResponseContentType.Blob;
        break;

      default:
        options.responseType = ResponseContentType.Text;

    }

    if (req.headers) {
      options.headers = req.headers;
    }

    if (req.query) {
      options.params = req.query;
    }

    return new Request(options);

  }

  protected handleResponse(req: IResourceRequest, response: Response): IResourceResponse {

    let body: any;
    switch (req.responseBodyType) {

      case ResourceResponseBodyType.Json:
        body = response.json();
        break;

      case ResourceResponseBodyType.ArrayBuffer:
        body = response.arrayBuffer();
        break;

      case ResourceResponseBodyType.Blob:
        body = response.blob();
        break;

      default:
        body = response.text();

    }

    return {
      status: response.status,
      body,
      headers: response.headers.toJSON()
    };

  }

}

