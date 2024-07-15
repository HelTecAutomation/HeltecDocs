# Example Manual

{ht_translation}`[简体中文]:[English]`

## Preparation

### Software

\**Before you get started, make sure you have the Heltec esp32 framework and libraries installed.**

If you don't have it installed, please refer[ESP32 series QuickStart](https://docs.heltec.org/en/node/esp32/esp32_general_docs/quick_start.html#).

*The Heltec esp32 development Framework already contains the basic code.*

*The library contains the LoRa code, factory test code, and some corresponding extensions.*

### Hardware

------

## Sample Code

### Weather Station

![Github Link](https://github.com/HelTecAutomation/Heltec_ESP32/tree/master/examples/VME213/weather_station)

This demo will fetch weather and time information over the network and print it to the device display.

![](img/V1.png)

1.  Open the ArduinoIDE and select the appropriate board and serial port from the Tools menu.

   ![](img/02.jpg)

2. Follow the following path to select the example.

   ![](img/03.jpg)

3. In this code you need to fill in the available Wi-Fi.

   ![](img/04.jpg)

   ````{Warning} If you don't connect  Wi-Fi, the display won't work.
   ```
   ````

   

4. The current code fetches the weather and time data through API of the corresponding website. If you want to change the data source, please refer to the `Readme.md` file of the code.

   ![](img/05.jpg)

------

### Sensor display on E-Ink

*under construction...*



