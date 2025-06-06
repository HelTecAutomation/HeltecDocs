# HaLow Dongle Quick Start

{ht_translation}`[简体中文]:[English]`
## Overview
We have provided a plug-and-play mode for the HT-HD01 to help you get started more quickly. The devices are pre-paired at the factory, and you can use them directly without any configuration. 

Plug the AP-side device into your network source (e.g., a router).The STA-side device, once powered on, will provide either an Ethernet or 2.4GHz Wi-Fi connection for your end devices.

![](img/04.jpg)

## How to Distinguish Between AP Mode and STA Mode
- Via Sticker, you can distinguish between the AP or STA side using stickers. 


- After firmware version 2.6.6, you can also differentiate them by the RGB lights: AP-side devices will display cyan/purple after the red light turns off, while STA-side devices will show blue/green.

--------------------------------------

## Start Access Point
1. Connect the Dongle-AP to the upstream router and power it on. 

![](img/11.jpg)

``` {tip} The RJ45 interface does not support PoE (Power-over-Ethernet) power supply. The USB cable can both supply power and networking.
```

If your upstream network uses WiFi, you must enter the Wi-Fi credentials (SSID and password) in the configuration page. For instructions on accessing the configuration page, please refer to the following link:

[Access Configuration](https://docs.heltec.org/en/wifi_halow/ht-hd01/access_configuration_page.html)

2. When the device's red light changes to **Cyan/Purple** and stays on, it indicates that the device is functioning properly.

----------------------------------------------------------

## Start Station
Power on the Dongle-STA. When the device's red light changes to **blue/green** and stays on, it indicates that the device is functioning properly.

![](img/12.jpg)

``` {note} If your STA device is no longer paired with the AP, you need to reconfigure the STA. Please refer to the ["Dongle STA Setup Guide"](https://docs.heltec.org/en/wifi_halow/ht-hd01/ap-sta/sta.html).
```

-----------------------------------------------------------

## Start Using
Connect your device to the Dongle-STA via ethernet cable or 2.4G WiFi.

![](img/13.jpg)

- Default 2.4G Wi-Fi SSID:HT-HD01-XXXX
- Default Password:heltec.org

``` {warning} The STA blue light of the device represents a USB-C cable, and the green light represents an RJ45 cable. If the color of your indicator does not match the type of network cable you are connected to, you need to change the color of the indicator by pressing the button.
```

![](img/07.jpg)

---------------------------------------

## View and Modify the SSID and Password
You can access the device's configuration page to set or modify its parameters. For methods to access the configuration page, please refer to the following link:

[Access Configuration](https://docs.heltec.org/en/wifi_halow/ht-hd01/access_configuration_page.html)

--------------------------------------

## Factory reset

``` {warning} In this mode, all existing configurations on the device are completely erased. You must reconfigure it anew before use.
```

1. Press and hold the device button 10 seconds until the **white** light turns on, then release the button. Subsequently, orange light and green light (blue light) will flash alternately, indicating that the device has entered reset mode.

![](img/07.jpg)

2. At this point, the device will provide a dedicated AP hotspot for configuration. The default SSID is **HT-HD01-xxxx**, and the default password is **heltec.org**. Connect your PC(Laptop) to it.

![](img/ap/09.png)

3. Access **10.42.0.1** in your browser. The default username is **root**, and the default password is **heltec.org**.

![](img/09.png)

4. By adhering to the instructions and prompts available on the configuration interface, each stage of the process can be executed methodically.

-----------------------------------------

## Related Links
- [Wi-Fi HaLow general user guide](https://docs.heltec.org/en/wifi_halow/halow_guide/index.html)
- [HT-H7608 Wi-Fi HaLow Gateway](https://docs.heltec.org/en/wifi_halow/ht-h7608/index.html)
- Technical Support: support@heltec.cn
- [HD01 Resource station](https://resource.heltec.cn/download/HT-HD01)
