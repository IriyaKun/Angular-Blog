export class Blog {
  id: number;
  title: string;
  details: string;
  author: string;
  datePublished: Date;
  timeToRead: number;

  constructor(id: number, title: string, details: string, author: string, datePublished: Date) {
    this.id = id;
    this.title = title;
    this.details = details;
    this.author = author;
    this.datePublished = datePublished;
  }
}
