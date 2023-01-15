export interface BBQProduct {
  id?: any;
  name: string;
  desc: string;
  price: number;
  img: string;
}
export interface CheckoutData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: number;
}
export interface OrderBbq {
  cartData?: any;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: number;
}
