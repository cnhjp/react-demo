import type { RouteObject } from "react-router-dom";

export type RouteItem = {
  meta?: {
    auth?: boolean;
    title?: string;
  };
  children?: RouteItem[];
} & RouteObject;

export interface NavMenuItem {
  itemKey: string;
  text: string;
  path?: string;
  icon?: any;
  items?: NavMenuItem[];
}
