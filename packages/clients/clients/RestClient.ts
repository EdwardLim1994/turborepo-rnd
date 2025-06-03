import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

@Injectable()
export default class RestClient {
  private _domain?: string;
  private _config?: AxiosRequestConfig = {};
  private _instance: AxiosInstance;
  constructor(private readonly httpService: HttpService) {
    this._instance = this.httpService.axiosRef;
  }

  set domain(domain: string) {
    this._domain = domain;
  }

  set config(config: AxiosRequestConfig) {
    this._config = config;
  }

  public get(path: string) {
    return this._instance.get(`${this._domain}/${path}`, this._config);
  }

  public post(path: string, data: any) {
    return this._instance.post(`${this._domain}/${path}`, data, this._config);
  }

  public put(path: string, data: any) {
    return this._instance.put(`${this._domain}/${path}`, data, this._config);
  }

  public delete(path: string) {
    return this._instance.delete(`${this._domain}/${path}`, this._config);
  }
}
