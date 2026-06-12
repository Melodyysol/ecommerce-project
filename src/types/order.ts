export type Order = {
  id: number;
  name: string;
  address: string;
  products: number;
  cost: string;
  date: string;
};

export type OrderPageProps = {
  orders: Order[];
};
