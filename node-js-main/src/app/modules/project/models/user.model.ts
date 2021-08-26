
import { Base } from "./base.model";
export class User extends Base{
  id:number = 0;
name:string | null = null;
date_of_birth:Date | null = null;
address:string | null = null;
phone_number:number | null = null;
version:number | null = null;
created_on:Date | null = null;
modified_on:Date | null = null;
is_active: boolean = false;
}
export class UserWrapper extends User{
  version_name: string | null = null;
  req_id: number | null = null;
}

