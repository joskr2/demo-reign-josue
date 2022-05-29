export interface IArticle {
  id: number;
  timeAndAuthor  : string;
  description: string;
  url: string;
}

export interface IArticleList {
  articles: IArticle[];
}