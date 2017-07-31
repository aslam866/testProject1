import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';
import { IPerson } from "./person";


@Injectable()
export class PersonService {

   private actionUrl: string;
   private headers: Headers;
  constructor(private _http: Http) { 
    this.actionUrl='api/persons/';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

 public GetAll = (): Observable<IPerson[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <IPerson>response.json())
            .catch(this.handleError);
    }

    public Add = (personData: IPerson):Observable<IPerson> => {
        let toAdd = JSON.stringify(personData);
          console.log(toAdd);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .catch(this.handleError);
    }
      public Update = (personToUpdate): Observable<IPerson> => {
        return this._http.put(this.actionUrl + personToUpdate._id, JSON.stringify(personToUpdate), { headers: this.headers })
            .catch(this.handleError);
    }
  public Delete = (id: number): Observable<Response> => {
        return this._http.delete(this.actionUrl+id)
            .catch(this.handleError);
    }
  
   private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
   
}


