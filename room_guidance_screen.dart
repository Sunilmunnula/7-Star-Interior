
import 'package:flutter/material.dart';
import 'package:flutter_compass/flutter_compass.dart';

class RoomGuidanceScreen extends StatefulWidget {
  final String roomType;

  RoomGuidanceScreen({required this.roomType});

  @override
  _RoomGuidanceScreenState createState() => _RoomGuidanceScreenState();
}

class _RoomGuidanceScreenState extends State<RoomGuidanceScreen> {
  double heading = 0.0;

  String getDirection(double heading) {
    if (heading >= 45 && heading < 135) return "East";
    if (heading >= 135 && heading < 225) return "South";
    if (heading >= 225 && heading < 315) return "West";
    return "North";
  }

  String getRecommendation(String dir) {
    switch (dir) {
      case "North": return "Ideal for calm zones or entrances.";
      case "East": return "Best for workspace or kitchen.";
      case "South": return "Good for storage or heavy use.";
      case "West": return "Suitable for bedrooms or rest areas.";
      default: return "General guidance applies.";
    }
  }

  @override
  void initState() {
    super.initState();
    FlutterCompass.events?.listen((event) {
      setState(() {
        heading = event.heading ?? 0;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    String direction = getDirection(heading);
    return Scaffold(
      appBar: AppBar(title: Text("${widget.roomType} Guidance")),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("Current Direction: $direction", style: TextStyle(fontSize: 22)),
              SizedBox(height: 20),
              Text("Design Tip: ${getRecommendation(direction)}", style: TextStyle(fontSize: 18)),
            ],
          ),
        ),
      ),
    );
  }
}
