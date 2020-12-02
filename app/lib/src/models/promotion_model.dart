class PromotionModel {
  final String title;
  final String description;
  final String imagePath;

  PromotionModel(this.title, this.description, this.imagePath);

  PromotionModel.fromJson(Map<String, dynamic> json)
      : title = json['title'],
        imagePath = json['imagePath'],
        description = json['description'];

  static List<PromotionModel> fromListJson(
      List<Map<String, dynamic>> listJson) {
    return listJson.map((Map<String, dynamic> json) {
      return PromotionModel.fromJson(json);
    });
  }
}
