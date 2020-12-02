import 'package:coffee_app/src/models/post_model.dart';
import 'package:coffee_app/src/pages/details_blog_page.dart';
import 'package:flutter/material.dart';

class PostWidget extends StatelessWidget {
  final List<PostModel> posts;

  PostWidget(this.posts);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 20.0),
      height: 500.0,
      child: Column(
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Text(
                "Blog",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 20.0,
                  fontFamily: 'Chilanka',
                ),
              ),
              FlatButton(
                onPressed: () {},
                child: Text(
                  "View all",
                  style: TextStyle(
                    fontFamily: 'Chilanka',
                  ),
                ),
              ),
            ],
          ),
          Expanded(
            child: ListView.builder(
              itemCount: posts.length,
              itemBuilder: (BuildContext _, int index) {
                final _postModel = posts[index];
                return Column(
                  children: <Widget>[
                    SizedBox(height: 10.0),
                    Hero(
                      tag: _postModel.id,
                      child: Container(
                        height: 80.0,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(16.0),
                          image: DecorationImage(
                            fit: BoxFit.cover,
                            image: NetworkImage(_postModel.imagePath),
                          ),
                        ),
                      ),
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: <Widget>[
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Text(
                              _postModel.title,
                              style: TextStyle(
                                fontSize: 14.0,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            SizedBox(height: 5.0),
                            Text(_postModel.text),
                          ],
                        ),
                        OutlineButton(
                          borderSide: BorderSide(width: 1.0),
                          child: Text(
                            "Read more",
                            style: TextStyle(
                              fontFamily: 'Chilanka',
                            ),
                          ),
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (_) => DetailsBlogPage(
                                  postModel: _postModel,
                                ),
                              ),
                            );
                          },
                        ),
                      ],
                    ),
                  ],
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
