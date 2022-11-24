import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BloodRequestForm extends StatelessWidget {
  const BloodRequestForm({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return Scaffold(
      backgroundColor: Colors.white,
      appBar: buildAppBar(context),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 36.0,),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Container(
                margin: const EdgeInsets.only(top: 10.0),
                child: customInputField('Full Name', Icons.account_circle_outlined),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10.0),
                child: customInputField('Mobile No', Icons.phone_android),
              ),
              Container(
                margin: const EdgeInsets.only(top: 20),
                alignment: Alignment.topRight,
                child: Container(
                  height: 25,
                  width: 67,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(50),
                    gradient: const LinearGradient(colors: [Color(0xffFD1916), Color(0xff008FCB)], transform: GradientRotation(160),
                      begin: Alignment.centerLeft,
                      end: Alignment.centerRight,)
                  ),
                  child: TextButton(
                    onPressed: (){},
                    style: ElevatedButton.styleFrom(
                      padding: EdgeInsets.zero,
                    ),
                    child: const Center(child: Text('Verify', style: TextStyle(fontSize: 14, color: Colors.white),)),
                  ),
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10.0),
                child: customInputField('Hospital', Icons.pin_drop_outlined),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10.0),
                child: customInputField('Country', Icons.flag_outlined),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10.0),
                child: customInputField('State', Icons.mosque_outlined),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10.0),
                child: customInputField('City', Icons.account_balance_outlined),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10.0),
                child: customInputField('Date of birth', Icons.calendar_today_outlined),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10.0),
                child: expandedInputField('Your message', Icons.message_outlined),
              ),
              Container(
                margin: const EdgeInsets.only(top: 36.0, bottom: 20.0 ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    OutlinedButton(
                        style: OutlinedButton.styleFrom(
                          side: const BorderSide(width: 1.0, color: Colors.black),
                          shape: const CircleBorder(),
                          padding: const EdgeInsets.only(bottom: 2)
                        ),
                          onPressed: null,
                          child: const Icon(Icons.add)
                      ),
                    Container(
                      child: Stack(
                        alignment: Alignment.center,
                        children: [
                          SvgPicture.asset('assets/icons/blood-transfusion.svg'),
                          const Text('2', style: TextStyle(fontSize: 32, color: Colors.white, fontWeight: FontWeight.w600) ,)
                        ],
                      ),
                    ),
                    OutlinedButton(
                        style: OutlinedButton.styleFrom(
                            side: const BorderSide(width: 1.0, color: Colors.black),
                            shape: const CircleBorder(),
                            padding: const EdgeInsets.only(bottom: 2)
                        ),
                        onPressed: null,
                        child: const Icon(Icons.remove)
                    )
                  ],
                ),
              ),
              Container(
                margin: const EdgeInsets.only(bottom: 16),
                padding: const EdgeInsets.only(left: 9.0),
                child: SizedBox(
                  height: 100,
                  child: Stack(
                    children: [
                      Drop('A', '+'),
                      Positioned(top: 32, left: size.width * 0.095, child: Drop('B', '+')),
                      Positioned(top: 0, left: size.width * 0.19, child: Drop('A', '-')),
                      Positioned(top: 32, left: size.width * 0.285, child: Drop('B', '-')),
                      Positioned(top: 0, left: size.width * 0.38, child: Drop('AB', '+')),
                      Positioned(top: 32, left: size.width * 0.475, child: filledDrop('AB', '-')),
                      Positioned(top: 0, left: size.width * 0.57, child: Drop('O', '+')),
                      Positioned(top: 32, left: size.width * 0.665, child: Drop('O', '-')),
                      // Drop('A', '-')
                    ],
                  ),
                ),
              ),
              Container(
                margin: const EdgeInsets.only(bottom: 24.0),
                child: Container(
                  // height: 25,
                  // width: 67,
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(50),
                      gradient: const LinearGradient(colors: [Color(0xffFD1916), Color(0xff008FCB)], transform: GradientRotation(160),
                        begin: Alignment.centerLeft,
                        end: Alignment.centerRight,)
                  ),
                  child: TextButton(
                    onPressed: (){},
                    style: ElevatedButton.styleFrom(
                      padding: EdgeInsets.zero,
                    ),
                    child: const Center(child: Text('Verify', style: TextStyle(fontSize: 14, color: Colors.white),)),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }



  Widget customInputField(placeholder, inputIcon) => Row(
    mainAxisAlignment: MainAxisAlignment.center,
    crossAxisAlignment: CrossAxisAlignment.end,
    children:    [
      Expanded(child: Icon(inputIcon, size: 32, color: Colors.black.withOpacity(0.61),)),
      Expanded(
        flex: 4,
        child: TextField(
          decoration: InputDecoration(
            hintText: placeholder,
            hintStyle: TextStyle(color: Colors.black.withOpacity(0.6), fontSize: 16)
          ),
        ),
      )
    ],
  );

  Widget expandedInputField(placeholder, inputIcon) => Row(
    // mainAxisAlignment: MainAxisAlignment.start,
    crossAxisAlignment: CrossAxisAlignment.start,
    children:    [
      Expanded(
          child: Padding(
            padding: const EdgeInsets.only(top: 15.0),
            child: Icon(inputIcon, size: 32, color: Colors.black.withOpacity(0.61),),
          )
      ),
      Expanded(
        flex: 4,
        child: TextField(
          maxLines: 3,
          decoration: InputDecoration(
              hintText: placeholder,
              hintStyle: TextStyle(color: Colors.black.withOpacity(0.6), fontSize: 16)
          ),
        ),
      )
    ],
  );


  Widget Drop(group, sign) => Container(
    height: 52,
    width: 40,
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
    height: 52,
    width: 40,
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

  AppBar buildAppBar(BuildContext context){
    return AppBar(
      backgroundColor: Colors.white,
      foregroundColor: Colors.black,
      elevation: 0,
      leading: IconButton(
        icon: Icon(Icons.close_sharp, size: 32, ),
        onPressed: () {},
      ),
      title: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children:  [
          const Text('Add Blood Request', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w600),),
          Text('add the details of requester', style: TextStyle(fontSize: 13, color: Colors.black.withOpacity(0.45)), )
        ],
      ),
    );
  }

}
