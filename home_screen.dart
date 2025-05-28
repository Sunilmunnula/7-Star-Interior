
import 'package:flutter/material.dart';
import 'room_guidance_screen.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("7 Star Interior")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Select Room Type", style: TextStyle(fontSize: 20)),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(
                  builder: (context) => RoomGuidanceScreen(roomType: "Living Room")
                ));
              },
              child: Text("Living Room"),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(
                  builder: (context) => RoomGuidanceScreen(roomType: "Kitchen")
                ));
              },
              child: Text("Kitchen"),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(
                  builder: (context) => RoomGuidanceScreen(roomType: "Bedroom")
                ));
              },
              child: Text("Bedroom"),
            ),
          ],
        ),
      ),
    );
  }
}
