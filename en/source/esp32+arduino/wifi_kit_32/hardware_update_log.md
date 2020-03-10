# Wifi Kit 32  Hardware Update Logs

## V1

![](img/wifi_kit_32/01.png)

2017-6-1 public sale

- First release
- [Pin out diagram for V1](http://resource.heltec.cn/download/WiFi_Kit_32/WIFI%20Kit%2032_pinoutDiagram_V1.pdf)
- [Schematic diagram for V1](http://resource.heltec.cn/download/WiFi_Kit_32/WIFI_Kit_32_Schematic_diagram_V1.PDF)

&nbsp;

### V2

![](img/wifi_kit_32/02.png)

- Fixed charging status (orange LED) blinking problem;

- 4MB (32M-bits) FLASH upgrade to 8MB (64M-bits) FLASH;

- Better 2.4GHz antenna design and impendence matching;

- Basic low power design (800uA in deep sleep);

- Add battery power detection circuit. Use ADC2_4 (GPIO 13) to read battery voltage;

- Add Vext power output pin, users can use this pin to drive some external device (sensor, motor etc.), when system need into deep sleep mode, Vext can be turn off. **This pin was controlled by GPIO21, for example:**

  - Turn ON: `digitalWrite(21, LOW);`

  - Turn OFF: `digitalWrite(21, HIGH);`

- [Pin out diagram for V2](http://resource.heltec.cn/download/WiFi_Kit_32/WIFI%20Kit%2032_pinoutDiagram_V2.pdf);

- [Schematic diagram for V2](http://resource.heltec.cn/download/WiFi_Kit_32/WIFI_Kit_32_Schematic_diagram_V2.PDF);

- Circuit optimization, system more stable;

- Better power manage system design.

&nbsp;

## V2.1

- 2019-10 public sale?
- Fix battery voltage read can't work together with Wi-Fi bug, change battery voltage reading pin to GPI37 (use ADC1_1), please refer to this example: [https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/ADC_Read_Voltage/Battery_power/Battery_power.ino](https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/ADC_Read_Voltage/Battery_power/Battery_power.ino)



