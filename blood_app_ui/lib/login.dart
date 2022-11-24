import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_svg/flutter_svg.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({Key? key}) : super(key: key);


  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/images/BG.png'),
            fit: BoxFit.cover,
          )
      ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        body: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(height: 27.h,),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 22.w),
                child: langDropDown(),
              ),
              SizedBox(height: 308.h,),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 41.w),
                child: mainForm(),
              )
            ],
          ),
        ),
      ),
    );
  }


  Widget mainForm() => Column(
    crossAxisAlignment: CrossAxisAlignment.stretch,
    children: [
      Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text('Login/Register', style: TextStyle(fontSize: 22.sp),),
          Text('Please Select Your Login Method To Continue', style: TextStyle(fontSize: 12.sp),),
        ],
      ),
      SizedBox(height: 43.h,),
      Text('Register with phone :', style: TextStyle(fontSize: 12.sp),),
      Container(
        margin: EdgeInsets.only(top: 9.h),
        height: 50.h,
        padding: EdgeInsets.symmetric(vertical: 7.h, horizontal: 9.w),
        decoration: BoxDecoration(
          color: Colors.white,
          border: Border.all(color: Color(0xff707070)),
          borderRadius: BorderRadius.circular(30.0)
        ),
        child: Row(
          children: [
            Expanded(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  SvgPicture.asset('assets/icons/Arabic.svg', height: 34.h,),
                  Text('English', style: TextStyle(fontSize: 12.sp),),
                  const Icon(Icons.arrow_drop_down_outlined, size: 15,),
                ],
              ),
            ),
            const Expanded(flex: 2,
                child: TextField(
                  decoration: InputDecoration(
                    border: InputBorder.none
                  ),
                ))
          ],
        ),
      ),
      SizedBox(height: 18.h,),
      Container(
        height: 50.h,
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(50),
            gradient: const LinearGradient(colors: [Color(0xffFD1916), Color(0xff008FCB)], transform: GradientRotation(160),
              begin: Alignment.centerLeft,
              end: Alignment.centerRight,)
        ),
        child: TextButton(
          onPressed: (){},
          style: TextButton.styleFrom(
            shape: const RoundedRectangleBorder(
              borderRadius: BorderRadius.all(Radius.circular(50.0)),
            ),
            padding: EdgeInsets.zero,
          ),
          child: Center(child: Text('Send Code', style: TextStyle(fontSize: 15.sp, color: Colors.white),)),
        ),
      ),
      SizedBox(height: 26.h,),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
            flex: 2,
            child: Container(
              height: 1.h,
              decoration: BoxDecoration(
                border: Border.all(color: Color(0xff707070)),
              ),
            ),
          ),
          Expanded(child: Center(child: Text('OR', style: TextStyle(fontSize: 13.h),))),
          Expanded(
            flex: 2,
            child: Container(
              height: 1.h,
              decoration: BoxDecoration(
                border: Border.all(color: Color(0xff707070)),
              ),
            ),
          ),
        ],
      ),
      SizedBox(height: 25.h,),
      Container(
        height: 50.h,
        decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(color: Color(0xff707070)),
            borderRadius: BorderRadius.circular(30.0)
        ),
        child: TextButton(
          onPressed: (){},
          style: ElevatedButton.styleFrom(
            padding: EdgeInsets.zero,
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SvgPicture.asset('assets/icons/Facebook.svg', height: 27.h,),
              SizedBox(width: 50.w,),
              Center(child: Text('Connect with Facebook', style: TextStyle(fontSize: 14.sp, color: Colors.black),)),
            ],
          ),
        ),
      ),
      SizedBox(height: 25.h,),
      Container(
        height: 50.h,
        decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(color: Color(0xff707070)),
            borderRadius: BorderRadius.circular(30.0)
        ),
        child: TextButton(
          onPressed: (){},
          style: ElevatedButton.styleFrom(
            padding: EdgeInsets.zero,
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              SvgPicture.asset('assets/icons/Google.svg', height: 27.h,),
              SizedBox(width: 50.w,),
              Center(child: Text('Connect with Google', style: TextStyle(fontSize: 14.sp, color: Colors.black),)),
            ],
          ),
        ),
      ),



    ],
  );

  Widget langDropDown ()=> Container(
    width: 106.w,
    height: 44.h,
    decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(22.0),
        border: Border.all(color: Color(0xffBBBBBB), width: 1)
    ),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SvgPicture.asset('assets/icons/Eng.svg', height: 34.h,),
        const Text('English', style: TextStyle(fontSize: 11),),
        const Icon(Icons.arrow_drop_down_outlined, size: 15,),
      ],
    ),
  );

}
