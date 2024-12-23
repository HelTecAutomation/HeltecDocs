# **Wi-Fi HaLow Client(STA) Mode**

{ht_translation}`[简体中文]:[English]`

## Summary
This section introduces the setup and activation of Wi-Fi HaLow Client(STA) mode.

In Client mode, the device connects as a client to another Wi-Fi HaLow Gateway (Access Point), while simultaneously creating a traditional 2.4G Wi-Fi or Ethernet network, allowing other devices (such as smartphones, laptops, sensors, etc.) to connect to it as clients.

As shown below:

![](img/sta/01.png)

``` {note} Some devices, such as the HT-HR01, do not have 2.4G Wi-Fi functionality.
```

------------------------------------
## Initial Setup
### Enter Configuration page

**How to enter the configuration mode page" please refer to the corresponding product documentation.**
- [HT-H7608](https://docs.heltec.org/en/wifi_halow/ht-h7608/index.html#get-started)
- [HT-HD01](https://docs.heltec.org/en/wifi_halow/ht-hd01/index.html#get-started)
- [HT-HC32](https://docs.heltec.org/en/wifi_halow/ht-hc32/index.html#get-started)
- [HT-HR01](https://docs.heltec.org/en/wifi_halow/ht-hr01/index.html#setup-and-use)

-------------------------------------------

### Basic Settings

1. Enter the configuration page, select the region, and set the hostname. "Hostname" refers to the hostname of your device in the Wi-Fi HaLow network.

  Enter the configuration page and select "**Standard Wi-Fi HaLow**", click `next`.

   ![](img/sta/02.png)

2. Select "**Client**", click `next`.

   ![](img/sta/03.png)

3. You can click 'SCAN', or directly enter the hotspot name and password of the Wi-Fi HaLow gateway you want to connect to, click `next`.

   ![](img/sta/04.png)

4. Choose the traffic mode based on your needs, click `next` . 

  **We recommend the "Bridge" mode**. The main differences between the modes are as follows:

|  Mode   | Description  |
|  ----  | :----- |
| None  | Non-HaLow and HaLow networks are isolated. This device will use a static IP address and run a DHCP server on the non-HaLow interface |
| Bridge  | Non-HaLow devices obtain IPs from your HaLow link |
| Extender | Non-HaLow devices obtain IPs from the DHCP server on this device and this device uses NAT to forward IP traffic |

5. If your device has 2.4G Wi-Fi functionality, you can click the location in the image below to enable the 2.4G Wi-Fi feature. 

![](img/sta/05.png)

6. Set the SSID and password, and non-HaLow devices will be able to connect to the upstream network or the internet through them.

![](img/sta/06.png)

7. Click `Next`, and `Apply`.

---------------------------

### Complete configuration

When the green or blue light remains steady, it indicates that the network connection is successful.

``` {note} If you selected Ethernet mode, observe the color of your indicator light, it should be blue for USB cable and green for RJ45 cable. If the color of the light does not match the connection of the cable, you will need to change it to the appropriate color by pressing the button.
```

-----------------------------------------------------

For other modes , please refer to the [Wi-Fi HaLow Using guide](https://docs.heltec.org/en/wifi_halow/halow_guide/index.html).

