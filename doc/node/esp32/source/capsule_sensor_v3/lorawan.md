# LoRaWAN

{ht_translation}`[简体中文]:[English]`

This topic describes how to quickly get started with the sensor version of Capsule Sensor V3 and upload it to the server via LoRaWAN.

If you accidentally erase the code, please refer to the WirelessBoot theme： [How to refresh the firmware](https://docs.heltec.org/en/node/esp32/capsule_sensor_v3/wireless_boot.html).

[Capsule Sensor V3 LoRaWAN Firmware Download.](https://resource.heltec.cn/download/Heltec%20Capsule%20Sensor%20V3/lorawan.bin)

## Power On

Hold the button for 3 seconds until the white light comes on, Release the button.

![](img/01.png)

------

## Configuration
1. Press the key three times quickly until the white LED and the blue LED light up at the same time and start flashing quickly. At this time, the device enters the configuration mode.

2. Use your phone or computer to search for the device's WiFi hotspot: HRI-3641_XXXX. Connect to this WiFi with the password: Heltec.org.![](img/lorawan/01.jpg)

3. Once the connection is successful, visit 192.168.4.1 in your browser.

   ![](img/lorawan/02.jpg)

4. The parameters are described as follows：

   | Parameters  | Description                                                  |
   | ----------- | ------------------------------------------------------------ |
   | REGION      | LoRaWAN band, which must be consistent with the gateway      |
   | CLASS       | Working mode，support Class_A or Class_C                     |
   | OTAA/ABP    | Network access mode                                          |
   | ADR         | Data rate adaptation                                         |
   | DR          | Data rate                                                    |
   | Confirm     | Uplink message received confirmed                            |
   | DEVEUI      | A 64 bit extended unique identifier for your end device.     |
   | APPEUI      | AppEUl (JoinEUI) is a 64 bit extended unique identifier used to identify the Join Server during activation. |
   | APPKEY      | An end device specific encryption key used during OTAA to derive the AppSKey (in LoRaWAN 1.1x) or both the NwkSKey and AppSKey in LoRaWAN 1.0x |
   | Channel     | LoRaWAN channel                                              |
   | Interval(S) | LoRaWAN transmission interval                                |
   | Retry       | Number of retransmission attempts by LoRaWAN                 |
   | Product     | Product model                                                |
   | Firmware    | Firmware version                                             |
   | Battery     | Battery level                                                |
   | Charge      | Whether to charge                                            |

   5. Once configured, click `Summit` to submit. Press the device button, the white light will light up, and the blue light will light up to indicate that the device has started to work.

------

## Connecting to the server

Before that, make sure your lora gateway is registered with the relevant server and is working well.

We highly recommend the following three gateways:

[HT-M02](https://heltec.org/project/ht-m02-v2/)  [HT-M01S](https://heltec.org/project/ht-m01s-v2/)  [HT-M7603](https://heltec.org/project/ht-m7603/)

### Manual registration

When you are done in the configuration page, you can register the node with TTN/TTS, Chirpstack, SnapEmu, and other LoRaWAN servers by following this link: [Connect “ESP32 + LoRa” to LoRaWAN Server ](https://docs.heltec.org/en/node/esp32/lorawan/connect_to_gateway.html)

### One-click scan registration

1. Search the **App Store** for `SnapEmu`, download and install it.

![](img/lorawan/04.jpg) 

2. To register a LoRa gateway on SnapEmu, please refer to the following link:

[HT-M02](https://docs.heltec.cn/en/gateway/ht-m02_v2/connect_to_server.html#connect-to-snapemu)
[HT-M01S](https://docs.heltec.cn/en/gateway/ht-m01s_v2/connect_to_server.html#connect-to-snapemu)
[HT-M7603](https://docs.heltec.cn/en/gateway/ht-m7603/connect_to_server.html#connect-to-snapemu)

3. Click the `+` in the upper right corner of SnapEmu, select `SCAN`, and directly scan the device QR code.

 ![](img/lorawan/02.png) 

4. Fill in the device name and group.

![](img/lorawan/03.jpg)

5. Registration is complete and the device is activated.

![](img/lorawan/deviceAC.jpg)







