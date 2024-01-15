import prismadb from "@/lib/prismadb";

import { CategoryForm } from "./components/category-form";
import { Suspense } from "react";
import Loading from "../loading";

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const category = await prismadb.category.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  console.log(params.storeId);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Suspense fallback={<Loading />}>
          <CategoryForm billboards={billboards} initialData={category} />
        </Suspense>
      </div>
    </div>
  );
};

export default CategoryPage;
