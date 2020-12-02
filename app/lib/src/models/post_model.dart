class PostModel {
  final int id;
  final String title;
  final String text;
  final String imagePath;

  PostModel(this.id, this.title, this.text, this.imagePath);

  PostModel.fromJson(Map<String, dynamic> json)
      : id = json['id'],
        title = json['title'],
        text = json['text'],
        imagePath = json['imagePath'];

  static List<PostModel> fromListJson(List<Map<String, dynamic>> listJson) {
    return listJson.map((Map<String, dynamic> json) {
      return PostModel.fromJson(json);
    });
  }
}
