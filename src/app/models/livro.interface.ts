import { AccessInfo } from "./accessInfo.interface";
import { ImageLinks } from "./imageLinks.interface";
import { SaleInfo } from "./saleInfo.interface";
import { SearchInfo } from "./searchInfo.interface";
import { VolumeInfo } from "./volumeInfo.interface";

export interface Livro {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  previewLink?: string;
  thumbnail?: ImageLinks;
}
export interface Livros {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}
