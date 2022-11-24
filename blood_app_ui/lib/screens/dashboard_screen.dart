import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Dashboard extends StatelessWidget {
  const Dashboard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {

    // Size size = MediaQuery.of(context).size;

    dashboardCard(svgUrl, heading, text) =>
        Container(
          padding: const EdgeInsets.only(top: 24, bottom: 18, left: 18, right: 32),
          // width: size.width * 0.4,
          decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(22),
              border: Border.all(color: const Color(0xFFD2D2D2),)),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SvgPicture.asset('assets/icons/$svgUrl'),
              Container(
                margin: const EdgeInsets.only(top: 10),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(heading,
                        style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 20)),
                    Text(text,),
                  ],
                ),
              ),

            ],
          ),
        );


    return Scaffold(
      backgroundColor: Colors.transparent,
      appBar: AppBar(
        leading: IconButton(
          icon: Image.asset(
            'assets/images/side_menu.png',
            height: 15,
          ),
          onPressed: () {},
        ),
        title: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Stack(children: [
              Container(
                margin: const EdgeInsets.only(right: 15),
                child: SvgPicture.asset('assets/icons/notification.svg',
                    height: 30),
              ),
              Positioned(
                  left: 10,
                  top: -0.3,
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 5, vertical: 1),
                    decoration: BoxDecoration(
                        color: Colors.red,
                        borderRadius: BorderRadius.circular(50)),
                    child: const Text(
                      '3',
                      style: TextStyle(color: Colors.white, fontSize: 10),
                    ),
                  ))
            ]),
            SvgPicture.asset(
              'assets/icons/profile.svg',
              height: 30,
            ),
          ],
        ),
        backgroundColor: Colors.white,
        foregroundColor: Colors.black,
        elevation: 0,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Flexible(
              flex: 1,
              fit: FlexFit.loose,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('Give the gift of life'.toUpperCase(),
                    style: const TextStyle(fontSize: 25,),
                  ),
                  Text.rich(
                      TextSpan(text: 'Donate '.toUpperCase(),
                        style: const TextStyle(
                            fontSize: 36, fontWeight: FontWeight.w600),
                        children: const [
                          TextSpan(
                            text: 'Blood', style: TextStyle(color: Colors.red),)
                        ],
                      ))
                ],
              )),
          Flexible(
            flex: 4,
            fit: FlexFit.loose,
            child: GridView.count(
              primary: false,
              shrinkWrap: true,
              padding: const EdgeInsets.all(20),
              crossAxisSpacing: 10,
              mainAxisSpacing: 10,
              crossAxisCount: 2,
              children: <Widget>[
                dashboardCard('blood_donor.svg', 'Donors', '30 in your city'),
                dashboardCard('blood_donor.svg', 'Donors', '30 in your city'),
                dashboardCard('blood_donor.svg', 'Donors', '30 in your city'),
                dashboardCard('blood_donor.svg', 'Donors', '30 in your city'),
                dashboardCard('blood_donor.svg', 'Donors', '30 in your city'),
                dashboardCard('blood_donor.svg', 'Donors', '30 in your city'),
                dashboardCard('blood_donor.svg', 'Donors', '30 in your city'),
                dashboardCard('blood_donor.svg', 'Donors', '30 in your city'),
                dashboardCard('blood_donor.svg', 'Donors', '30 in your city'),
                dashboardCard('blood_donor.svg', 'Donors', '30 in your city'),
              ],

            ),
          ),
        ],
      ),
    );
  }
}
