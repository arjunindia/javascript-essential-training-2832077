class Book {
  constructor(bookName, pubYear, bookId, readPage, readStatus) {
    this.bookName = bookName;
    this.pubYear = pubYear;
    this.bookId = bookId;
    this.readPage = readPage;
    this.readStatus = readStatus;
  }
  updatePage(newReadPage) {
    this.readPage = newReadPage;
  }
  updateStatus(newStatus) {
    this.readStatus = newStatus;
  }
}
export default Book;
