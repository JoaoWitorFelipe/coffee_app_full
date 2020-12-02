class HomeController {
  String get getPromotionsAndPosts => """
     query {
        promotions {
          title,
          description,
          imagePath,
        },
        posts {
          id,
          imagePath,
          text,
          title
        },
      } 
  """;
}
