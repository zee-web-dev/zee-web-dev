import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:names_of_allah/utils/constants.dart';

class TextWidget extends StatelessWidget {
  final data, textColor, textWeight, textSize;

  const TextWidget({
    Key? key,
    @required this.data, this.textSize, this.textColor, this.textWeight,
      }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(data, style: TextStyle(fontSize: textSize ?? 18.sp, color: textColor ?? kTextColor, fontWeight: textWeight ?? FontWeight.normal ),);
  }
}
