import { environment } from "src/environments/environment";

export class AppConstant {
  static ENABLE_MOCK = true;

  static getEnvUrl(): string {
    return AppConstant.ENABLE_MOCK ? '/assets/json' : environment.serverUrl;
  }
}
