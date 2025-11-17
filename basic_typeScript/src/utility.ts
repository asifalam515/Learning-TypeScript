// utility types
type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type ProductSummary = Pick<Product, "id" | "name" | "price">;
type ProductWithoutStock = Omit<Product, "stock">;
type ProductWithColor = Required<Product>;
const product: ProductWithColor = {
  id: 22,
  name: "asi",
  color: "red",
  price: "12",
  stock: 121,
};
type OptionalProduct = Partial<Product>;
type ProductReadOnly = Readonly<Product>;
