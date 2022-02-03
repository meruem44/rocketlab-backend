export interface ICreateArticleDTO {
  title: string;
  author: string;
  time_ready: number;
  url: string;
  thumbnail: string;
  category: "frontend" | "mobile" | "backend";
}
