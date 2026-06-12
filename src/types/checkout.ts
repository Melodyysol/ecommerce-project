import type { Order } from "./order";

export type CheckoutPageProps = {
  isShipping: boolean;
  setOrder: React.Dispatch<React.SetStateAction<Order[]>>;
};

export type CheckoutFormData = {
  name: string;
  address: string;
};
