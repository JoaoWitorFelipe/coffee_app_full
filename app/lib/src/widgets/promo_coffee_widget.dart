import 'package:coffee_app/src/models/promotion_model.dart';
import 'package:flutter/material.dart';

class PromoCoffeeWidget extends StatelessWidget {
  final List<PromotionModel> promotions;

  PromoCoffeeWidget(this.promotions);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Container(
          padding: EdgeInsets.symmetric(horizontal: 20.0),
          alignment: Alignment.centerLeft,
          child: Text(
            "Promo",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 22.0,
              fontFamily: 'Chilanka',
            ),
          ),
        ),
        Container(
          height: 100.0,
          child: ListView.separated(
            padding: EdgeInsets.symmetric(horizontal: 20.0),
            separatorBuilder: (context, index) {
              return SizedBox(width: 10.0);
            },
            scrollDirection: Axis.horizontal,
            itemCount: promotions.length,
            itemBuilder: (BuildContext _, int index) {
              final PromotionModel promotion = promotions[index];
              return GestureDetector(
                onTap: () async {
                  await showModalBottomSheet(
                    context: context,
                    backgroundColor: Colors.transparent,
                    builder: (BuildContext _) {
                      return AboutPromoModal(promotion: promotion);
                    },
                  );
                },
                child: Card(
                  child: Container(
                    width: 200.0,
                    child: Container(
                      padding: EdgeInsets.symmetric(
                          horizontal: 20.0, vertical: 10.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: <Widget>[
                          Text(
                            promotion.title,
                            style: TextStyle(
                              fontWeight: FontWeight.w500,
                              color: Colors.white,
                            ),
                          ),
                        ],
                      ),
                    ),
                    decoration: BoxDecoration(
                      image: DecorationImage(
                        fit: BoxFit.cover,
                        image: NetworkImage(
                          promotion.imagePath,
                        ),
                      ),
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }
}

class AboutPromoModal extends StatelessWidget {
  final PromotionModel promotion;
  const AboutPromoModal({Key key, @required this.promotion}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.only(
          topRight: Radius.circular(50.0),
          topLeft: Radius.circular(50.0),
        ),
        color: Color(0xFF613D2B),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Column(
            children: <Widget>[
              SizedBox(height: 30.0),
              CircleAvatar(
                radius: 60.0,
                backgroundImage: NetworkImage(promotion.imagePath),
              ),
              SizedBox(height: 30.0),
              Text(
                promotion.title,
                style: TextStyle(
                  fontSize: 25.0,
                  fontStyle: FontStyle.italic,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
              SizedBox(height: 20.0),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 8.0),
                child: Text(
                  promotion.description,
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 20.0,
                    color: Colors.white,
                  ),
                ),
              ),
            ],
          ),
          Container(
            height: 80.0,
            width: MediaQuery.of(context).size.width,
            child: RaisedButton(
              color: Color(0xFF98867D),
              elevation: 1.0,
              onPressed: () => Navigator.pop(context),
              child: Text(
                "Ok, understand!",
                style: TextStyle(
                  fontSize: 20.0,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                  fontFamily: 'Chilanka',
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
