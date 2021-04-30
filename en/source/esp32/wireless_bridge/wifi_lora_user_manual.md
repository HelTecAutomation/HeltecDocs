# Wireless Bridge WiFi_LoRa Example User Manual

[简体中文](https://heltec-automation.readthedocs.io/zh_CN/latest/esp32/wireless_bridge/wifi_lora_user_manual.html)

## Summary

This document will briefly introduce the usage of Wireless_Bridge WiFi_LoRa example.

```Tip:: loraWanClass should choose CLASS_C

```

## Usage

Before starting the test, make sure that Wireless_Bridge can communicate with the gateway normally.

- Configure WiFi information in the program.

![](img/wifi_lora_user_manual/01.png)

- After uploading the program to the development board, open the serial port to view the IP address of the web page. Among them, "View page IP address" is the viewing webpage for forwarding LoRa information to WiFi, and "Write page IP address" is the sending webpage for forwarding WiFi information to LoRa. The device that opens the webpage must be in the same local area network as the Wireless_Bridge.

![](img/wifi_lora_user_manual/02.png)

- Send information through LoRa, and the received data will be displayed on the web page through WiFi. The default web page refresh time is 10S, and the web page refresh time can be modified in the "setTimeout" function according to specific needs.

![](img/wifi_lora_user_manual/03.png)

![](img/wifi_lora_user_manual/04.png)

- The information issued by the webpage will be forwarded to LoRa and can be viewed in the node data. The information forwarded to LoRa needs to be decoded accordingly.

![](img/wifi_lora_user_manual/05.png)

- The corresponding decoding of this example is as follows:

```shell
function Decode(fPort, bytes) {
  var charValue1= String.fromCharCode(bytes[0]);
  var charValue2= String.fromCharCode(bytes[1]);
  var charValue3= String.fromCharCode(bytes[2]);
  var charValue4= String.fromCharCode(bytes[3]);
  var charValue= charValue1 + charValue2 + charValue3 + charValue4;
  var result={
    
                                                "char":{
                                                "charValue":charValue,
                                                       }
  }
  return result;
}
```

