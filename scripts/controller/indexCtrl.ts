/**
 * Created by jwshin on 1/14/2015.
 */

///<reference path="../../typings/tsd.d.ts" />

module Application.Controllers {

    interface IIndexScope extends ng.IScope{
        title: string;
    }

    export class IndexCtrl {
        scope: IIndexScope;
        constructor($scope:IIndexScope) {
            this.scope = $scope;
            this.scope.title = "Message from IndexCtrl";
        }

    }
}