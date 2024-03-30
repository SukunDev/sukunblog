import MainLayout from "@/layouts/MainLayout/MainLayout";

export default async function NotFound() {
  return (
    <>
      <MainLayout>
        <div className="mx-auto text-3xl font-semibold capitalize w-fit">
          <h2>NotFound</h2>
        </div>
      </MainLayout>
    </>
  );
}
