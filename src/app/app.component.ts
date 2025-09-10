import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isEqualsGreaterThanToken } from 'typescript';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = "";
  taskList:{id:number ,task:string}[] = [];

  addTask()
  {
    this.taskList.push({id:this.taskList.length+1 , task:this.task});
    console.log(this.taskList);
    
  }

  deleteTask(taskID: number)
  {
   this.taskList =  this.taskList.filter((item)=>item.id!=taskID);
  }
}
