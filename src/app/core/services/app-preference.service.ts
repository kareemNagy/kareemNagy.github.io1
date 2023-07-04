import { Subject } from "rxjs";
import { AppPreference } from "./../models/app-preference.model";
import { AppLang, AppTheme } from "./../utils/app.preferences.enum";
import { Constant } from "./../utils/constant";
import { Inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: "root",
})
export class AppPreferenceService {
  public appPreference!: AppPreference;

  public appPreferences = new Subject<AppPreference>();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService
  ) {}

  getCurrentLanguage(): string | null {
    let currentLang = localStorage.getItem(Constant.APP_LANG);
    return currentLang;
  }

  getCurrentTheme(): string | null {
    let currentTheme = localStorage.getItem(Constant.APP_THEME);
    return currentTheme;
  }

  checkAppPreferences() {
    if (!this.getCurrentLanguage() || !this.getCurrentTheme()) {
      this.setAppPreferences(AppLang.Arabic, AppTheme.Normal);
    } else {
      this.setAppPreferences(
        this.getCurrentLanguage()!,
        this.getCurrentTheme()!
      );
    }
  }

  setAppPreferences(language: string, theme: string) {
    this.document.body.classList.add(theme);
    this.setLanguageCss(language);
    this.translate.use(language);
    localStorage.setItem(Constant.APP_LANG, language);
    localStorage.setItem(Constant.APP_THEME, theme);
  }

  changeTheme() {
    let newTheme =
      this.getCurrentTheme() === AppTheme.Normal
        ? AppTheme.Grayscale
        : AppTheme.Normal;
    this.setTheme(this.getCurrentTheme()!, newTheme);
    this.updateAppPreferences(this.getCurrentLanguage()!, newTheme);
    localStorage.setItem(Constant.APP_THEME, newTheme);
    return newTheme;
  }

  changeLanguage() {
    let newLanguage =
      this.getCurrentLanguage() === AppLang.Arabic
        ? AppLang.English
        : AppLang.Arabic;
    this.setLanguageCss(newLanguage);
    this.translate.use(newLanguage);
    this.updateAppPreferences(newLanguage, this.getCurrentTheme()!);
    localStorage.setItem(Constant.APP_LANG, newLanguage);
    return newLanguage;
  }

  setLanguageCss(lang: string) {
    let htmlTag = this.document.getElementsByTagName(
      "html"
    )[0] as HTMLHtmlElement;
    htmlTag.lang = lang;
    htmlTag.dir = lang === AppLang.Arabic ? "rtl" : "ltr";
    let existingLink = this.document.getElementById(
      "langCss"
    ) as HTMLLinkElement;
    existingLink.href =
      lang === AppLang.English ? "ltrBootstrap.css" : "rtlBootstrap.css";
  }

  setTheme(currentTheme: string, newTheme: string) {
    this.document.body.classList.remove(currentTheme);
    this.document.body.classList.add(newTheme);
    localStorage.setItem(Constant.APP_THEME, newTheme);
  }

  updateAppPreferences(lang: string, theme: string) {
    let newAppPreference = new AppPreference();
    newAppPreference.language = lang;
    newAppPreference.theme = theme;
    this.appPreferences.next(newAppPreference);
  }
  
  increaseFontSize() {
    let htmlElement = this.document.getElementsByTagName("html")[0] as HTMLElement;
    let elementStyles = getComputedStyle(htmlElement)
    // let currentFontSize = Number(bodyTag.style.fontSize.replace('px', ''));
    let currentFontSize = Number(elementStyles.getPropertyValue('font-size').replace('px', ''));

    if(currentFontSize < 20) {
      currentFontSize += 2;
      htmlElement.style.fontSize = currentFontSize + "px";
    }
    else
      return;
  }
  
  decreaseFontSize() {
    let htmlElement = this.document.getElementsByTagName("html")[0] as HTMLElement;
    let elementStyles = getComputedStyle(htmlElement)
    // let currentFontSize = Number(bodyTag.style.fontSize.replace('px', ''));
    let currentFontSize = Number(elementStyles.getPropertyValue('font-size').replace('px', ''));

    if(currentFontSize > 12) {
      currentFontSize -= 2;
      htmlElement.style.fontSize = currentFontSize + "px";
    }
    else
      return;
  }

  getCurrentPath(): string {
    return localStorage.getItem("currentPath")!;
  }

  setCurrentPath(path: string) {
    localStorage.setItem("currentPath", path);
  }
}
