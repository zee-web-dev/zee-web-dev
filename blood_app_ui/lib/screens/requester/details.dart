import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class BloodRequesterDetails extends StatelessWidget {
  const BloodRequesterDetails({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: buildAppBar(context),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            Container(
              alignment: Alignment.center,
              padding: const EdgeInsets.symmetric(vertical: 20),
              child: Stack(
                children:  [
                  const CircleAvatar(
                    radius: 55,
                    backgroundImage: AssetImage('assets/avatars/1.png'),
                  ),
                  Positioned(right: 3, bottom: 2, child: SvgPicture.asset('assets/icons/Arabic.svg', height: 26,)),
                ],
              ),
            ),
            Column(
              children:  [
                const Text('Mina Kulas',
                  style: TextStyle(fontSize: 26, fontWeight: FontWeight.w600),),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    SvgPicture.asset('assets/icons/location.svg', height: 12,),
                    Text('as-Sinbillawayn, ad-daqahliyah', style: TextStyle(color: Colors.black.withOpacity(.41), fontSize: 14),)
                  ],),
                Container(
                  margin: const EdgeInsets.only(top: 10, bottom: 30),
                  child: Stack(
                    children: [
                      SvgPicture.asset('assets/icons/distance.svg', width: 66,),
                      Positioned(top: -3, left: 12,  child: Text('725 km', style: TextStyle(fontSize: 12, color: Colors.black.withOpacity(0.41)),)),

                    ],
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Container(
                      height: size.height * 0.1,
                      padding: const EdgeInsets.symmetric(horizontal: 18),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFD1916).withOpacity(0.1),
                        borderRadius: BorderRadius.circular(12)
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          SvgPicture.asset('assets/icons/Drop.svg', height: 28,),
                          Container(
                            margin: const EdgeInsets.only(top: 7,),
                            child: RichText(
                              text: TextSpan(children: [
                                const TextSpan(text: 'AB',
                                    style: TextStyle(color: Colors.black, fontSize: 18, fontWeight: FontWeight.w600)),
                                WidgetSpan(
                                  child: Transform.translate(
                                    offset: const Offset(0, -8),
                                    child: const Text('-',
                                      //superscript is usually smaller in size
                                      textScaleFactor: 0.8,
                                      style: TextStyle(color: Colors.black, fontSize: 16, fontWeight: FontWeight.w600),
                                    ),
                                  ),
                                )
                              ]),
                            ),
                          )
                        ],
                      ),
                    ),
                    Container(
                      height: size.height * 0.1,
                      padding: const EdgeInsets.symmetric(horizontal: 18),
                      decoration: BoxDecoration(
                          color: const Color(0xFF008FCB).withOpacity(0.12),
                          borderRadius: BorderRadius.circular(12)
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          SvgPicture.asset('assets/icons/total_views.svg', height: 23,),
                          Container(
                            margin: const EdgeInsets.only(top: 7),
                            child: const Text('180', style:TextStyle(color: Colors.black, fontSize: 18, fontWeight: FontWeight.w600), ),
                          )
                        ],
                      ),
                    ),
                    Container(
                      height: size.height * 0.1,
                      padding: const EdgeInsets.symmetric(horizontal: 18),
                      decoration: BoxDecoration(
                          color: const Color(0xFF18A73E).withOpacity(0.15),
                          borderRadius: BorderRadius.circular(12)
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          SvgPicture.asset('assets/icons/donations.svg', height: 23,),
                          Container(
                            margin: const EdgeInsets.only(top: 7),
                            child: const Text('15', style:TextStyle(color: Colors.black, fontSize: 18, fontWeight: FontWeight.w600), ),
                          )
                        ],
                      ),
                    ),
                  ],
                ),
                Container(
                  child: donorInfo(),
                ),
                Container(
                  margin: const EdgeInsets.only(bottom: 40, top: 20),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      MaterialButton(
                        shape: RoundedRectangleBorder(borderRadius:  BorderRadius.circular(80.0),),
                        padding: const EdgeInsets.all(0),
                        elevation: 1,
                        child: Ink(
                          padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 38),
                            decoration: BoxDecoration( gradient: const LinearGradient(colors: [Color(0xffFD1916), Color(0xff008FCB)], transform: GradientRotation(230),
                              begin: Alignment.centerLeft,
                              end: Alignment.centerRight,),
                              borderRadius: BorderRadius.circular(40.0)
                          ),
                          child: Row(
                            children: const [
                              Icon(Icons.call, color: Colors.white, size: 28,),
                              Padding(
                                padding: EdgeInsets.only(left: 10),
                                child: Text('010 205 1745', style: TextStyle(color: Colors.white, fontSize: 18),),)
                            ],
                          ),
                        ),
                        onPressed: (){},
                      ),
                      MaterialButton(
                        elevation: 5,
                        padding: const EdgeInsets.all(14),
                        color: const Color(0xffFD1916),
                          shape: const CircleBorder(),
                          child: SvgPicture.asset('assets/icons/Navigation.svg'),
                          onPressed: (){})
                    ],
                  ),
                )

              ],
            )
          ],
        ),
      ),
    );

  }



  Widget donorInfo() => Container(
    margin: const EdgeInsets.symmetric(vertical: 20),
    decoration: BoxDecoration(
      border: Border.all(style: BorderStyle.solid, width: 1, color: const Color(0xFFD9D9D9), )
    ),
    child: Column(
      children: [
        Container(
          padding: const EdgeInsets.symmetric(vertical: 10),
          decoration: const BoxDecoration(
              border: Border(
                bottom: BorderSide(style: BorderStyle.solid, width: 1, color: Color(0xFFD9D9D9),),
              )
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Expanded( child: SvgPicture.asset('assets/icons/gender.svg')),
              Expanded(
                flex: 3,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Gender',
                      style: TextStyle(fontSize: 13, color: const Color(0xFF2C2C2C).withOpacity(0.49)),),
                    const Text('Female',
                      style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),),
                  ],
                ),
              )
            ],
          ),
        ),
        Container(
          padding: const EdgeInsets.symmetric(vertical: 10),
          decoration: const BoxDecoration(
              border: Border(
                bottom: BorderSide(style: BorderStyle.solid, width: 1, color: Color(0xFFD9D9D9),),
              )
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Expanded( child: SvgPicture.asset('assets/icons/gender.svg')),
              Expanded(
                flex: 3,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Gender',
                      style: TextStyle(fontSize: 13, color: const Color(0xFF2C2C2C).withOpacity(0.49)),),
                    const Text('Female',
                      style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),),
                  ],
                ),
              )
            ],
          ),
        ),
        Container(
          padding: const EdgeInsets.symmetric(vertical: 10),
          decoration: const BoxDecoration(
              border: Border(
                bottom: BorderSide(style: BorderStyle.solid, width: 1, color: Color(0xFFD9D9D9),),
              )
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Expanded( child: SvgPicture.asset('assets/icons/gender.svg')),
              Expanded(
                flex: 3,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Gender',
                      style: TextStyle(fontSize: 13, color: const Color(0xFF2C2C2C).withOpacity(0.49)),),
                    const Text('Female',
                      style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),),
                  ],
                ),
              )
            ],
          ),
        ),
        Container(
          padding: const EdgeInsets.symmetric(vertical: 10),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Expanded( child: SvgPicture.asset('assets/icons/gender.svg')),
              Expanded(
                flex: 3,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Gender',
                      style: TextStyle(fontSize: 13, color: const Color(0xFF2C2C2C).withOpacity(0.49)),),
                    const Text('Female',
                      style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),),
                  ],
                ),
              )
            ],
          ),
        ),
      ],
    ),
  );




  AppBar buildAppBar(BuildContext context){
    return AppBar(
      backgroundColor: Colors.white,
      foregroundColor: Colors.black,
      elevation: 0,
      leading: IconButton(
        icon: SvgPicture.asset(
          'assets/icons/back.svg',
          height: 24,
        ),
        onPressed: () {},
      ),
      actions: [
        IconButton(
          icon: SvgPicture.asset(
            'assets/icons/share.svg',
            height: 24,
          ),
          onPressed: () {},
        ),
      ],
    );
  }


}
