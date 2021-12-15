import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export abstract class BaseService<T> {

  constructor(protected readonly http: HttpClient) {
  }

  protected abstract getApi(): string;

  protected getFullUrl(): string {
    return `${environment.serverUrl}/${this.getApi()}`;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.getFullUrl());
  }

  save(t: T): Observable<T> {
    return this.http.post<T>(this.getFullUrl(), t);
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${this.getFullUrl()}/${id}`);
  }
}
