import { Component } from '@angular/core';
import { Task } from '../../models/task';

declare var LightstreamerClient: any;
declare var Subscription: any;

@Component({
  selector: 'my-task',
  templateUrl: 'app/pages/mytask/mytask.component.html',
  styleUrls: [
    'app/pages/mytask/mytask.component.css',
    'assets/css/photon.min.css']
})

export class MyTaskComponent {
  tasks: Task[];
  LSClient: any;
  subscription: any;

  constructor(){
    this.tasks = [
      {
        name: 'Task1',
        high: 10,
        medium: 12,
        low: 5
      },
      {
        name: 'Task2',
        high: 12,
        medium: 15,
        low: 15
      }
    ];
    this.setupLSConn();
  }

  setupLSConn() {
    this.LSClient = new LightstreamerClient("http://localhost:8080", "DEMO");

    this.LSClient.addListener({
      onServerError: (errorCode, errorMessage) => {
        console.log(errorMessage);
      },
      onStatusChange: (status) => {
        console.log(status);
      }
    });
    this.LSClient.connect();
    /*
    For subscription:
    this.subscription = new Subscription("MERGE", "", "");
    this.subscription.setDataAdapter("QUOTE_ADAPTER");
    this.subscription.addListener({
        onItemUpdate: (updateObject) => {
            var itemName = updateObject.getItemName();
            updateObject.forEachChangedField((fieldName, fieldPos, val) => {
                  var itemIndex = this.itemNames.indexOf(itemName);
                  var fieldIndex = this.fieldNames.indexOf(fieldName);
                  console.assert(fieldIndex != -1);
                  console.assert(itemIndex != -1);
                  this.stocks[itemIndex][fieldIndex] = val;
                  this.ref.detectChanges();
            });
        }
    });
    this.LSClient.subscribe(this.subscription);
    */
  }
}
