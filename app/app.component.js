"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
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
    AppComponent.prototype.setupLSConn = function () {
        this.LSClient = new LightstreamerClient("http://localhost:8080", "DEMO");
        this.LSClient.addListener({
            onServerError: function (errorCode, errorMessage) {
                console.log(errorMessage);
            },
            onStatusChange: function (status) {
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
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map