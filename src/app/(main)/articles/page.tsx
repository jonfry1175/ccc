import ArticlePage from "@/components/molecules/Homepage/Article";
import { articlesMetadata } from "../metadata";

export const metadata = articlesMetadata;

export default function ArticlesPage() {
  return (
    <main>
      <ArticlePage />
    </main>
  );
}
