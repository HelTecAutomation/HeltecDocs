# HT-HD01 FAQ

{ht_translation}`[简体中文]:[English]`

## The configuration page cannot be accessed when configured via Wi-Fi.
Do not enter the configuration mode via Wi-Fi while connecting the network cable. If this situation occurs, please unplug the power and network cable, and then re-enter the configuration mode.

---------------------------------------

## How do you get device's IP address?
Refer to [Get dongle IP address](https://docs.heltec.org/en/wifi_halow/ht-hd01/index.html#view-and-change-the-configuration)
- Look in the upstream router: Introduction  ht-h7608 latest documentation
- Connect to the 2.4GWi-Fi provided by the dongle and enter “192.168.1.1” or “10.42.0.1” in the browser (depending on the mode of operation of the device, if you are not sure which one to enter, you can try both). You will see the IP of the connected device and the IP of the Dongle itself.

--------------------------------------

## What is the difference between AP and STA.
- Gateway(AP) Mode: The device functions as a HaLow access point, providing HaLow network services and allowing other HaLow devices to connect.
- STA Mode: The device can connect to HaLow_AP as a client, while also acting as an Access Point to allow regular network devices to connect.

-------------------------------------

## Resetting devices

1. [Enter configuration page](https://docs.heltec.org/en/wifi_halow/ht-hd01/index.html#enter-configuration-page)
2. Follow the "[HaLow General Usage Guide](https://docs.heltec.org/en/wifi_halow/halow_guide/index.html)" to set up.


``` {tip} If you forget your account password and can't connect to your device, please long press the device button for 7 seconds to completely reset. After reset, please follow the above steps.
```