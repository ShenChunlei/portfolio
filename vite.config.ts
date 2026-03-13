import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => {
  // 核心魔法：如果检测到是在 GitHub Actions 中自动打包，它会自动获取您的仓库名作为基础路径
  const repo = process.env.GITHUB_REPOSITORY;
  const basePath = repo ? `/${repo.split('/')[1]}/` : './';

  return {
    base: basePath,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [dyadComponentTagger(), react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});