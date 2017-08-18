import {Component, AfterViewInit} from "@angular/core";
import {ViewerConfiguration, ActionType} from "angular-cesium";
import {Subject} from "rxjs";


export const ELLIPSE_COLOR = new Cesium.Color(1, 0, 0, 1);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private ellipse$: Subject<any>;
  private interval : any;

  constructor(private viewerConf: ViewerConfiguration) {
    this.ellipse$ = new Subject();

    this.viewerConf.viewerOptions = {
      timeline: false,
      animation: false,
      baseLayerPicker: false,
      sceneModePicker: false
    }
  }


  stopUpdate() {
    clearInterval(this.interval);
  }

  private startUpdate() {
    let self = this;
    this.interval = setInterval(function () {
      for (let i = 0; i < 1000; i++) {
        let obj = {
          id: i,
          entity: {
            position: Cesium.Cartesian3.fromDegrees(34 + Math.random() * 70, 36 + Math.random() * 70),
            material : new Cesium.ColorMaterialProperty(Cesium.Color.RED.withAlpha(0.5))
          },
          actionType: ActionType.ADD_UPDATE
        };
        self.ellipse$.next(obj);
      }
    }, 500);
  }
}
