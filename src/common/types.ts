export interface User {
  id: number | null;
  name: string;
  email: string;
}
export interface enumValues {
  name: string;
}
export interface FieldSchema {
  as: string;
  name: string;
  label: string;
  //children?: Array<{
  //tag?: string; // the tag that will be rendered
  //text?: string; // a text content (optional)
  //[k: string]: any; // any additional attributes
  //}>;
  enumValues?: enumValues[];
  [k: string]: any;
}
export interface FormSchema {
  fields: FieldSchema[];
  validation: any;
}
