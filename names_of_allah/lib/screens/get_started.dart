import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:names_of_allah/utils/constants.dart';
import 'package:names_of_allah/widgets/TextWidget.dart';

class GetStarted extends StatelessWidget {
  const GetStarted({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            SizedBox(height: 86.h,),
            Container(
              alignment: Alignment.center,
              padding: EdgeInsets.symmetric(horizontal: 89.w),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  TextWidget(data: 'Quran App', textColor: kHeadingColor, textSize: 28.sp, textWeight: FontWeight.w600,),
                  SizedBox(height: 18.h,),
                  TextWidget(data: 'Learn Quran and', textColor: kTextColor, textSize: 18.sp,),
                  TextWidget(data: 'Recite once everyday', textColor: kTextColor, textSize: 18.sp,),
                ],
              ),
            ),
            SizedBox(height: 49.h,),
            Container(
              padding: EdgeInsets.symmetric(horizontal: 30.w),
              height: 473.h,
              child: Container(
                child: Stack(
                  children: [
                    Container(
                      width: double.infinity,
                      height: 450.h,
                      decoration: const BoxDecoration(
                        color: Color(0xff672CBC),
                        borderRadius: BorderRadius.all(Radius.circular(30.0)),
                        image: DecorationImage(
                          image: AssetImage('assets/images/StartScreen.png')
                        )
                      ),
                    ),
                    Positioned(
                        bottom: 0,
                        right: 0,
                        left: 0,
                        child: Container(
                          alignment: Alignment.center,
                          child: SizedBox(
                            width: 185.w,
                            height: 60.h,
                            child: ElevatedButton(
                              onPressed: () {},
                              style: ElevatedButton.styleFrom(
                                  primary: Color(0xffF9B091),
                                  elevation: 0,
                                  shape: RoundedRectangleBorder(
                                    borderRadius: BorderRadius.circular(30)
                                  ),
                                  // padding: EdgeInsets.symmetric(horizontal: 50, vertical: 20),
                                  textStyle: const TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.normal)),
                              child: const Text('Get Started'),
                            ),
                          ),
                        )
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
