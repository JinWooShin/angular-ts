/**
 * Created by jwshin on 1/12/2015.
 */
///<reference path="../typings/tsd.d.ts" />

///<reference path="service/resizeService.ts" />

var appModule = angular.module("app",[]);
appModule.service("ResizeService", [new Application.Services.ResizeService()]);
