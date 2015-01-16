/**
 * Created by jwshin on 1/14/2015.
 */

///<reference path="../../typings/tsd.d.ts" />

module Application.Controllers {

    interface IIndexScope extends ng.IScope{
        title: string;
        message: string;
        panels: any[];
        vm: any;
    }

    export class IndexCtrl {
        scope: IIndexScope;

        message:string;
        constructor($scope:IIndexScope) {
            this.scope = $scope;
            this.scope.title = "Message from IndexCtrl";
            this.scope.message = "TEST";
            this.scope.panels = [{title:"Panel 1"}, {title:"Panel 2"}];
            this.scope.vm=this;
        }
        public showMessage() {
            return this.message;
        }


    }
}