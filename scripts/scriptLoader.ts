/**
 * Created by jwshin on 1/14/2015.
 */
///<reference path="../typings/tsd.d.ts" />
"use strict";

var scriptFiles = [
    "service/panelService",
    "service/resizeService",

    "controller/indexCtrl",
    "controller/panelContainerCtrl"
];
module Application {
    export class ScriptLoader {
        private scripts = scriptFiles;
        constructor(scripts?:string[]) {
            if(scripts) {
                this.scripts = scripts;
            }
        }
        load(callback) {
            var deferred = [];
            angular.forEach(this.scripts, script => {
                deferred.push($.getScript("scripts/"+script+".js"));
            });
            $.when.apply(window, deferred).done(callback);
        }
    }
}

