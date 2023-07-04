import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";

@Component({
  selector: "app-creation-map",
  templateUrl: "./creation-map.component.html",
  styleUrls: ["./creation-map.component.scss"],
})
export class CreationMapComponent implements OnInit {
  @Input() lng: any;
  @Input() lat: any;
  @Output() locationSet = new EventEmitter<string>();
  apiLoaded: Observable<boolean>;
  currentLocation: any = { lat: 24.65, lng: 46.71 };
  markerPosition: any;
  KSA_BOUNDS = {
    north: 32.186356,
    south: 16.343458,
    west: 34.959348,
    east: 55.671963,
  };

  options = {
    center: { lat: 24.65, lng: 46.71 },
    zoom: 8,
    styles: [
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "water",
        stylers: [{ visibility: "on" }],
      },
    ],
    restriction: {
      latLngBounds: this.KSA_BOUNDS,
      strictBounds: false,
    },
    gestureHandling: "cooperative",
    region: "SA",
  };

  constructor(private httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBmRo1F-upNGcqaavKjk4hJE3GA-z4K37M&region=SA",
        "callback"
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  ngOnInit(): void {
    console.log(this.lat);
    console.log(this.lng);
    navigator.geolocation.getCurrentPosition((position) => {
      this.currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    if (this.lat && this.lng) {
      this.markerPosition = { lat: Number(this.lat), lng: Number(this.lng) };
    }
    this.options.center = this.currentLocation;
  }

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPosition = event.latLng?.toJSON();
    console.log(this.markerPosition);
    this.locationSet.emit(
      this.markerPosition.lat + "," + this.markerPosition.lng
    );
  }
}
