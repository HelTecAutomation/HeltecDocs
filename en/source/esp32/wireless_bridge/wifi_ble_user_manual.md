# Wireless Bridge WiFi_BLE Example User Manual

&nbsp;

## Summary

This document will briefly introduce the usage of Wireless_Bridge WiFi_BLE example.

&nbsp;

## Usage

To view Bluetooth messages, you need the corresponding Bluetooth debugging tools.

- Configure WiFi information in the program.

![](img\wifi_ble_user_manual\01.png)

- After uploading the program to the development board, open the serial port to view the IP address of the web page. Among them, "View page IP address" is the viewing webpage for forwarding Bluetooth information to WiFi, and "Write page IP address" is the sending webpage for forwarding WiFi information to Bluetooth. The device that opens the webpage must be in the same local area network as the Wireless_Bridge.

![](img\wifi_ble_user_manual\02.png)

- Open the corresponding Bluetooth debugging tool and connect to the Bluetooth named "UART Service". When connecting, please note that the Bluetooth transmission parameters are consistent with the parameters in the program.

![](img\wifi_ble_user_manual\03.png)

- After the Bluetooth connection is successful, send information through the Bluetooth debugging tool, and the received data will be displayed on the web page via WiFi. The default web page refresh time is 10S, and the web page refresh time can be modified in the "setTimeout" function according to specific needs.

![](img\wifi_ble_user_manual\04.png)

- The information issued by the webpage will be forwarded to Bluetooth and can be viewed in the Bluetooth debugging tool.

![](img\wifi_ble_user_manual\05.png)
