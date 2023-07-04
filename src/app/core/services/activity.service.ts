import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  constructor() {}

  getAllActivities(): any[] {
    return [
      { id: 1, nameAr: "الفنون والترفيه والتسلية" },
      { id: 2, nameAr: "التعليم" },
      { id: 3, nameAr: "التقنية" },
      { id: 4, nameAr: "الصحة" },
      { id: 5, nameAr: "تجارة الجملة والتجزئة" },
      { id: 6, nameAr: "خدمات" },
      { id: 7, nameAr: "مالية" },
      { id: 8, nameAr: "الصناعة" },
      { id: 9, nameAr: "المقاهي والحلويات" },
    ];
  }
}
