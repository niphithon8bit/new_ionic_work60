import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class FoodTypeService {

  private url:string = "http://localhost:3000";
  constructor(
    private http:Http
  ) { }

  get_all_food_type_data(){
    return this.http.get(this.url + "/foodtype").map((res) => res.json());
  }

  insert_food_type_data(name_th:string,name_en:string){
    let data = {
      "ft_name_th": name_th,
      "ft_name_en": name_en,
      "ft_status": "Y",
      "ft_user_update": "55"
    }
    return this.http.post(this.url + "/foodtype",data).map((res) => res.json());
  }

  delete_food_type_data(ft_id:string){
    return this.http.delete(this.url + "/foodtype/" + ft_id).map((res) => res.json());
  }

  update_food_type_status(ft_id:string,ft_status:boolean){
    let data = {
      "ft_status": (ft_status == false ? "N" : "Y")
    }
    return this.http.put(this.url + "/foodtype/" + ft_id,data).map((res) => res.json());
  }

  update_food_type_data(ft_id:string,ft_name_th:string,ft_name_en:string){
    let data = {
      "ft_name_th": ft_name_th,
      "ft_name_en": ft_name_en
    }
    return this.http.put(this.url + "/foodtype/update/" + ft_id,data).map((res) => res.json());
  }
}
