import 'package:flutter/foundation.dart';
import 'package:graphql_flutter/graphql_flutter.dart';

class MainController {
  final HttpLink _link = HttpLink(uri: "http://192.168.1.110:3000/");

  ValueNotifier<GraphQLClient> get clientGraphQl =>
      ValueNotifier(GraphQLClient(cache: InMemoryCache(), link: _link));
}
