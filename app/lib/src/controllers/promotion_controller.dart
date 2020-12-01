class PromotionController {
  String get getAll => """
     query {
        promotions {
          title,
          description,
        },
      } 
  """;
}
