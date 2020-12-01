class PromotionModel {
  final String title;
  final String description;

  PromotionModel(this.title, this.description);

  PromotionModel.fromJson(Map<String, dynamic> json)
      : title = json['title'],
        description = json['description'];
}
