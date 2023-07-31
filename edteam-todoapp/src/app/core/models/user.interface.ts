import { RolInterface } from "./rol.interface";

export interface UserInterface{
  id:string;
  name:string;
  age:number;
  rol:RolInterface[];
}
