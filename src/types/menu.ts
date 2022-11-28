import type { RouteObject } from "react-router-dom";

export namespace MenuTypes {
  export type RouteItem = RouteObject & {
    meta?: {
      auth?: boolean;
      title?: string;
    };
    children?: RouteItem[];
  };

  export interface NavMenuItem {
    itemKey: string;
    text: string;
    path?: string;
    icon?: any;
    items?: NavMenuItem[];
  }
}
