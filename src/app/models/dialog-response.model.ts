import { Contact } from "./contact.model";

export interface DialogResponse {
  success: boolean;
  newContact?: Contact;
}