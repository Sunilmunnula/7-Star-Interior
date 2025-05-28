
import 'package:flutter/material.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(SevenStarInteriorApp());
}

class SevenStarInteriorApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '7 Star Interior',
      theme: ThemeData(primarySwatch: Colors.deepPurple),
      home: HomeScreen(),
    );
  }
}
