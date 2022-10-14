# "ESP32 + LoRa" Preparation & Config Parameters
{ht_translation}`[简体中文]:[English]`

## Preparation

- Arduino IDE.  How to install please click [here](https://docs.heltec.org/general/how_to_install_git_and_arduino.html).
- This library must work with [Heltec WiFi_Kit_series Arduino development framework](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series). Installation manual  please refer to [here](https://docs.heltec.org/en/node/esp32/quick_start.html).

- A gateway already connected a LoRa server.
  - [Connect HT-M01 to a LoRa server](https://docs.heltec.org/en/gateway/ht-m01/connect_to_server.html);
  - [Connect HT-M02 to a LoRa server](https://docs.heltec.org/en/gateway/ht-m02_4g/connect_to_server.html).
  - [Connect HT-M01S to a LoRa server](https://docs.heltec.org/en/gateway/ht-m01s_v2/connect_to_server.html).
- An ESP32 + LoRa ([WiFi LoRa 32](https://heltec.org/project/wifi-lora-32/), [Wireless Stick](https://heltec.org/project/wireless-stick/), etc.) node and a high quality USB cable.
- In this example, we use [HT-M01 Gateway](https://heltec.org/project/ht-m01/) and drive it through Windows<sup>®</sup> via USB, and use [WiFi LoRa 32 (V2)](https://heltec.org/project/wifi-lora-32/) Board to quickly connect to TTN.


## Configure Parameters

No matter what LoRa management platform is used, DevEui, AppKey, etc. parameters are must needed. And ensure that it is consistent with the relevant settings on the server.

- **The following parameters are essential for OTAA mode:**
  - DevEui -- Mote device IEEE EUI (big endian), 8 bytes;
  - AppEui -- Application IEEE EUI (big endian), 8 bytes;
  - AppKey -- AES encryption/decryption cipher application key, 16 bytes;
- **The following parameters are essential for ABP mode:**
  - NwkSKey -- AES encryption/decryption cipher network session key, 16 bytes;
  - AppSKey -- AES encryption/decryption cipher application session key, 16 bytes;
  - DevAddr -- Device address on the network (big endian), uint32_t;

Choose an example from menu `File -- Examples -- Heltec-Example -- LoRaWAN -- LoRaWAN`.

![](img/config_parameter/01.png)

The LoRaWAN relevant parameters are in the `.ino` file, fix it in the code directly.

![](img/config_parameter/02.png)

## Choose Frequency Band

There are some options in the Arduino Tools menu:

![](img/config_parameter/03.png)

`Board, Upload Speed, CPU Frequency, Core Debug Level, PSRAM` are ESP32 chip's normal option, just keep default. Special notice the `LoRaWan Region` and `LoRaWan Debug Level`:

- **LoRaWan Region** -- LoRaWAN protocol region definition, strictly follow [LoRaWAN™ 1.0.2 Regional Parameters rB](https://resource.heltec.cn/download/LoRaWANRegionalParametersv1.0.2_final_1944_1.pdf);
- **LoRaWan Debug Level** -- Messages printed via serial.
  - None -- Default;
  - Freq -- Uplink/downlink frequency;
  - Freq && DIO -- Uplink/downlink frequency and DIO interrupt information;
  - Freq && DIO && PW -- Uplink/downlink frequency, DIO interrupt information and low power status.
- **LORAWAN_DEVEUI** -- LoRaWAN Device EUI generate method
  - CUSTOM -- Defined by the user in the DevEui array of the code, 8 bytes;
  - Generate By ChipID -- Generated according to the Chip ID of the chip. Selecting this option will override the setting in the DevEui array in the code.


``` {Note} Print too much messages may cause the system unstable.

```

