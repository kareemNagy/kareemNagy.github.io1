import { Size } from "./../../models/icon.model";
import { HttpClient } from "@angular/common/http";
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Observable, map, catchError, of } from "rxjs";
import { MapDirectionsService } from "@angular/google-maps";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"],
})
export class MapsComponent implements OnInit, OnChanges {
  @Input() branches: any[] = [];
  @Input() cityLocation: any = { lat: 24.742394, lng: 46.741473, zoom: 11.5 };
  @Input() districtLocation: any = { lat: 24.65, lng: 46.71, zoom: 2 };
  @Input() selectedDistrict: any;
  size: Size = new Size(30, 30);
  apiLoaded: Observable<boolean>;
  showInfoWindow = false;
  selectedBranch: any;
  mapLocation = { lat: 24.742394, lng: 46.741473, zoom: 8 };
  currentLocation: any;
  directionsResults$!: Observable<google.maps.DirectionsResult | undefined>;
  directionReady = false;
  showStatistics = false;

  KSA_BOUNDS = {
    north: 32.186356,
    south: 16.343458,
    west: 34.959348,
    east: 55.671963,
  };

  options = {
    center: this.districtLocation,
    zoom: this.districtLocation.zoom,
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


  clusterStyles = 
    [
    {
        url: "/assets/cities-icons/logo.png",
        height: 77,
        width: 42,
    
    

    },
    
    ]

  
 clusterOptions = {
    gridSize: 30,
         minimumClusterSize: 2,
         averageCenter: true
 };

  markerOptions = {
    animation: 1.0,
  };

  

  constructor(
    private httpClient: HttpClient,
    private mapDirectionsService: MapDirectionsService
  ) {
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
    navigator.geolocation.getCurrentPosition((position) => {
      this.currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
 
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["cityLocation"] && !changes["cityLocation"]?.firstChange) {
      console.log("City");
      this.mapLocation = this.cityLocation;
      this.options = {
        center: this.mapLocation,
        zoom: this.mapLocation.zoom,
        styles: [
          {
            featureType: "poi",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            stylers: [{ visibility: "off" }],
          },
        ],
        restriction: {
          latLngBounds: this.KSA_BOUNDS,
          strictBounds: false,
        },
        gestureHandling: "cooperative",
        region: "SA",
      };
    }
    if (
      changes["districtLocation"] &&
      !changes["districtLocation"]?.firstChange
    ) {
      this.mapLocation = this.districtLocation;
      this.options = {
        center: this.mapLocation,
        zoom: this.mapLocation.zoom,
        styles: [
          {
            featureType: "poi",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "water",
            stylers: [{ visibility: "off" }],
          },
        ],
        restriction: {
          latLngBounds: this.KSA_BOUNDS,
          strictBounds: false,
        },
        gestureHandling: "cooperative",
        region: "SA",
      };
    }
    if (
      changes["selectedDistrict"] &&
      !changes["selectedDistrict"]?.firstChange
    ) {
      console.log(this.selectedDistrict);
      this.openStatisticsWindow();
    }
  }

  openInfoWindow(branch: any) {
    this.selectedBranch = branch;
    this.showInfoWindow = true;
    this.showStatistics = false;
    // this.router.navigate(["/visitor/details"]);
  }

  closeInfoWindow() {
    this.showInfoWindow = false;
  }

  routeToDirection(branch: any) {
    const request: google.maps.DirectionsRequest = {
      destination: { lat: branch.longitude, lng: branch.latitude },
      origin: { lat: this.currentLocation.lat, lng: this.currentLocation.lng },
      travelMode: google.maps.TravelMode.DRIVING,
    };
    this.directionsResults$ = this.mapDirectionsService
      .route(request)
      .pipe(map((response) => response.result));
    this.showInfoWindow = false;
  }

  openStatisticsWindow() {
    this.showStatistics = true;
    this.showInfoWindow = false;
  }

  closeStatistics() {
    this.showStatistics = false;
  }
}
