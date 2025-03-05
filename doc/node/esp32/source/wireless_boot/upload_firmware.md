# HRI-3621 Secondary Development

{ht_translation}`[简体中文]:[English]`

## Hardware Resources
- [Datasheet](https://resource.heltec.cn/download/Sensor%20Hub%20for%20industry/HRI-3621/HRI-3621.pdf)

- [Schematic](https://resource.heltec.cn/download/Sensor%20Hub%20for%20industry/Hardware_open-source_documentation)

- **Pin Layout**

​	The below picture only shows the common pins. For other pins, please refer to the schematic.

![](img/development/pinmap.png)

---------------------------------------

## Development Environment

### Third-party framework
This device is based on the ESP32-S3 and SX1262, you can use any development environment that supports these chips for development.<br>
Compile the created firmware into a '.bin' file.<br>
To upload the firmware, please proceed directly to [Upload Firmware](upload-firmware).

### WirelessBoot framework
Meanwhile, Heltec offers a branch based on the Heltec ESP32 development framework: the WirelessBoot Development Framework. Using this branch, you can program and debug the device with Arduino. For instructions and an introduction to using this framework, you can refer to this link:<br>
https://docs.heltec.org/en/node/esp32/wireless_boot/index.html

### Common Firmware Download Links

Here are some common pre-compiled firmware files:

- [LoRaWAN]()
- [Meshtastic]()

---------------------------------------

(upload-firmware)=

## Firmware Upload
We strongly recommend using the WirelessBoot mode to upload firmware.
### What is the WirelessBoot
WirelessBoot is a feature of the ESP32 that allows firmware updates to be performed wirelessly without the need for a USB or serial connection.
### How to Enter WirelessBoot
1. Press and hold the device button until the blue light stays on. Continue holding without releasing until the purple light turns on. At this point, release the button, and the device will enter WirelessBoot mode.

   ![](img/03.jpg)


2. Locate the WiFi network named "WirelessBoot-xxxx" and connect to it. Default password is “heltec.org".

   ![](img/development/01.png)


3. In your browser, enter "192.168.4.1" and use the default password "heltec.org".<br>This is the interface for uploading firmware via WirelessBoot.

   ![](img/development/02.png)


``` {Tip} You can configure the WiFi address on this page. After "Save Configuration", you can access the WirelessBoot mode through the device's IP address without needing to connect to its WiFi.
```

![](img/development/03.png)

### Upload Firmware

``` {Note} WirelessBoot only accepts firmware in “.bin” format.
```

1. Navigate to the WirelessBoot page, choose the corresponding firmware,select an APP partition, and click "Upload."

   ![](img/development/04.png)

``` {Note} The firmware name should not be too long; otherwise, it cannot be uploaded.
```

2. After the upload is successful, click "RUN" to confirm which program you want to execute.

   ![](img/development/05.png)

3. Click "Restart" to reboot the device and start its operation.

   ![](img/development/06.png)

----------------------------------------

