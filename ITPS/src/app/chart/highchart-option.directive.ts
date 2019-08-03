import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";
import * as highcharts from 'highcharts/highmaps';
@Directive({
    selector: "highchart"
})
export class HighChartOptionDirective implements OnInit {
    @Input("chartType") chartType: any;

    constructor(private el: ElementRef) {}

    public ngOnInit(): void {
        highcharts.mapChart('container', this.chartType);
    }
}
