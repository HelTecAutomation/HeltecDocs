# Heltec Wireless Paper Frequently Asked Questions
{ht_translation}`[简体中文]:[English]`

This page contains the most frequently questions from user. If this page's detail can't solve your problem, you can also talk in our forum: [community.heltec.cn](http://community.heltec.cn/)

## How to access boot mode manually(Unable to upload code)

The Wireless Tracker use the internal USB on ESP32S3 instead of a USB-UART bridge, in low-power mode or when a special pin is occupied, the device may not be able to enter the boot loader program, causing you to be unable to download firmware properly.

Entering the boot loader mode needs to meet the following timing (T<sub>RST</sub>≥10 ms):

**Here are two methods access boot mode manually:**

- Wireless Tracker not connect to a computer – Press the `USER` button before plugging it to any USB port of a computer.
- Wireless Tracker already connected to a computer – Keep the `USER` button pressed → Press the `RESET` button → Release the `RESET` button → release the `USER` button.

## Screen not working

1. When you run LoRa/LoRaWAN related sample code, or factory test code, the screen does not display. 

Open the serial port to which the board is connected and press the RST key to see if the board is not activated.

If not, check the link to try activating: [How to Use License — main latest documentation (heltec.org)](https://docs.heltec.org/general/how_to_use_license.html)

2. If the screen does not appear when you run Meshatastick, check that you have downloaded the correct version of the firmware.
