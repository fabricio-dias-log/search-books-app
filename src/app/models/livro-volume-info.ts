import { ImageLinks } from "./imageLinks.interface";

export class LivroVolumeInfo {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  previewLink?: string;
  description?: string;
  thumbnail?: ImageLinks;

  constructor(item){
    this.title = item.volumeInfo?.title
    this.authors = item.volumeInfo?.authors
    this.publisher = item.volumeInfo?.publisher
    this.publishedDate = item.volumeInfo?.publishedDate
    this.previewLink = item.volumeInfo?.previewLink
    this.description = item.volumeInfo?.description
    this.thumbnail = item.volumeInfo?.imageLinks?.thumbnail
  }
}
