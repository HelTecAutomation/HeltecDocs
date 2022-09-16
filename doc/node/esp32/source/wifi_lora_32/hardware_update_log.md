# WiFi LoRa 32 Hardware Update Logs
{ht_translation}`[简体中文]:[English]`
## V1

- First release
- 2017-6-1 public sale

- [Pinout diagram of V1](http://resource.heltec.cn/download/WiFi_LoRa_32/WIFI_LoRa_32_V1.pdf)

- Schematic diagram of V1
  - [433, 470~510 Version](http://resource.heltec.cn/download/WiFi_LoRa_32/V1/WIFI_LoRa_32(433_470-510%20version)Schematic_diagram.PDF)
  - [868~915 Version](http://resource.heltec.cn/download/WiFi_LoRa_32/V1/WIFI_LoRa_32(868-915version)Schematic_diagram.PDF)

&nbsp;

## V2

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

## V2.1

![](img/hardware_update_log/03.png)

- 2019-6-15  public sale
- Change the RF switch from PE4259 to UPG2179, and change the RF part to the official recommended value;
- Change the power detection pin from 13(ADC2: 4) to 37(ADC1: 1).
- [Pinout diagram of V2.1](https://resource.heltec.cn/download/WiFi_LoRa_32/WIFI_LoRa_32_V2.1.pdf)
- Schematic diagram of V2.1
  - [433, 470~510 Version](https://resource.heltec.cn/download/WiFi_LoRa_32/V2.1/WiFi_LoRa_32_V2.1(433%2C470-510).PDF)
  - [868~915 Version](https://resource.heltec.cn/download/WiFi_LoRa_32/V2.1/WIFI_LoRa_32_V2.1(868-915).PDF)