import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'dart:ui';


class BloodDonorsList extends StatelessWidget {
  const BloodDonorsList({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {

    Size size = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: buildAppBar(context),
      body: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            Container(
              // color: Colors.blue,
              padding: const EdgeInsets.symmetric(vertical: 40, horizontal: 14),
              child: SizedBox(
                height: 100,
                child: Stack(
                  children: [
                    Drop('A', '+'),
                    Positioned(top: 32, left: size.width * 0.11, child: Drop('B', '+')),
                    Positioned(top: 0, left: size.width * 0.22, child: Drop('A', '-')),
                    Positioned(top: 32, left: size.width * 0.33, child: Drop('B', '-')),
                    Positioned(top: 0, left: size.width * 0.44, child: Drop('AB', '+')),
                    Positioned(top: 32, left: size.width * 0.55, child: filledDrop('AB', '-')),
                    Positioned(top: 0, left: size.width * 0.66, child: Drop('O', '+')),
                    Positioned(top: 32, left: size.width * 0.77, child: Drop('O', '-')),
                    // Drop('A', '-')
                  ],
                ),
              ),
            ),
            const Padding(
              padding: EdgeInsets.only(left: 30, bottom: 20),
              child: Text('All Blood Donors', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600),),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 14),
              child: Column(
                children: [
                  donorCard(),
                  Container(
                    margin: const EdgeInsets.only(top: 20),
                    child: donorCard(),
                  ),
                  Container(
                    margin: const EdgeInsets.only(top: 20),
                    child: donorCard(),
                  ),
                  Container(
                    margin: const EdgeInsets.only(top: 20),
                    child: donorCard(),
                  ),
                  Container(
                    margin: const EdgeInsets.only(top: 20),
                    child: donorCard(),
                  ),
                  Container(
                    margin: const EdgeInsets.only(top: 20),
                    child: donorCard(),
                  ),
                  Container(
                    margin: const EdgeInsets.only(top: 20),
                    child: donorCard(),
                  ),
                  Container(
                    margin: const EdgeInsets.only(top: 20),
                    child: donorCard(),
                  ),
                ],
              ),
            )
          ],
        ),
      )
    );
  }


  Widget Drop(group, sign) => Container(
    height: 60,
    width: 48,
    decoration: const BoxDecoration(
      image: DecorationImage(
          image: AssetImage('assets/images/Drop.png'),
          fit: BoxFit.contain
      ),
    ),
    child: Center(
      child: RichText(
        text: TextSpan(children: [
          TextSpan(
              text: group,
              style: const TextStyle(color: Colors.black, fontSize: 18, fontWeight: FontWeight.w600)),
          WidgetSpan(
            child: Transform.translate(
              offset: const Offset(0, -8),
              child: Text(
                sign,
                //superscript is usually smaller in size
                textScaleFactor: 0.8,
                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
              ),
            ),
          )
        ]),
      ),),
  );

  Widget filledDrop(group, sign) => Container(
    height: 60,
    width: 48,
    decoration: const BoxDecoration(
      image: DecorationImage(
          image: AssetImage('assets/images/Drop_Filled.png'),
          fit: BoxFit.contain
      ),
    ),
    child: Center(
      child: RichText(
        text: TextSpan(children: [
          TextSpan(
              text: group,
              style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w600)),
          WidgetSpan(
            child: Transform.translate(
              offset: const Offset(0, -8),
              child: Text(
                sign,
                //superscript is usually smaller in size
                textScaleFactor: 0.8,
                style: const TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w600),
              ),
            ),
          )
        ]),
      ),
    ),
  );

  Widget filledDropSmall(group, sign) => Container(
    height: 45,
    width: 35,
    decoration: const BoxDecoration(
      image: DecorationImage(
          image: AssetImage('assets/images/Drop_Filled.png'),
          fit: BoxFit.contain
      ),
    ),
    child: Center(
      child: RichText(
        text: TextSpan(children: [
          TextSpan(
              text: group,
              style: const TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w600)),
          WidgetSpan(
            child: Transform.translate(
              offset: const Offset(0, -8),
              child: Text(
                sign,
                //superscript is usually smaller in size
                textScaleFactor: 0.8,
                style: const TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w600),
              ),
            ),
          )
        ]),
      ),
    ),
  );

  Widget donorCard() => Container(
    padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 10),
    decoration: BoxDecoration(
      color: Colors.white,
      border: Border.all(color: const Color(0xFFF2F2F2), width: 1),
      borderRadius: BorderRadius.circular(18),
      boxShadow: const [BoxShadow(color: Color(0xFFF2F2F2), blurRadius: 4, spreadRadius: 1)]
    ),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Stack(
          children:  [
            const CircleAvatar(
              radius: 30,
              backgroundImage: AssetImage('assets/avatars/1.png'),
            ),
            Positioned(right: 0, bottom: 0, child: SvgPicture.asset('assets/icons/Arabic.svg')),
          ],
        ),
        Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Reinhold Crona', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),),
            Row(
              children: [
                SvgPicture.asset('assets/icons/location.svg', height: 12,),
                Text('as-Sinbillawayn', style: TextStyle(color: Colors.black.withOpacity(.41), fontSize: 13),)
              ],),
            Row(children: [
              Row(
                children: [
                  SvgPicture.asset('assets/icons/views.svg', height: 7,),
                  Text('120', style: TextStyle(color: Colors.black.withOpacity(.41), fontSize: 10),)
                ],),
              Container(
                margin: const EdgeInsets.only(left: 10),
                child: Row(
                  children: [
                    SvgPicture.asset('assets/icons/user.svg', height: 10,),
                    Text('120', style: TextStyle(color: Colors.black.withOpacity(.41), fontSize: 10),)
                  ],),
              ),
            ],)
          ],
        ),
        Stack(
          children: [
            SvgPicture.asset('assets/icons/distance.svg', width: 66,),
            Positioned(top: -3, left: 12,  child: Text('725 km', style: TextStyle(fontSize: 12, color: Colors.black.withOpacity(0.41)),)),

          ],
        ),
        filledDropSmall('AB', '-')
      ],
    ),
  );

  AppBar buildAppBar(BuildContext context){
    return AppBar(
      leading: IconButton(
        icon: SvgPicture.asset(
          'assets/icons/back.svg',
          height: 24,
        ),
        onPressed: () {},
      ),
      titleSpacing: 0,
      title: Container(
          margin: const EdgeInsets.only(right: 12),
          // color: Colors.red,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            // crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Flexible(flex: 2, child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Blood Donor', style: TextStyle(fontWeight: FontWeight.w600),),
                  Text('30 in your city', style: TextStyle(fontSize: 12, color: Colors.black.withOpacity(0.42)),),
                ],
              )),
              Flexible(child: Row(
                children: [
                  Container(
                    width: 40,
                    height: 40,
                    margin: const EdgeInsets.only(right: 8),
                    padding: const EdgeInsets.all(9),
                    decoration: BoxDecoration(
                      color: const Color(0xFF008FCB).withOpacity(0.09), borderRadius: BorderRadius.circular(50),
                    ),
                    child: SvgPicture.asset('assets/icons/filter.svg'),
                  ),
                  Container(
                    width: 40,
                    height: 40,
                    padding: const EdgeInsets.all(6),
                    decoration: BoxDecoration(
                      color: const Color(0xFFFD1916).withOpacity(0.09), borderRadius: BorderRadius.circular(50),
                    ),
                    child: SvgPicture.asset('assets/icons/wifi.svg'),
                  ),
                ],
              ))
            ],
          )
      ),
      backgroundColor: Colors.white,
      foregroundColor: Colors.black,
      elevation: 0,
    );
  }


}

