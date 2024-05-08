import { Injectable } from "@nestjs/common";
import { userDTO } from "./dto";

@Injectable()
class UserService{
  private service = new Map<number,userDTO>();

  addUser(user:userDTO){
    this.service.set(user.id,user);
  }

  getUser(id:number){
      return this.service.get(id);
  }

  getUsers(){
    return Array.from(this.service).map((_, user ) => user);
  }

  UpdateUser(id:number, user:userDTO){
      this.service.set(id,user);
  }
  DeleteUser(id : number){
    this.service.delete(id);
  }
}

export {UserService}