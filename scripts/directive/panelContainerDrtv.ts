/**
 * Created by jwshin on 1/15/2015.
 */
///<reference path="../../typings/tsd.d.ts"/>

module Application.Directives {
    "use strict";

    export class PanelContainerDirective {
        constructor() {
            return this.CreateDirective();
        }
        public CreateDirective():any {
            return {
                restrict:"EA",
                controller: "PanelContainerCtrl",
                templateUrl: "template/html/panelContainer.html",
                link: function(scope, element) {
                    $(element).children().height(window.innerHeight-16-10);
                }
            }
        }
    }
}