import { AppLang, AppTheme } from "./../../utils/app.preferences.enum";
import { AppPreferenceService } from "./../../services/app-preference.service";

import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isGrayscale: boolean = false;
  currentTheme: string | null;
  currentLang: string | null;
  // currentFontSize?: string;
  AppTheme = AppTheme;
  appLang = AppLang;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private appPreferenceService: AppPreferenceService
  ) {
    this.currentTheme = appPreferenceService.getCurrentTheme();
    this.currentLang = appPreferenceService.getCurrentLanguage();
  }

  ngOnInit(): void {}

  toggleTheme() {
    this.currentTheme = this.appPreferenceService.changeTheme();
  }

  toggleLanguage() {
    this.currentLang = this.appPreferenceService.changeLanguage();
  }

  increaseFontSize() {
    this.appPreferenceService.increaseFontSize();
  }
  decreaseFontSize() {
    this.appPreferenceService.decreaseFontSize();
  }

}
