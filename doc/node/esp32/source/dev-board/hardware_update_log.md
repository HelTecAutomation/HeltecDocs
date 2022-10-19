# Hardware Update Logs
{ht_translation}`[简体中文]:[English]`

## WiFi LoRa 32 Hardware Update Logs

### V1

- First release
- 2017-6-1 public sale

- [Pinout diagram of V1](http://resource.heltec.cn/download/WiFi_LoRa_32/WIFI_LoRa_32_V1.pdf)

- Schematic diagram of V1
  - [433, 470~510 Version](http://resource.heltec.cn/download/WiFi_LoRa_32/V1/WIFI_LoRa_32(433_470-510%20version)Schematic_diagram.PDF)
  - [868~915 Version](http://resource.heltec.cn/download/WiFi_LoRa_32/V1/WIFI_LoRa_32(868-915version)Schematic_diagram.PDF)

&nbsp;

### V2

![](img/hardware_update_log/02.png)

- 2018-9-15 public sale

- 4MB (32M-bits) FLASH upgrade to 8MB (64M-bits) FLASH;

- Use 40MHz HSE (V1 use 26MHz);

- Basic low power design (800uA in deep sleep);

- Add Vext power output pin, users can use this pin to drive some external device (sensor, motor etc.), when system need into deep sleep mode, Vext can be turn off.

  **This pin was controlled by GPIO21, for example:**

  ​		Turn ON:  `digitalWrite(21, LOW);`

  ​		Turn OFF: `digitalWrite(21, HIGH);`

- Changed some pin connection:

  ![](img/hardware_update_log/01.png)

- Circuit optimization, system more stable;

- Better power manage system design;

- Better RF impendence matching.

- [Pinout diagram of V2](http://resource.heltec.cn/download/WiFi_LoRa_32/WIFI_LoRa_32_V2.pdf)

- Schematic diagram of V2

  - [433, 470~510 Version](http://resource.heltec.cn/download/WiFi_LoRa_32/V2/WiFi_LoRa_32_V2(433%2C470-510).PDF)
  - [868~915 Version](http://resource.heltec.cn/download/WiFi_LoRa_32/V2/WIFI_LoRa_32_V2(868-915).PDF)

&nbsp;

### V2.1

![](img/hardware_update_log/03.png)

- 2019-6-15  public sale
- Change the RF switch from PE4259 to UPG2179, and change the RF part to the official recommended value;
- Change the power detection pin from 13(ADC2: 4) to 37(ADC1: 1).
- [Pinout diagram of V2.1](https://resource.heltec.cn/download/WiFi_LoRa_32/WIFI_LoRa_32_V2.1.pdf)
- Schematic diagram of V2.1
  - [433, 470~510 Version](https://resource.heltec.cn/download/WiFi_LoRa_32/V2.1/WiFi_LoRa_32_V2.1(433%2C470-510).PDF)
  - [868~915 Version](https://resource.heltec.cn/download/WiFi_LoRa_32/V2.1/WIFI_LoRa_32_V2.1(868-915).PDF)

&nbsp;

### V3

![](img/hardware_update_log/07.png)

- 2022-09-15  public sale

- MCU is changed from ESP32-D0WDQ6 to ESP32-S3FN8. Specific differences of MCU are shown in：[https://products.espressif.com/#/product-comparison](https://products.espressif.com/#/product-comparison).
- USB interface changed from Micro USB to Type-C.
- LoRa chip changed from SX1276 to SX1262.
- The LoRa crystal oscillator is upgraded to temperature compensated crystal oscillator.
- The size, appearance, pin layout and power pins remain unchanged, but the GPIO sequence has changed. Please refer to [Pinout diagram](https://resource.heltec.cn/download/WiFi_LoRa32_V3/HTIT-WB32LA(F)_V3.png).
- [Pinout diagram of V3](https://resource.heltec.cn/download/WiFi_LoRa32_V3/HTIT-WB32LA(F)_V3.png).
- [Schematic diagram of V3](https://resource.heltec.cn/download/WiFi_LoRa32_V3/HTIT-WB32LA(F)_V3_Schematic_Diagram.pdf).

&nbsp;

## Wireless Stick  Hardware Update Logs

### V1

![](img/hardware_update_log/04.png)

- First release

- 2017-6-1 public sale

- [Pinout diagram of V1](http://resource.heltec.cn/download/Wireless_Stick/Wireless_Stick.pdf)

- Schematic diagram of V1

  The schematic diagram of Wireless Stick is restricted technical data,it will become downloadable after purchase.Please read this document:[Get Limited Technical Resources](https://heltec-automation-docs.readthedocs.io/en/latest/general/view_limited_technical_data.html) .

&nbsp;



&nbsp;

## Wireless Stick Lite Hardware Update Logs

### V1

![](img/hardware_update_log/05.png)

- First release
- 2017-6-1 public sale

- [Pinout diagram of V1](http://resource.heltec.cn/download/Wireless_Stick_Lite/Wireless_Stick_Lite.pdf)
- Schematic diagram of V1
- The schematic diagram of Wireless Stick Lite is restricted technical data,it will become downloadable after purchase.Please read this document:[Get Limited Technical Resources](https://heltec-automation-docs.readthedocs.io/en/latest/general/view_limited_technical_data.html) .

&nbsp;

### V3

![](img/hardware_update_log/08.png)

- 2022-09-15  public sale

- MCU is changed from ESP32-PICO-V3 to ESP32-S3FN8. Specific differences of MCU are shown in：[https://products.espressif.com/#/product-comparison](https://products.espressif.com/#/product-comparison).
- USB interface changed from Micro USB to Type-C.
- LoRa chip changed from SX1276 to SX1262.
- The LoRa crystal oscillator is upgraded to temperature compensated crystal oscillator.
- The size, appearance, pin layout and power pins remain unchanged, but the GPIO sequence has changed. Please refer to [Pinout diagram](https://resource.heltec.cn/download/Wireless_Stick_Lite_V3/HTIT-WSL_V3.png).
- [Pinout diagram of V3](https://resource.heltec.cn/download/Wireless_Stick_Lite_V3/HTIT-WSL_V3.png).
- [Schematic diagram of V3](https://resource.heltec.cn/download/Wireless_Stick_Lite_V3/HTIT-WSL_V3_Schematic_Diagram.pdf).

&nbsp;

## Wireless Bridge  Hardware Update Logs

[简体中文](https://heltec-automation.readthedocs.io/zh_CN/latest/esp32/wireless_bridge/hardware_update_log.html)

### V1

![](img/hardware_update_log/06.png)

- First release
- 2021-04-01 public sale
