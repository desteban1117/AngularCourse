

export class AuthorsService {

  title = "Athors";
  listAuthors = ["Author1", "Author2", "Author3"];

  getTitle(){
    return this.title;
  }

  getListAuthors(){
    return this.listAuthors;
  }

}
