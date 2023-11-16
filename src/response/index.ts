import { constant } from './constant';
import { IServiceResponse, ServiceResponse } from './service.response';
export function SuccesResponse(data: any = {}): IServiceResponse<any> {
  const response = new ServiceResponse();
  response.state = constant.SUCCESS;
  response.data = data;
  response.message = constant.SUCCESS;
  return response;
}

export function BadResponse(message: string = ''): IServiceResponse<any> {
  const response = new ServiceResponse();
  response.state = constant.BED_REQ;
  response.data = null;
  response.message = message || constant.BED_REQ;
  return response;
}

export function ErrorResponse(message: string = ''): IServiceResponse<any> {
  const response = new ServiceResponse();
  response.state = constant.ERROR;
  response.data = null;
  response.message = message || constant.ERROR;
  return response;
}
