import { Suspense } from "react";
import ProductsClient from "./ProductsClient";
import Container from "@/src/Components/Container";

export default function Page() {
  return (
    <Suspense fallback={<Container><div>Loading products...</div></Container>}>
      <ProductsClient />
    </Suspense>
  );
}