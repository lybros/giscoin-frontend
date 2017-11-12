import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { latLng, tileLayer, Map } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {
  options: Object;
  drawOptions: Object;
  layersControl: Object;
  activeLayer: Object;
  shown: Boolean;

  constructor() {
    this.shown = true;
    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18, attribution: 'giscoin | AI Hackathon 2017'
        })
      ],
      zoom: 10,
      center: latLng(53.9045, 27.5615)
    };

    this.layersControl = {
      baseLayers: {}
    };

    this.drawOptions = {
      position: 'topleft',
      draw: {
        marker: false,
        polyline: false,
        circle: false,
        polygon: false,
        circlemarker: false,
      }
    };
  }

  onMapReady(map: Map) {
    map.on('draw:created', ({ layerType, layer }) => {
      if (layerType === 'rectangle') {
        const name = `user-layer-${Date.now()}`;
        this.layersControl.baseLayers[name] = layer;
        this.activeLayer = { name, layer };
      }
    });

    map.on('baselayerchange', ({ name, layer }) => {
      this.activeLayer = { name, layer };
    });
  }

  ngOnInit() {
  }
}
