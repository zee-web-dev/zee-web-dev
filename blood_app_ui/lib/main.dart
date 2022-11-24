
import 'package:blood_app_ui/login.dart';
import 'package:blood_app_ui/screens/blood_request.dart';
import 'package:blood_app_ui/screens/dashboard_screen.dart';
import 'package:blood_app_ui/screens/donor/details.dart';
import 'package:blood_app_ui/screens/donor/list.dart';
import 'package:blood_app_ui/screens/requester/details.dart';
import 'package:blood_app_ui/screens/requester/profile.dart';
import 'package:device_preview/device_preview.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:google_fonts/google_fonts.dart';

// void main() {
  // runApp(DevicePreview(
  //     enabled: !kReleaseMode,
  //     builder: (context)=>const MyApp())
  // );
//}
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ScreenUtilInit(
      builder: (context, child) => MaterialApp(
        title: 'Blood Bank',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          // primaryColor: Colors.pink,
          scaffoldBackgroundColor: Colors.white,
          textTheme: Theme.of(context).textTheme.apply(
                bodyColor: Colors.black,
                fontFamily: GoogleFonts.openSans().fontFamily,
              ),
          visualDensity: VisualDensity.adaptivePlatformDensity,
        ),
        home: Container(
          decoration: const BoxDecoration(
              color: Colors.white,
              image: DecorationImage(
                image: AssetImage('assets/images/bg_watermark.png'),
                fit: BoxFit.contain,
              )),
          child: const LoginScreen(),
        ),
      ),
      designSize: const Size(407, 880),
    );
  }
}
