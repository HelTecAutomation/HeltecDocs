# HT-M01S (Rev. 2.0) Quick Start

{ht_translation}`[简体中文]:[English]`

## Summary

HT-M01S (Rev. 2.0) is positioned as a low-cost standard gateway for indoor use. LoRa part based on the SX1303 + 1250 structure,  we innovatively use ESP32 as the main control chip, and completely transplant the hardware driver, data forwarding and message queue of SX1303 to the ESP32 platform. There is no need to run the Linux operating system separately. It is simpler and more convenient to use. It can be connected to the cloud server via Wi-Fi or Ethernet, can be powered by Type-C_5V, and has a 1.8-inch TFT display under the tempered glass panel to display gateway information.

```{Tip} For HT-M01S (Rev. 2.0), AS923_ 1 corresponding frequency points are 923.2MHz~924.6MHz, AS923_ 2 corresponding frequency points are 921.4MHz~922.8MHz, AS923_ 3 corresponding frequency points are 916.6MHz~918.0MHz, AS923_ 4 corresponding frequency points are 917.3MHz~918.7MHz.

```

&nbsp;

## Configure the gateway

```{Tip} If your gateway ID is occupied, in order to avoid occupying other gateway IDs when modifying the gateway ID, please modify the "FFFF" part in the middle, thank you!

```

The HT-M01S (Rev. 2.0) gateway has already downloaded the relevant program when it leaves the factory, and it can be used with only a few simple operations.

![](img/quick_start/01.png)



- After the gateway is powered on through Type-C, the working mode can be selected through the button within 5 seconds. Press the "+" button to select the LoRa gateway mode, and press the "-" button to select the beacon sniffer mode.

### First Configuration via WiFi

![](img/quick_start/02.png)

- After the gateway is powered on through Type-C, keep pressing the "-" button, then press the "RST" button, and then release the "RST" button. After the gateway enters the interface shown in the figure below, release the "-" button .

  ![](img/quick_start/03.png)

- At this time, find the WiFi named "M01S_XXXX", connect to this WiFi, and enter "192.168.4.1" through the browser, and log in to the gateway configuration page with the user name "HT-M01S" and password "heltec.org".

![](img/quick_start/04.png)

- Configure the HT-M01S (Rev. 2.0) gateway information on the page shown in the figure above, such as network mode, server address and port, regional frequency band, gateway channel, and time zone. Click "Submit" after the configuration is complete. If "NET MODE" selects "WiFi", you need to configure the corresponding WiFi information, if "NET MODE" selects "Ethernet", the network information will be directly obtained through Ethernet. At the same time, when the gateway has firmware that needs to be updated, you can download the corresponding firmware and click "Firmware Update" to update accordingly.
- The gateway will restart after the configuration is completed and submitted. When the gateway starts, it will automatically connect to the configured WiFi or connect to the Ethernet. If the connection fails, it will restart again until the connection is successful.

### First Configuration via Ethernet

- After the gateway obtains the network through Ethernet and works normally, "Local IP" will be displayed on the display.

![](img/quick_start/05.png)

- Enter the web page through the "Local IP" on the gateway display screen, and log in to the gateway configuration page with the user name "HT-M01S" and password "heltec.org" (the login device must be in the same LAN as the gateway).

![](img/quick_start/04.png)

- Configure the HT-M01S (Rev. 2.0) gateway information on the page shown in the figure above, such as network mode, server address, uplink port, downlink port, heartbeat period, regional frequency band, gateway channel, time zone, and click "Submit" after the configuration is complete. If "NET MODE" selects "WiFi", you need to configure the corresponding WiFi information, if "NET MODE" selects "Ethernet", the network information will be directly obtained through Ethernet. The user can modify the web login password by himself. At the same time, when the gateway has firmware that needs to be updated, you can download the corresponding firmware and click "Firmware Update" to update accordingly.
- The gateway will restart after the configuration is completed and submitted. When the gateway starts, it will automatically connect to the configured WiFi or connect to the Ethernet. If the connection fails, it will restart again until the connection is successful.

```{Tip} After the gateway is connected to the network through WiFi or Ethernet and works normally, you can directly enter the configuration interface through the "Local IP" on the display (the login device must be in the same LAN as the gateway).

```

&nbsp;

## View Gateway Information

- After the network connection is successful, the gateway will enter the interface shown in the figure below. You can view the gateway ID, the server address configured by the gateway, the frequency band, and the latest sending and receiving time.

![](img/quick_start/06.png)

- By pressing the "-" button, you can control the TFT display switch, and by pressing the "+" button, you can switch the display content.

![](img/quick_start/07.png)

- By pressing the "+" button, you can switch the display content. Check the sending and receiving situation of the gateway.

![](img/quick_start/08.png)

&nbsp;

## Common Problems and Solutions

- Question: The gateway cannot boot normally after downloading new firmware.

  Solution: Open the serial port to check whether the gateway is activated. After using the serial port debugging assistant to open the serial port, press the gateway "RST" button. If the serial port prints "ESP32ChipID=xxxxxxxxxxxx", it means that the gateway is not activated. Please refer to this document([Activate the Gateway](https://docs.heltec.org/en/gateway/ht-m01s_v2/update_firmware.html#activate-the-gateway)) to activate it. 

- Question: The gateway keeps restarting.

  Solution: Check whether the corresponding configuration information of the gateway is correct according to the prompts on the gateway display. Such as WiFi username, WiFi password, server address.