import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DistrictService {
  constructor() {}

  getDistricts(): any[] {
    return [
      {
        nameAr: "منطقة المدينة المنورة",
        nameEn: "",
        longitude: 24.512114,
        latitude: 39.571031,
        icon: "assets/cities-icons-colored/Madinah.png",
        totalLoans: "241,542",
        totalExpenses: "10,935,868,928",
      },
      {
        nameAr: "منطقة الرياض",
        nameEn: "",
        longitude: 23.740137,
        latitude: 45.868638,
        icon: "assets/cities-icons-colored/Al Riyadh.png",
        totalLoans: "584,616",
        totalExpenses: "29,246,369,496",
      },
      {
        nameAr: "منطقة نجران",
        nameEn: "",
        longitude: 18.496835,
        latitude: 46.977911,
        icon: "assets/cities-icons-colored/Najran.ong",
        totalLoans: "86,040",
        totalExpenses: "4,050,634,551",
      },
      {
        nameAr: "منطقة مكة المكرمة",
        nameEn: "",
        longitude: 21.706712,
        latitude: 40.832410,
        icon: "assets/cities-icons-colored/Mecca.png",
        totalLoans: "546,158",
        totalExpenses: "25,458,242,613",
      },
      {
        nameAr: "منطقة القصيم",
        nameEn: "",
        longitude: 26.160864,
        latitude: 43.263221,
        icon: "assets/cities-icons-colored/Alqassim.png",
        totalLoans: "144,353",
        totalExpenses: "6,462,700,123",
      },
      {
        nameAr: "منطقة عسير",
        nameEn: "",
        longitude: 19.099253,
        latitude: 42.777880,
        icon: "assets/cities-icons-colored/Aseer-Abha.png",
        totalLoans: "240,359",
        totalExpenses: "11,203,370,698",
      },
      {
        nameAr: "منطقة الحدود الشمالية",
        nameEn: "",
        longitude: 30.306895,
        latitude: 41.790486,
        icon: "assets/cities-icons-colored/Alhudod alshamalia.png",
        totalLoans: "68,969",
        totalExpenses: "2,824,593,029",
      },
      {
        nameAr: "المنطقة الشرقية",
        nameEn: "",
        longitude: 24.559047,
        latitude: 49.536582,
        icon: "assets/cities-icons-colored/Dammam.png",
        totalLoans: "430,801",
        totalExpenses: "19,580,314,915",
      },
      {
        nameAr: "منطقة الجوف",
        nameEn: "",
        longitude: 29.878546,
        latitude: 39.443436,
        icon: "assets/cities-icons-colored/Aljouf.png",
        totalLoans: "98,668",
        totalExpenses: "4,339,628,235",
      },
      {
        nameAr: "منطقة حائل",
        nameEn: "",
        longitude: 27.592407,
        latitude: 41.333906,
        icon: "assets/cities-icons-colored/Hail.png",
        totalLoans: "91,374",
        totalExpenses: "3,812,510,998",
      },
      {
        nameAr: "منطقة جازان",
        nameEn: "",
        longitude: 17.326717,
        latitude: 42.809074,
        icon: "assets/cities-icons-colored/Jizan.png",
        totalLoans: "177,082",
        totalExpenses: "7,588,929,835",
      },
      {
        nameAr: "منطقة تبوك",
        nameEn: "",
        longitude: 28.290245,
        latitude: 37.091769,
        icon: "assets/cities-icons-colored/Tabuk.png",
        totalLoans: "112,157",
        totalExpenses: "5,271,082,343",
      },
      {
        nameAr: "منطقة الباحة",
        nameEn: "",
        longitude: 20.178895,
        icon: "assets/cities-icons-colored/Albaha2.png",
        latitude: 41.449801,
        totalLoans: "67,372",
        totalExpenses: "2,877,809,589",
      },
    ];
  }

  getDistrictByName(name: string): any {
    let districts = this.getDistricts();
    let district = districts.find(
      (c) => c.nameAr === name || c.nameEn === name
    );

    return district;
  }
}
