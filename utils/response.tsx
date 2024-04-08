export interface BaseResponse {
  status: number;
  message: string;
  data: any;
}

export interface LoginResponse {
  Authorize: boolean;
  Role: string;
  UserId: string;
}
