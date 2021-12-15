import { environment } from "src/environments/environment";

export abstract class BaseService {
  protected abstract getApi(): string;

  protected getFullUrl(): string {
    return `${environment.serverUrl}/${this.getApi()}`;
  }
}
