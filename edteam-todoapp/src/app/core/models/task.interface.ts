import { AuthorInterface } from "./author.interface";
import { UserInterface } from "./user.interface";

export interface TaskInterface{
  id:string | number; //TODO: '1' , 1
  title:string;
  tags:string[]; //TODO: important, marketing
  user:UserInterface;
  status:'in-progress' | 'completed' | 'wait';
}
