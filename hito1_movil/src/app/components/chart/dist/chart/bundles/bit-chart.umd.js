(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('chart.js')) :
    typeof define === 'function' && define.amd ? define('@bit/primefaces.primeng.chart', ['exports', '@angular/core', '@angular/common', 'chart.js'], factory) :
    (global = global || self, factory((global.bit = global.bit || {}, global.bit.chart = {}), global.ng.core, global.ng.common, global.Chart));
}(this, function (exports, core, common, Chart) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UIChart = /** @class */ (function () {
        function UIChart(el) {
            this.el = el;
            this.options = {};
            this.plugins = [];
            this.responsive = true;
            this.onDataSelect = new core.EventEmitter();
        }
        Object.defineProperty(UIChart.prototype, "data", {
            get: /**
             * @return {?}
             */
            function () {
                return this._data;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                this._data = val;
                this.reinit();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        UIChart.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.initChart();
            this.initialized = true;
        };
        /**
         * @param {?} event
         * @return {?}
         */
        UIChart.prototype.onCanvasClick = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (this.chart) {
                /** @type {?} */
                var element = this.chart.getElementAtEvent(event);
                /** @type {?} */
                var dataset = this.chart.getDatasetAtEvent(event);
                if (element && element[0] && dataset) {
                    this.onDataSelect.emit({ originalEvent: event, element: element[0], dataset: dataset });
                }
            }
        };
        /**
         * @return {?}
         */
        UIChart.prototype.initChart = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var opts = this.options || {};
            opts.responsive = this.responsive;
            // allows chart to resize in responsive mode
            if (opts.responsive && (this.height || this.width)) {
                opts.maintainAspectRatio = false;
            }
            //@ts-ignore
            this.chart = new Chart(this.el.nativeElement.children[0].children[0], {
                type: this.type,
                data: this.data,
                options: this.options,
                plugins: this.plugins
            });
        };
        /**
         * @return {?}
         */
        UIChart.prototype.getCanvas = /**
         * @return {?}
         */
        function () {
            return this.el.nativeElement.children[0].children[0];
        };
        /**
         * @return {?}
         */
        UIChart.prototype.getBase64Image = /**
         * @return {?}
         */
        function () {
            return this.chart.toBase64Image();
        };
        /**
         * @return {?}
         */
        UIChart.prototype.generateLegend = /**
         * @return {?}
         */
        function () {
            if (this.chart) {
                return this.chart.generateLegend();
            }
        };
        /**
         * @return {?}
         */
        UIChart.prototype.refresh = /**
         * @return {?}
         */
        function () {
            if (this.chart) {
                this.chart.update();
            }
        };
        /**
         * @return {?}
         */
        UIChart.prototype.reinit = /**
         * @return {?}
         */
        function () {
            if (this.chart) {
                this.chart.destroy();
                this.initChart();
            }
        };
        /**
         * @return {?}
         */
        UIChart.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.chart) {
                this.chart.destroy();
                this.initialized = false;
                this.chart = null;
            }
        };
        UIChart.decorators = [
            { type: core.Component, args: [{
                        selector: 'p-chart',
                        template: "\n        <div style=\"position:relative\" [style.width]=\"responsive && !width ? null : width\" [style.height]=\"responsive && !height ? null : height\">\n            <canvas [attr.width]=\"responsive && !width ? null : width\" [attr.height]=\"responsive && !height ? null : height\" (click)=\"onCanvasClick($event)\"></canvas>\n        </div>\n    "
                    }] }
        ];
        /** @nocollapse */
        UIChart.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        UIChart.propDecorators = {
            type: [{ type: core.Input }],
            options: [{ type: core.Input }],
            plugins: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            responsive: [{ type: core.Input }],
            onDataSelect: [{ type: core.Output }],
            data: [{ type: core.Input }]
        };
        return UIChart;
    }());
    var ChartModule = /** @class */ (function () {
        function ChartModule() {
        }
        ChartModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [UIChart],
                        declarations: [UIChart]
                    },] }
        ];
        return ChartModule;
    }());

    exports.ChartModule = ChartModule;
    exports.UIChart = UIChart;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bit-chart.umd.js.map
