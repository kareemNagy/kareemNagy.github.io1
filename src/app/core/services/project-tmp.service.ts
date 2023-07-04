import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProjectTmpService {
  constructor() {}

  getAllProjects(): any[] {
    return [
      {
        projectId: 16646,
        nameAr: "محامص بيكولو",
        nameEn: "Piccolo Roasters",
        activity: "مطاعم ، مقاهي",
        category: "أنشطة خدمات الإقامة والطعام",
        subCategory: "أنشطة خدمات الأطعمة والمشروبات",
        destrict: "الرياض",
        city: "الرياض",
        neighborhood: "الربيع",
        description:
          "متخصصون في مجال تحميص البن في المملكة العربية السعودية ، تأسست في عام 2014 م",
        contactNumber: "0112194520",
        twitter: "https://twitter.com/piccolo__coffee",
        instagram: "https://www.instagram.com/piccolo.coffee",
        siteUrl: "https://piccolo.sa",
        status: "مفتوح",
        logoUrl: "assets/images/company-logo.png",
        products: [
          {
            nameEn: "",
            nameAr: "خولان",
            url: "assets/images/Picture5.png",
          },
          {
            nameEn: "",
            nameAr: "نانسيبو",
            url: "assets/images/Picture1.png",
          },
          {
            nameEn: "",
            nameAr: "هاكونا ماتاتا",
            url: "assets/images/Picture2.png",
          },
          {
            nameEn: "",
            nameAr: "لافيقا",
            url: "assets/images/Picture3.png",
          },
          {
            nameEn: "",
            nameAr: "لاميستا",
            url: "assets/images/Picture4.png",
          },
        ],
        attachments: [
          {
            nameEn: "",
            nameAr: "جودة محامص بيكولو",
            url: "",
          },
        ],
        branches: [
          {
            projectId: 16646,
            projectName: "فرع بيكولو في حي العقيق",
            area: "منطقة الرياض",
            city: "الرياض",
            neighborhood: "العقيق",
            category: "أنشطة خدمات الإقامة والطعام",
            icon: "cafe",
            activity: "المقاهي والحلويات",
            longitude: 24.796866,
            latitude: 46.676099,
          },
          {
            projectId: 16646,
            projectName: "فرع بيكولو في حي الربيع",
            area: "منطقة الرياض",
            city: "الرياض",
            neighborhood: "الربيع",
            category: "أنشطة خدمات الإقامة والطعام",
            icon: "cafe",
            activity: "المقاهي والحلويات",
            longitude: 24.796866,
            latitude: 46.676099,
          },
          {
            projectId: 16646,
            projectName: "فرع بيكولو في الدمام",
            area: "منطقة الرياض",
            city: "الرياض",
            neighborhood: "الدمام",
            category: "أنشطة خدمات الإقامة والطعام",
            icon: "cafe",
            activity: "المقاهي والحلويات",
            longitude: 24.796866,
            latitude: 46.676099,
          },
        ],
      },
      {
        projectId: 2,
        nameAr: "كيان كافيه",
        nameEn: "Kyan Cafe",
        activity: "المقاهي والحلويات",
        category: "أنشطة خدمات الإقامة والطعام",
        subCategory: "أنشطة خدمات الأطعمة والمشروبات",
        destrict: "الرياض",
        city: "الرياض",
        neighborhood: "الربيع",
        description:
          "الوجهة الصحيحة.. لصنع أجمل تجربة جاري الانتشار على مستوى المملكة العربية السعودية والخليج",
        contactNumber: "920011100",
        twitter: "https://twitter.com/kyancafe",
        instagram: "",
        siteUrl: "https://www.kyancafe.com",
        status: "مفتوح",
        logoUrl: "assets/images/kyan-cafe.png",
        products: [
          {
            nameEn: "",
            nameAr: "كراميل",
            url: "assets/images/kyan-caramel.png",
          },
          {
            nameEn: "",
            nameAr: "شوكولاته",
            url: "assets/images/kyan-choco.png",
          },
          {
            nameEn: "",
            nameAr: "سكاي بلو",
            url: "assets/images/kyan-sky-blue.png",
          },
          {
            nameEn: "",
            nameAr: "موهيتو",
            url: "assets/images/kyan-mohito.png",
          },
          {
            nameEn: "",
            nameAr: "آيس كافي",
            url: "assets/images/kyan-ice-cafe.png",
          },
        ],
        attachments: [
          {
            nameEn: "",
            nameAr: "كيان كافيه",
            url: "",
          },
        ],
        branches: [],
      },
      {
        projectId: 11585,
        nameAr: "شركة البيت الرومانسي المحدودة",
        nameEn: "AlBayt AlRomancy",
        activity: "المطاعم",
        category: "أنشطة خدمات الإقامة والطعام",
        subCategory: "أنشطة خدمات الأطعمة والمشروبات",
        destrict: "الرياض",
        city: "الرياض",
        neighborhood: "الفيحاء",
        description:
          "يعتبر البيت الرومانسي أحد أهم المعالم العريقة في مجال الأغذية والآكلات السعودية منذ العام 1998م حيث أنه يعكس أصالة المطبخ السعودي بأطباقه الشهية فضلاً عن كونه رائداً في سوق المأكولات السعودية لأكثر من 20 عاماً.",
        contactNumber: "920008529",
        twitter: "https://twitter.com/albaytalromancy",
        instagram: "https://www.instagram.com/albaytalromancy",
        siteUrl: "http://albaytalromancy.com/ar",
        status: "مفتوح",
        logoUrl: "assets/images/bayt-alromancy.png",
        products: [
          {
            nameEn: "",
            nameAr: "سالونا شيكن",
            url: "assets/images/salona-chicken.png",
          },
          {
            nameEn: "",
            nameAr: "بوكس شواء",
            url: "assets/images/romancya-box.png",
          },
          {
            nameEn: "",
            nameAr: "حاشي مضغوط",
            url: "assets/images/romancya-hashy.png",
          },
          {
            nameEn: "",
            nameAr: "موهيتو",
            url: "assets/images/kyan-mohito.png",
          },
          {
            nameEn: "",
            nameAr: "الشواية الفورية",
            url: "assets/images/instant-barbque-grill.png",
          },
        ],
        attachments: [
          {
            nameEn: "",
            nameAr: "شركة البيت الرومانسي المحدودة",
            url: "",
          },
        ],
        branches: [],
      },
      {
        projectId: 11466,
        nameAr: "شقق سدن للوحدات السكنية المفروشة",
        nameEn: "شقق سدن للوحدات السكنية المفروشة",
        activity: "",
        category: "الأنشطة العقارية",
        subCategory: "الأنشطة العقارية",
        destrict: "الرياض",
        city: "الرياض",
        neighborhood: "الندوة",
        description: "",
        contactNumber: "",
        twitter: "",
        instagram: "",
        siteUrl: "",
        status: "مفتوح",
        logoUrl: "assets/images/company-logo.png",
        products: [],
        attachments: [],
        branches: [],
      },
    ];
  }

  getProjectById(id: string): any {
    let allProjects = this.getAllProjects();
    let project;

    project = allProjects.find((project) => project.projectId === Number(id));
    return project;
  }
}
