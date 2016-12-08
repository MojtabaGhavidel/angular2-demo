import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TaskService{


  constructor(private http:Http){
        console.log('Task Service Initialized...');
    }

  getTasks(){
    console.log('get tasks works');
    return this.http.get('http://localhost:3001/tasks')
      .map(res => res.json());
  }


  /*
  getPublicDeals() {
    return this.http
      .get(this.publicDealsUrl)
      .toPromise()
      .then(response=>response.json() as Deal[])
      .catch(this.handleError);
  }
  
  */
  /*
    addTask(newTask){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }

*/
    /*
    deleteTask(id){
        return this.http.delete('/api/task/'+id)
            .map(res => res.json());
    }
    
    updateStatus(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }
    */
}