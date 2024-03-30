import { ImageLinks } from "./imageLinks.interface";
import { IndustryIdentifier } from "./industryIdentifier.interface";
import { PanelizationSummary } from "./panelizationSummary.interface";
import { ReadingModes } from "./readingModes.interface";

export interface VolumeInfo {
  title: string;
  authors: string[];
  publishedDate: Date;
  description: string;
  industryIdentifiers: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories: string[];
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}
