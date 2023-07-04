import { SubCategory } from "./../models/category.model";
import { Injectable } from "@angular/core";
import { Category } from "../models/category.model";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor() {}

  getAllCategories(): Category[] {
    return [
      {
        id: 1,
        nameEn: "",
        nameAr: "الأنشطة العقارية",
        activity: "خدمات",
        subCategories: [
          {
            id: 2,
            nameEn: "",
            nameAr: "الأنشطة العقارية",
          },
        ],
      },
      {
        id: 2,
        nameEn: "",
        nameAr: "الأنشطة المهنية والعلمية والتقنية",
        activity: "خدمات",
        subCategories: [
          {
            id: 3,
            nameEn: "",
            nameAr: "الأنشطة القانونية وأنشطة المحاسبة",
          },
          {
            id: 4,
            nameEn: "",
            nameAr: "أبحاث الإعلان والسوق",
          },
          {
            id: 5,
            nameEn: "",
            nameAr: "الأنشطة المعمارية والهندسية والاختبارات الفنية والتحليل",
          },
          {
            id: 6,
            nameEn: "",
            nameAr: "الأنشطة المهنية والعلمية والتقنية الأخرى",
          },
          {
            id: 7,
            nameEn: "",
            nameAr: "البحث العلمي والتطوير في المجال العلمي",
          },
          {
            id: 8,
            nameEn: "",
            nameAr:
              "أنشطة المكاتب الرئيسة ، والأنشطة الاستشارية في مجال الإدارة",
          },
        ],
      },
      {
        id: 9,
        nameEn: "",
        nameAr: "الأكشاك",
        activity: "مالية",
        subCategories: [
          {
            id: 10,
            nameEn: "",
            nameAr: "الأكشاك",
          },
        ],
      },
      {
        id: 11,
        nameEn: "",
        nameAr: "الأنشطة المالية وأنشطة التأمين",
        activity: "مالية",
        subCategories: [
          {
            id: 12,
            nameEn: "",
            nameAr: "الأنشطة المساعدة لأنشطة الخدمات المالية وأنشطة التأمين",
          },
          {
            id: 13,
            nameEn: "",
            nameAr: "أنشطة الخدمات المالية عدا تمويل التأمين وصناديق المعاشات",
          },
          {
            id: 14,
            nameEn: "",
            nameAr: "تمويل التأمين وإعادة التأمين وصناديق المعاشات التقاعدية",
          },
        ],
      },
      {
        id: 15,
        nameEn: "",
        nameAr: "الأنشطة في مجال صحة الإنسان والعمل الاجتماعي",
        activity: "الصحة",
        subCategories: [
          {
            id: 16,
            nameEn: "",
            nameAr: "أنشطة العمل الاجتماعي دون الإقامة",
          },
          {
            id: 17,
            nameEn: "",
            nameAr: "الأنشطة في مجال صحة الإنسان",
          },
          {
            id: 18,
            nameEn: "",
            nameAr: "أنشطة الرعاية مع الإقامة",
          },
        ],
      },
      {
        id: 19,
        nameEn: "",
        nameAr: "التشييد",
        activity: "خدمات",
        subCategories: [
          {
            id: 20,
            nameEn: "",
            nameAr: "أنشطة التشييد المتخصصة",
          },
          {
            id: 21,
            nameEn: "",
            nameAr: "تشييد المباني",
          },
          {
            id: 22,
            nameEn: "",
            nameAr: "الهندسة المدنية",
          },
        ],
      },
      {
        id: 23,
        nameEn: "",
        nameAr: "التعدين واستغلال المحاجر",
        activity: "الصناعة",
        subCategories: [
          {
            id: 24,
            nameEn: "",
            nameAr: "تعدين الفحم والليغنيت",
          },
          {
            id: 25,
            nameEn: "",
            nameAr: "الأنشطة الأخرى للتعدين واستغلال المحاجر",
          },
          {
            id: 26,
            nameEn: "",
            nameAr: "أنشطة خدمات دعم التعدين",
          },
        ],
      },
      {
        id: 27,
        nameEn: "",
        nameAr: "التعليم",
        activity: "التعليم",
        subCategories: [
          {
            id: 28,
            nameEn: "",
            nameAr: "التعليم",
          },
        ],
      },
      {
        id: 29,
        nameEn: "",
        nameAr: "الزراعة والحراجة وصيد الأسماك",
        activity: "خدمات",
        subCategories: [
          {
            id: 30,
            nameEn: "",
            nameAr:
              "أنشطة زراعة المحاصيل والإنتاج الحيواني والصيد والخدمات المتصلة",
          },
          {
            id: 31,
            nameEn: "",
            nameAr: "الحراجة وقطع الأخشاب",
          },
          {
            id: 32,
            nameEn: "",
            nameAr: "صيد الأسماك وتربية المائيات",
          },
        ],
      },
      {
        id: 33,
        nameEn: "",
        nameAr: "الصناعة التحويلية",
        activity: "الصناعة",
        subCategories: [
          {
            id: 34,
            nameEn: "",
            nameAr: "صُنع منتجات المعادن المشكّلة ، باستثناء الآلات والمعدات",
          },
          {
            id: 35,
            nameEn: "",
            nameAr: "إصلاح وتركيب الألآت والمعدات",
          },
          {
            id: 36,
            nameEn: "",
            nameAr: "صُنع الآلات والمعدات غير المصنّفة في موضع آخر.",
          },
          {
            id: 37,
            nameEn: "",
            nameAr: "صُنع الخشب ومنتجاته والفلين ، باستثناء الأثاث",
          },
          {
            id: 38,
            nameEn: "",
            nameAr: "صُنع الملبوسات",
          },
          {
            id: 39,
            nameEn: "",
            nameAr: "الطباعة واستنساخ وسائط الأعلام المسجّلة",
          },
          {
            id: 40,
            nameEn: "",
            nameAr: "صُنع المنسوجات",
          },
          {
            id: 41,
            nameEn: "",
            nameAr: "صُنع المعدات الكهربائية",
          },
          {
            id: 42,
            nameEn: "",
            nameAr: "صُنع المشروبات",
          },
          {
            id: 43,
            nameEn: "",
            nameAr: "صُنع الحواسيب والمنتجات الإلكترونية والبصرية",
          },
          {
            id: 44,
            nameEn: "",
            nameAr: "صُنع معدات النقل الأخرى.",
          },
          {
            id: 45,
            nameEn: "",
            nameAr: "صُنع المنتجات الصيدلانية الأساسية والمستحضرات الصيدلانية",
          },
          {
            id: 46,
            nameEn: "",
            nameAr: "غير معرف",
          },
          {
            id: 47,
            nameEn: "",
            nameAr: "صُنع الأثاث",
          },
          {
            id: 48,
            nameEn: "",
            nameAr: "صُنع منتجات المعادن اللافلزية الأخرى",
          },
          {
            id: 49,
            nameEn: "",
            nameAr: "صُنع المنتجات الغذائية",
          },
          {
            id: 50,
            nameEn: "",
            nameAr: "صُنع فحم الكوك والمنتجات النفطية المكررة",
          },
          {
            id: 51,
            nameEn: "",
            nameAr: "صُنع المواد الكيميائية والمنتجات الكيميائية",
          },
          {
            id: 52,
            nameEn: "",
            nameAr: "صُنع منتجات المطاط واللدائن",
          },
          {
            id: 53,
            nameEn: "",
            nameAr: "الصناعة التحويلية الأخرى",
          },
          {
            id: 54,
            nameEn: "",
            nameAr: "صُنع الورق ومنتجاته",
          },
          {
            id: 55,
            nameEn: "",
            nameAr:
              "صُنع المركبات ذات المحرّكات والمركبات المقطورة ونصف المقطورة",
          },
          {
            id: 56,
            nameEn: "",
            nameAr: "صُنع الفلّزات القاعدية",
          },
          {
            id: 57,
            nameEn: "",
            nameAr: "صُنع المنتجات الجلدية والمنتجات ذات الصلة",
          },
        ],
      },
      {
        id: 58,
        nameEn: "",
        nameAr: "الفنون والترفيه والتسلية",
        activity: "الفنون والترفيه والتسلية",
        subCategories: [
          {
            id: 59,
            nameEn: "",
            nameAr: "الأنشطة الرياضية وأنشطة التسلية والترفيه",
          },
          {
            id: 60,
            nameEn: "",
            nameAr: "أنشطة المكتبات والمحفوظات والمتاحف والأنشطة الأخرى",
          },
        ],
      },
      {
        id: 61,
        nameEn: "",
        nameAr: "المعلومات والاتصالات",
        activity: "التقنية",
        subCategories: [
          {
            id: 62,
            nameEn: "",
            nameAr: "أنشطة النشر",
          },
          {
            id: 63,
            nameEn: "",
            nameAr:
              "أنشطة انتاج الأفلام والبرامج التلفزيونية والتسجيلات الصوتية والموسيقية",
          },
          {
            id: 64,
            nameEn: "",
            nameAr:
              "أنشطة البرمجة الحاسوبية والخبرة الاستشارية وما يتصل بها من أنشطة",
          },
          {
            id: 65,
            nameEn: "",
            nameAr: "أنشطة خدمات المعلومات",
          },
          {
            id: 66,
            nameEn: "",
            nameAr: "الاتصالات",
          },
        ],
      },
      {
        id: 67,
        nameEn: "",
        nameAr: "النقل والتخزين",
        activity: "خدمات",
        subCategories: [
          {
            id: 68,
            nameEn: "",
            nameAr: "النقل البري و النقل عبر الأنابيب",
          },
          {
            id: 69,
            nameEn: "",
            nameAr: "النقل المائي",
          },
          {
            id: 70,
            nameEn: "",
            nameAr: "التخزين وأنشطة الدعم للنقل",
          },
          {
            id: 71,
            nameEn: "",
            nameAr: "النقل الجوي",
          },
          {
            id: 72,
            nameEn: "",
            nameAr: "أنشطة البريد ونقل الطرود بواسطة مندوبين",
          },
        ],
      },
      {
        id: 73,
        nameEn: "",
        nameAr: "أنشطة الخدمات الأخرى",
        activity: "خدمات",
        subCategories: [
          {
            id: 74,
            nameEn: "",
            nameAr: "أنشطة الخدمات الشخصية الأخرى",
          },
          {
            id: 75,
            nameEn: "",
            nameAr: "غير معرف",
          },
          {
            id: 76,
            nameEn: "",
            nameAr: "إصلاح أجهزة الحاسوب والسلع الشخصية والمنزلية",
          },
        ],
      },
      {
        id: 77,
        nameEn: "",
        nameAr: "أنشطة الخدمات الإدارية وخدمات الدعم",
        activity: "خدمات",
        subCategories: [
          {
            id: 78,
            nameEn: "",
            nameAr:
              "الأنشطة الإدارية للمكاتب ، وأنشطة الدعم للمكاتب وغير ذلك من أنشطة الدعم للأعمال",
          },
          {
            id: 79,
            nameEn: "",
            nameAr: "أنشطة التأجير",
          },
          {
            id: 80,
            nameEn: "",
            nameAr: "أنشطة تقديم الخدمات للمباني وتجميل المواقع",
          },
          {
            id: 81,
            nameEn: "",
            nameAr:
              "وكالات السفر ومشغلو الجولات السياحية وخدمات  الحجز والأنشطة المتصلة بها",
          },
          {
            id: 82,
            nameEn: "",
            nameAr: "أنشطة الاستخدام",
          },
          {
            id: 83,
            nameEn: "",
            nameAr: "أنشطة الأمن والتحقيقات",
          },
        ],
      },
      {
        id: 84,
        nameEn: "",
        nameAr: "أنشطة خدمات الإقامة والطعام",
        activity: "المقاهي والحلويات",
        subCategories: [
          {
            id: 85,
            nameEn: "",
            nameAr: "أنشطة خدمات الأطعمة والمشروبات",
          },
          {
            id: 86,
            nameEn: "",
            nameAr: "الإقامة",
          },
        ],
      },
      {
        id: 87,
        nameEn: "",
        nameAr: "إمدادات الكهرباء والغاز والبخار وتكييف الهواء",
        activity: "خدمات",
        subCategories: [
          {
            id: 88,
            nameEn: "",
            nameAr: "إمدادات الكهرباء والغاز والبخار وتكييف الهواء",
          },
        ],
      },
      {
        id: 89,
        nameEn: "",
        nameAr: "إمدادات المياه وأنشطة الصرف الصحي وإدارة النفايات ومعالجتها",
        activity: "خدمات",
        subCategories: [
          {
            id: 90,
            nameEn: "",
            nameAr: "تجميع المياه ومعالجتها وتوصيلها",
          },
          {
            id: 91,
            nameEn: "",
            nameAr: "أنشطة جمع النفايات ومعالجتها وتصريفها  واسترجاع المواد",
          },
          {
            id: 92,
            nameEn: "",
            nameAr: "أنشطة المعالجة وخدمات إدارة النفايات الأخرى",
          },
        ],
      },
      {
        id: 93,
        nameEn: "",
        nameAr: "تجارة الجملة والتجزئة",
        activity: "تجارة الجملة والتجزئة",
        subCategories: [
          {
            id: 94,
            nameEn: "",
            nameAr: "تجارة الجملة والتجزئة",
          },
          {
            id: 95,
            nameEn: "",
            nameAr: "تجارة التجزئة",
          },
          {
            id: 96,
            nameEn: "",
            nameAr: "تجارة الجملة",
          },
        ],
      },
      {
        id: 97,
        nameEn: "",
        nameAr: "مطبخ مجتمعي",
        activity: "خدمات",
        subCategories: [
          {
            id: 98,
            nameEn: "",
            nameAr: "مطبخ مجتمعي",
          },
        ],
      },
      {
        id: 99,
        nameEn: "",
        nameAr: "يمام كافيه",
        activity: "مطاعم ، مقاهي",
        subCategories: [
          {
            id: 100,
            nameEn: "",
            nameAr: "يمام كافيه",
          },
        ],
      },
    ];
  }

  getCategoriesByActivity(activity: string[]): Category[] {
    let allCategories = this.getAllCategories();
    let activityCategories = [];

    for (let category of allCategories) {
      if (activity.includes(category.activity)) {
        activityCategories.push(category);
      }
    }
    return activityCategories;
  }

  getCategoryByName(name: string): Category | undefined {
    return this.getAllCategories().find((c) => c.nameAr === name);
  }

  getSubCategoriesByCategories(categories: string[]): SubCategory[] {
    let allCategories = this.getAllCategories();
    let subCategories: SubCategory[] = [];

    for (let category of categories) {
      for (let mainCategoy of allCategories) {
        if (category === mainCategoy.nameAr) {
          subCategories = subCategories.concat(mainCategoy.subCategories);
        }
      }
    }
    return subCategories;
  }

  getCategoryBySubCategory(subCategory: string): Category {
    let allCategories = this.getAllCategories();
    let categoryValue!: Category;

    for (let category of allCategories) {
      for (let sub of category.subCategories) {
        if (sub.nameAr == subCategory || sub.nameEn == subCategory) {
          categoryValue = category;
          break;
        }
      }
    }
    return categoryValue;
  }
}
