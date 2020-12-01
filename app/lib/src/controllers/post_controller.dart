class PostController {
  String get getAll => """
     query {
        posts {
          id,
          imagePath,
          text,
          title
        },
      } 
  """;
}
