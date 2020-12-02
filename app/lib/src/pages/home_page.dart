import 'package:coffee_app/src/controllers/home_controller.dart';
import 'package:coffee_app/src/models/post_model.dart';
import 'package:coffee_app/src/models/promotion_model.dart';
import 'package:coffee_app/src/widgets/post_widget.dart';
import 'package:coffee_app/src/widgets/promo_coffee_widget.dart';
import 'package:coffee_app/src/widgets/search_app_bar_widget.dart';
import 'package:flutter/material.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final HomeController _controller = HomeController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Query(
        options: QueryOptions(
          documentNode: gql(_controller.getPromotionsAndPosts),
        ),
        builder: (result, {fetchMore, refetch}) {
          if (result.hasException) {
            return Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(result.exception.toString()),
                  RaisedButton(
                    child: Text('Try again...'),
                    onPressed: refetch,
                  ),
                ],
              ),
            );
          }

          if (result.loading) {
            return Center(child: CircularProgressIndicator());
          }

          final _data = result.data;

          final _posts = List.from(_data['posts'])
              .map((json) => PostModel.fromJson(json))
              .toList();

          final _promotions = List.from(_data['promotions'])
              .map((json) => PromotionModel.fromJson(json))
              .toList();

          return ListView(
            children: <Widget>[
              SearchAppBarWidget(),
              SizedBox(height: 10.0),
              PromoCoffeeWidget(_promotions),
              SizedBox(height: 30.0),
              PostWidget(_posts),
            ],
          );
        },
      ),
    );
  }
}
