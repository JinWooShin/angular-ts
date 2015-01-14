/**
 * Created by jwshin on 1/12/2015.
 */
///<reference path="../../typings/tsd.d.ts" />
define(["require", "exports", "esri/map"], function (require, exports, Map) {
    var Esri;
    (function (Esri) {
        function getMap(id, options) {
            return new Map(id, options);
        }
        Esri.getMap = getMap;
    })(Esri = exports.Esri || (exports.Esri = {}));
});
//# sourceMappingURL=esriService.js.map