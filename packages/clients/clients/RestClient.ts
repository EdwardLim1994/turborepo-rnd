import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import type { AxiosInstance } from "axios";

@Injectable()
export default class RestClient {
  private _domain?: string;
  private _instance: AxiosInstance;
  constructor(private readonly httpService: HttpService) {
    this._instance = this.httpService.axiosRef;
  }

  set domain(domain: string) {
    this._domain = domain;
  }

  public get(path: string) {
    return this._instance.get(`${this._domain}/${path}`);
  }
}
