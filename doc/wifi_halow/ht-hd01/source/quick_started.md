# HaLow Dongle Quick Started

{ht_translation}`[简体中文]:[English]`

We have provided a plug-and-play mode for the HT-HD01 to help you get started more quickly. The devices are pre-paired at the factory, and you can use them directly without any configuration.

![](img/04.jpg)

## Start Access Point
There are two ways for the Dongle AP to join the network:

- [Via Ethernet cable (Default plug&play)](via_eth)
- [Via Wi-Fi (requires configuration)](via_wifi)

(via_eth)=

### Access the network via Ethernet (Default plug&play)
Connect the Dongle-AP to the upstream router and power it on. 

![](img/11.jpg)

``` {tip} The RJ45 interface does not support PoE (Power-over-Ethernet) power supply. The USB cable can both supply power and networking.
```

When the device's red light changes to blue or green and stays on, it indicates that the device is functioning properly.

``` {warning} The blue light of the device represents a USB-C cable, and the green light represents an RJ45 cable. If the color of your indicator does not match the type of network cable you are connected to, you need to change the color of the indicator by pressing the button.
```

(via_wifi)=
### Access the network via WiFi-2.4G

You can change network settings on a device from its configuration page. Please refer to: [Wizards setting](https://docs.heltec.org/en/wifi_halow/ht-hd01/view_and_modify.html#wizards-setting) or [Reset up](https://docs.heltec.org/en/wifi_halow/ht-hd01/view_and_modify.html#reset-up)


When the device's red light changes to blue or green and stays on, it indicates that the device is functioning properly.

## Start Station
Power on the Dongle-STA. When the device's red light changes to blue or green and stays on, it indicates that the device is functioning properly.

![](img/12.jpg)

``` {warning} If your STA device is no longer paired with the AP, you need to reconfigure the STA. Please refer to the ["Dongle STA Setup Guide"](https://docs.heltec.org/en/wifi_halow/ht-hd01/sta.html).
```

## Start Using
Connect your device to the Dongle-STA via ethernet cable or 2.4G WiFi.

- Default 2.4G Wi-Fi SSID:HT-HD01-XXXX
- Default Password:heltec.org

![](img/13.jpg)

``` {warning} The STA blue light of the device represents a USB-C cable, and the green light represents an RJ45 cable. If the color of your indicator does not match the type of network cable you are connected to, you need to change the color of the indicator by pressing the button.
```

## Related Links
- [Wi-Fi HaLow general user guide](https://docs.heltec.org/en/wifi_halow/halow_guide/index.html)
- [HT-H7608 Wi-Fi HaLow Gateway](https://docs.heltec.org/en/wifi_halow/ht-h7608/index.html)
- Technical Support: support@heltec.cn
- [HD01 Resource station](https://resource.heltec.cn/download/HT-HD01)
