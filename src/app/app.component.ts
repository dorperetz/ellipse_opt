import {Component, AfterViewInit} from "@angular/core";
import {ViewerConfiguration, ActionType} from "angular-cesium";
import {Subject} from "rxjs";


export const ELLIPSE_COLOR = new Cesium.Color(1, 0, 0, 1);
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class  AppComponent implements AfterViewInit{

    private ellipse$ : Subject<any>;
    constructor(private viewerConf: ViewerConfiguration) {
        this.ellipse$ = new Subject();

        this.viewerConf.viewerOptions = {
            timeline : false,
            animation : false,
            baseLayerPicker : false,
            sceneModePicker : false
        }
    }
    ngAfterViewInit(): void {
        var self = this;
      setTimeout(this.extracted(self),2000);
    }

    private extracted(self: AppComponent) {
        setInterval(function () {
            for (let i = 0; i < 1000; i++) {
                let obj = {
                    id: i,
                    entity: {
                        position: Cesium.Cartesian3.fromDegrees(34 + Math.random() * 70, 36 + Math.random() * 70)
                    },
                    actionType: ActionType.ADD_UPDATE
                };
                self.ellipse$.next(obj);
            }
        }, 500);
    }

    private updateEllipses() {
        console.log("updateing");
        // for (let i = 0; i < 10; i++) {
        //     let obj = {
        //         id : i,
        //         entity: {
        //             position : Cesium.Cartesian3.fromDegrees(34 + Math.random(), 36 + Math.random())
        //         },
        //         actionType : ActionType.ADD_UPDATE
        //     };
        //     this.ellipse$.next(obj);
        // }
    }
}
