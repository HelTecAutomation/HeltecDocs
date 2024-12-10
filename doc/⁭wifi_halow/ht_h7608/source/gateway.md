# Quick Start

{ht_translation}`[简体中文]:[English]`

This topic describes how to configure HT-M7603 quickly.

## Enter configuration page
1. Power on, find the WiFi named "HT_M7603_xxxx", connect to this WiFi, the password is "**heltec.org**". 

   ![](img/quick_start/01.png) ![](img/quick_start/10.png) 

2. Visit "**192.168.8.1**" via the browser, the user name "HT-M7603" and password "heltec.org".

   ![](img/quick_start/11.png)

## Main Settings
![](img/quick_start/02.png)

 - **Switch Region**: Choose the frequency bands and channels you need.
 - **Gateway Mode**: Gateway protocol mode, the default is LoRaWAN; To use MQTT, refer to this link-[MQTT Enble](https://docs.heltec.org/en/gateway/ht-m7603/mqtt.html)
 - **Server address and port**.

Click `Set Gateway` when the configuration is complete.

### Connect to Network
You can connect via Ethernet or WiFi:

+ **Via Ethernet**: insert the cable directly into the interface, after a successful connection, the device LED will change from blue to green.
+ **Via WiFi**: Click the "Status "option at the top left, click "WiFi". Select the WiFi you want to connect to in "WIFI list", enter password of this WiFi, click "connect". It usually takes 10-30 seconds for the HT-M7603 to connect to the WiFi, and the device LED.

 ![](img/quick_start/03.jpg)

&nbsp;

## Common Problems and Solutions

- Question: After the WiFi configuration is complete, Web is not responding.

  Solution: The WiFi connection takes some time (usually under 30 seconds), please refresh the page after the LED turns green.
  
- Question: The gateway is unable to access the network.

  Solution: Check your configuration information, Such as WiFi password, server address.