# Heltec<sup>TM</sup> ESP32+Arduino Series Frequently Asked Questions

This page contains the most frequently questions from user. If this page's detail can't solve your problem, you can also talk in our forum: [community.heltec.cn](http://community.heltec.cn/)

&nbsp;

## Can't Download Firmware

- Use a better USB cable, or change a USB socket;
- Check and make sure the CP210x drive had been correctly installed, users can refer to this document: [Establish Serial Connection](https://docs.heltec.cn/#/en/user_manual/establish_serial_connection);
- Press "PRG" button before upload.

&nbsp;

## Orange LED Blink Problem

Annoying orange LED lights are always flashing? It's because the battery management chip MCP73831. with the following control logic:

- Blink -- Power on
- Light -- Charging
- Turn OFF -- Battery filled

Change this capacitor to 220nF to temporarily correct this problem.

![](img/frequently_asked_questions/01.png)

We had use the TP4054 to replace MCP73831, the orange LED have new control logic:

- Dim -- Power on
- Light -- Charging
- Turn OFF -- Battery filled

&nbsp;

## Another Communication Bus Usage Example

- **[SPI0 / SPI1 / SPI2 / SPI3](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/tree/master/esp32/libraries/SPI/examples/SPI_Multiple_Buses)**
- **[I2C0 / I2C1](https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/I2C1_Scanner/I2C1_Scanner.ino)**
- **[UART0 / UART1](https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/ESP32/Serial2/Serial2.ino)**

&nbsp;

## System Reset All the Time

![](img/frequently_asked_questions/02.png)

According to the situation we have collected so far, the most likely to cause a constant reset problem may have two reasons:

- Power supply problem: please make sure the voltage of USB ≥ 4.7V, 300mA;
- You chose an error board: because each type of board may have a different FLASH size, and they have a different partition map, it will cause the internal logic error.
