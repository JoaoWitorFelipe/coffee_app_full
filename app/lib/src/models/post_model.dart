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
}
