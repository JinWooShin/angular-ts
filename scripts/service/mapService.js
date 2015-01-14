/**
 * Created by jwshin on 1/12/2015.
 */
///<reference path="../../typings/tsd.d.ts" />
///<reference path="esriService.ts" />
define(["require", "exports", "esriService"], function (require, exports, ESRI) {
    ESRI.getMap();
    var Application;
    (function (Application) {
        var Services;
        (function (Services) {
            var MapService = (function () {
                function MapService($log) {
                    this.log = $log;
                }
                MapService.prototype.addLayer = function (layer) {
                    try {
                        this.map.addLayer(layer);
                    }
                    catch (e) {
                        throw new Error(e);
                    }
                };
                MapService.prototype.createMap = function (id, options) {
                };
                return MapService;
            })();
            Services.MapService = MapService;
        })(Services = Application.Services || (Application.Services = {}));
    })(Application || (Application = {}));
});
//# sourceMappingURL=mapService.js.map