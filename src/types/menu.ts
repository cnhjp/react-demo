import type { RouteObject } from "react-router-dom";
import { UserEnums } from "../enums";

export namespace MenuTypes {
  export type RouteItem = RouteObject & {
    meta?: {
      auth?: boolean;
      title?: string;
      roles?: UserEnums.ROLE_TYPE[];
    };
    children?: RouteItem[];
  };

  export interface NavMenuItem {
    itemKey: string;
    text: string;
    path?: string;
    icon?: any;
    items?: NavMenuItem[];
    roles: Array<UserEnums.ROLE_TYPE>;
  }
}
