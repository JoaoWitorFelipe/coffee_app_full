import 'package:coffee_app/src/widgets/post_widget.dart';
import 'package:coffee_app/src/widgets/promo_coffee_widget.dart';
import 'package:coffee_app/src/widgets/search_app_bar_widget.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: <Widget>[
          SearchAppBarWidget(),
          SizedBox(height: 10.0),
          PromoCoffeeWidget(),
          SizedBox(height: 30.0),
          PostWidget(),
        ],
      ),
    );
  }
}
