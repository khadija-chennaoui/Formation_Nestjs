export interface IServiceResponse<T> {
  state: string;
  data?: T;
  message: string;

  setData(data: T): IServiceResponse<T>;
  setMessage(mssg: string): IServiceResponse<T>;
  setState(state: string): IServiceResponse<T>;
}

export class ServiceResponse<T> {
  state: string;
  data?: T;
  message: string;

  setData(data: T): ServiceResponse<T> {
    this.data = data;
    return this;
  }

  setMessage(message: string): ServiceResponse<T>{
    this.message= message
    return this
  }

  setState(state: string):ServiceResponse<T>{
    this.state = state
    return this
  }
}
