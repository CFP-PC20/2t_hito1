/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Chart from 'chart.js';
export class UIChart {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.options = {};
        this.plugins = [];
        this.responsive = true;
        this.onDataSelect = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set data(val) {
        this._data = val;
        this.reinit();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initChart();
        this.initialized = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCanvasClick(event) {
        if (this.chart) {
            /** @type {?} */
            let element = this.chart.getElementAtEvent(event);
            /** @type {?} */
            let dataset = this.chart.getDatasetAtEvent(event);
            if (element && element[0] && dataset) {
                this.onDataSelect.emit({ originalEvent: event, element: element[0], dataset: dataset });
            }
        }
    }
    /**
     * @return {?}
     */
    initChart() {
        /** @type {?} */
        let opts = this.options || {};
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
    }
    /**
     * @return {?}
     */
    getCanvas() {
        return this.el.nativeElement.children[0].children[0];
    }
    /**
     * @return {?}
     */
    getBase64Image() {
        return this.chart.toBase64Image();
    }
    /**
     * @return {?}
     */
    generateLegend() {
        if (this.chart) {
            return this.chart.generateLegend();
        }
    }
    /**
     * @return {?}
     */
    refresh() {
        if (this.chart) {
            this.chart.update();
        }
    }
    /**
     * @return {?}
     */
    reinit() {
        if (this.chart) {
            this.chart.destroy();
            this.initChart();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.initialized = false;
            this.chart = null;
        }
    }
}
UIChart.decorators = [
    { type: Component, args: [{
                selector: 'p-chart',
                template: `
        <div style="position:relative" [style.width]="responsive && !width ? null : width" [style.height]="responsive && !height ? null : height">
            <canvas [attr.width]="responsive && !width ? null : width" [attr.height]="responsive && !height ? null : height" (click)="onCanvasClick($event)"></canvas>
        </div>
    `
            }] }
];
/** @nocollapse */
UIChart.ctorParameters = () => [
    { type: ElementRef }
];
UIChart.propDecorators = {
    type: [{ type: Input }],
    options: [{ type: Input }],
    plugins: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    responsive: [{ type: Input }],
    onDataSelect: [{ type: Output }],
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    UIChart.prototype.type;
    /** @type {?} */
    UIChart.prototype.options;
    /** @type {?} */
    UIChart.prototype.plugins;
    /** @type {?} */
    UIChart.prototype.width;
    /** @type {?} */
    UIChart.prototype.height;
    /** @type {?} */
    UIChart.prototype.responsive;
    /** @type {?} */
    UIChart.prototype.onDataSelect;
    /** @type {?} */
    UIChart.prototype.initialized;
    /** @type {?} */
    UIChart.prototype._data;
    /** @type {?} */
    UIChart.prototype.chart;
    /** @type {?} */
    UIChart.prototype.el;
}
export class ChartModule {
}
ChartModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [UIChart],
                declarations: [UIChart]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0L2NoYXJ0LyIsInNvdXJjZXMiOlsiY2hhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBeUIsS0FBSyxFQUFDLE1BQU0sRUFBQyxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDOUcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sS0FBSyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBVWxDLE1BQU0sT0FBTyxPQUFPOzs7O0lBc0JoQixZQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQWxCeEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUVsQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBTXBCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFMUIsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVEzQixDQUFDOzs7O0lBRXJDLElBQWEsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLEdBQU87UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBSztRQUNmLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTs7Z0JBQ1AsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDOztnQkFDN0MsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FB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QyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDbEIsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSxDb21wb25lbnQsRWxlbWVudFJlZixBZnRlclZpZXdJbml0LE9uRGVzdHJveSxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0ICogYXMgQ2hhcnQgZnJvbSAnY2hhcnQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3AtY2hhcnQnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZVwiIFtzdHlsZS53aWR0aF09XCJyZXNwb25zaXZlICYmICF3aWR0aCA/IG51bGwgOiB3aWR0aFwiIFtzdHlsZS5oZWlnaHRdPVwicmVzcG9uc2l2ZSAmJiAhaGVpZ2h0ID8gbnVsbCA6IGhlaWdodFwiPlxuICAgICAgICAgICAgPGNhbnZhcyBbYXR0ci53aWR0aF09XCJyZXNwb25zaXZlICYmICF3aWR0aCA/IG51bGwgOiB3aWR0aFwiIFthdHRyLmhlaWdodF09XCJyZXNwb25zaXZlICYmICFoZWlnaHQgPyBudWxsIDogaGVpZ2h0XCIgKGNsaWNrKT1cIm9uQ2FudmFzQ2xpY2soJGV2ZW50KVwiPjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFVJQ2hhcnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgb3B0aW9uczogYW55ID0ge307XG5cbiAgICBASW5wdXQoKSBwbHVnaW5zOiBhbnlbXSA9IFtdO1xuICAgIFxuICAgIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XG4gICAgXG4gICAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSByZXNwb25zaXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgICBcbiAgICBAT3V0cHV0KCkgb25EYXRhU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGluaXRpYWxpemVkOiBib29sZWFuO1xuICAgIFxuICAgIF9kYXRhOiBhbnk7XG5cbiAgICBjaGFydDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7fVxuICAgIFxuICAgIEBJbnB1dCgpIGdldCBkYXRhKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cblxuICAgIHNldCBkYXRhKHZhbDphbnkpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHZhbDtcbiAgICAgICAgdGhpcy5yZWluaXQoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uQ2FudmFzQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgaWYodGhpcy5jaGFydCkge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmNoYXJ0LmdldEVsZW1lbnRBdEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIGxldCBkYXRhc2V0ID0gdGhpcy5jaGFydC5nZXREYXRhc2V0QXRFdmVudChldmVudCk7XG4gICAgICAgICAgICBpZihlbGVtZW50JiZlbGVtZW50WzBdJiZkYXRhc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRhdGFTZWxlY3QuZW1pdCh7b3JpZ2luYWxFdmVudDogZXZlbnQsIGVsZW1lbnQ6IGVsZW1lbnRbMF0sIGRhdGFzZXQ6IGRhdGFzZXR9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRDaGFydCgpIHtcbiAgICAgICAgbGV0IG9wdHMgPSB0aGlzLm9wdGlvbnN8fHt9O1xuICAgICAgICBvcHRzLnJlc3BvbnNpdmUgPSB0aGlzLnJlc3BvbnNpdmU7XG5cbiAgICAgICAgLy8gYWxsb3dzIGNoYXJ0IHRvIHJlc2l6ZSBpbiByZXNwb25zaXZlIG1vZGVcbiAgICAgICAgaWYgKG9wdHMucmVzcG9uc2l2ZSYmKHRoaXMuaGVpZ2h0fHx0aGlzLndpZHRoKSkge1xuICAgICAgICAgICAgb3B0cy5tYWludGFpbkFzcGVjdFJhdGlvID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLCB7XG4gICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBwbHVnaW5zOiB0aGlzLnBsdWdpbnNcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGdldENhbnZhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXTtcbiAgICB9XG4gICAgXG4gICAgZ2V0QmFzZTY0SW1hZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYXJ0LnRvQmFzZTY0SW1hZ2UoKTtcbiAgICB9XG4gICAgXG4gICAgZ2VuZXJhdGVMZWdlbmQoKSB7XG4gICAgICAgIGlmKHRoaXMuY2hhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYXJ0LmdlbmVyYXRlTGVnZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgaWYodGhpcy5jaGFydCkge1xuICAgICAgICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZWluaXQoKSB7XG4gICAgICAgIGlmKHRoaXMuY2hhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5pbml0Q2hhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYodGhpcy5jaGFydCkge1xuICAgICAgICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbVUlDaGFydF0sXG4gICAgZGVjbGFyYXRpb25zOiBbVUlDaGFydF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcnRNb2R1bGUgeyB9XG4iXX0=