import { UserEnums } from "../enums";

export namespace UserTypes {
  export interface RoleType {
    id: number;
    name: string;
    roleType: UserEnums.ROLE_TYPE;
  }
}
