/**
 * Created by jwshin on 1/14/2015.
 */

///<reference path="_app.ts"/>

var appModule = angular.module("app",[]);

new Application.ScriptLoader().load( function() {

        appModule
            .service("ResizeService", [()=>new Application.Services.ResizeService()])
            .service("PanelService", ["$rootScope", "$log", ($rootScope, $log) => new Application.Services.PanelService($rootScope, $log)])
            .controller("IndexCtrl", ["$scope", ($scope)=>new Application.Controllers.IndexCtrl($scope)])
            .controller("PanelContainerCtrl",
            ["$rootScope", "$scope", "$element", "$log", "ResizeService", ($rootScope, $scope, $element, $log, ResizeService) =>
                new Application.Controllers.PanelContainerCtrl($rootScope, $scope, $element, $log, ResizeService)])
            .controller("ToolbarCtrl",
            ["$rootScope", "$scope", "PanelService", ($rootScope, $scope, PanelService) =>
                new Application.Controllers.ToolbarCtrl($rootScope, $scope, PanelService)])
            .directive("ToolbarDrtv", ["$window", "ResizeService", ($window, ResizeService) =>
                new Application.Directives.ToolbarDirective($window, ResizeService)])
            .directive("PanelContainerDrtv", [()=>new Application.Directives.PanelContainerDirective()]);

    angular.bootstrap(document.body, ['app']);
});