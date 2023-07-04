import { ProductCreation } from "../models/product-creation.model";
import { Partner } from "./../models/partner.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Constant } from "../utils/constant";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductById(productId: number): Observable<Product> {
    let url = Constant.PRODUCT_INFO.replace("{productId}", productId + "");
    return this.http.get<Product>(url);
  }

  saveProduct(product: ProductCreation) {
    let url = Constant.PRODUCT_CREATION_URL;
    return this.http.post<any>(url, product);
  }

  deleteProduct(productId: number) {
    let url = Constant.PRODUCT_DELETE_URL.replace("{productId}", productId + "");
    return this.http.delete(url);
  }
}
