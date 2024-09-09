# Meshtastic Low Power Settings

## Purpose

By adjusting the position and power settings of the meshtastic, the wireless tracker can enter low-power mode to extend the power usage time.

## Configuration

**Device Config**

`Role` - TRACKER

<img src="img/how_to_make_heltec_wireless_tracker_battery_last_longer/1.jpg" style="zoom: 33%;" />

``` {Tips} Only the tracker mode and sensor mode in meshtastic can enter the low power consumption mode.
```

**Position Configuration**

- `Position broadcast interval` - 900

- `Smart broadcast min distance` - 10

- `smart broadcast min interval` - 900

- `GPS update interval`- 30

- `Redefine GPS_RX_PIN` - 33

- `Redefine GPS_TX_PIN` -34

- `Redefine PIN_GPS_EN`- 3

<img src="img/how_to_make_heltec_wireless_tracker_battery_last_longer/2.jpg" style="zoom:33%;" />

**Power Configuration**

- `Wait for Bluetooth` - 0
- `Super deep sleep duration`  - 1800
- `Light sleep duration` - 900
- `Minimum wake time` - 30

<img src="img/how_to_make_heltec_wireless_tracker_battery_last_longer/3.jpg" style="zoom:33%;" />

## Result

After successfully entering low power consumption, the current is only **13uA**.

![](img/how_to_make_heltec_wireless_tracker_battery_last_longer/4.jpg)

The device is connected to a fully charged 1000mA 3.7V lithium battery and operates normally according to the above settings. After the tracker recognizes the GPS, it can only consume **1%** of the power per hour.

