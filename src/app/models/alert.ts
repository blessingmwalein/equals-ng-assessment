export interface Alert {
  type: number;
  message: string;

}

export enum AlertType {
  Error = "error",
  Success = "success",
}
