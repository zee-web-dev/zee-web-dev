import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class RequesterProfile extends StatelessWidget {
  const RequesterProfile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;


    return DefaultTabController(
      length: 3,
      child: Scaffold(
        backgroundColor: Colors.white,
        appBar: buildAppBar(context),
        body: Column(
          children: <Widget>[
            Flexible(
              flex: 2,
              child: Column(
                children: [
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
                ],
              ),
            ),
            Flexible(
                child: TabBar(
                  // splashBorderRadius: BorderRadius.all(Radius.circular(6)),
                  // overlayColor: Colors.green,
                  labelColor: Colors.black,
                  isScrollable: true,
                  labelPadding: const EdgeInsets.symmetric(horizontal: 10.0,),
                  indicatorPadding: EdgeInsets.zero,
                  indicator: const UnderlineTabIndicator(
                      borderSide: BorderSide(width: 2.0, color: Color(0xffFD1916)),
                      insets: EdgeInsets.symmetric(horizontal:12.0)
                  ),
                  indicatorSize: TabBarIndicatorSize.label,

                  tabs: [
                    Tab(
                      child: tabLabel('Basic Info'),
                    ),
                    Tab(
                      child: tabLabel('Blood Request'),
                    ),
                    Tab(
                      child: tabLabel('Blood Request'),
                    ),
                  ],
                ),
            ),
            Flexible(child: TabBarView(
              children: [
                Container(
                  height: 200,
                  color: Colors.green,
                ),
                Container(
                  height: 200,
                  color: Colors.black,
                ),
                Container(
                  height: 200,
                  color: Colors.blue,
                ),
              ],
            ))
          ],
        ),
      ),
    );
  }

  Widget tabLabel(title) => Container(
    height: double.infinity,
    padding: const EdgeInsets.symmetric(horizontal: 20),
    decoration:  BoxDecoration(
        color: const Color(0xffFD1916).withOpacity(0.2),
        borderRadius: BorderRadius.circular(12.0)
    ),
    child: Row(
      children:  [
        Container( margin: const EdgeInsets.only(right: 10) ,child: SvgPicture.asset('assets/icons/28611.svg')),
        Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.normal),),
      ],
    ),
  );

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
