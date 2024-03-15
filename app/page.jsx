import AllArticle from "@/components/allArticle";
import AppLayouts from "@/components/layouts/appLayouts";

export default function Home() {
  return (
    <>
      <AppLayouts>
        <div className="mx-auto text-3xl font-semibold capitalize w-fit">
          <h2>explore article</h2>
        </div>
        <AllArticle />
      </AppLayouts>
    </>
  );
}
