import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:names_of_allah/utils/constants.dart';
import 'package:names_of_allah/widgets/TextWidget.dart';

class Dashboard extends StatelessWidget {
  const Dashboard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: buildAppBar(context),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            SizedBox(height: 24.h,),
            Container(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const TextWidget(data: 'Asslamualaikum', textColor: kTextColor,  ),
                  TextWidget(data: 'Tanvir Ahassan', textColor: kSubheadingColor, textSize: 24.sp, textWeight: FontWeight.w600, ),
                ],
              ),
            ),
            SizedBox(height: 24.h,),
            Container(
              padding: EdgeInsets.all(30),
              width: 326.w,
              height: 191.h,
              decoration: BoxDecoration(
                // gradient: const LinearGradient(
                //   colors:[Color(0xffDF98FA), Color(0xff9055FF)],
                //   transform: GradientRotation(290)
                // ),
                color: Colors.white,
                boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 5, spreadRadius: -1 )],
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: Colors.black12)
              ),
              child: Row(
                // mainAxisAlignment: MainAxisAlignment.end,
                // crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Image.asset('assets/images/mecca.png', height: 120.h,),
                ],
              ),
            ),
            SizedBox(height: 24.h,),
            Container(
              padding: EdgeInsets.all(30),
              width: 326.w,
              height: 191.h,
              decoration: BoxDecoration(
                  // gradient: const LinearGradient(
                  //     colors:[Color(0xffDF98FA), Color(0xff9055FF)],
                  //     transform: GradientRotation(290)
                  // ),
                  color: Colors.white,
                  boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 5, spreadRadius: -1 )],
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: Colors.black12)
              ),
              child: Row(
                // mainAxisAlignment: MainAxisAlignment.start,
                // crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Image.asset('assets/images/abc.png', height: 120.h, ),
                ],
              ),
            ),
            // Container(
            //   width: 326.w,
            //   height: 151.h,
            //   decoration: BoxDecoration(
            //     gradient: const LinearGradient(
            //       colors:[Color(0xffDF98FA), Color(0xff9055FF)],
            //       transform: GradientRotation(290)
            //     ),
            //     borderRadius: BorderRadius.circular(10)
            //   ),
            //   child: Row(
            //     children: [
            //       Image.asset('assets/images/madina.png', height: 120.h, ),
            //     ],
            //   ),
            // ),
          ],
        ),
      ),
    );
  }


  AppBar buildAppBar(BuildContext context){
    return AppBar(
      leading: Image.asset('assets/icons/menu-2-line.png',),
      title: TextWidget(data: 'Quran App', textColor: kHeadingColor, textSize: 20.sp, textWeight: FontWeight.w600,),
      elevation: 0,
      backgroundColor: Colors.white,
    );
  }

}
