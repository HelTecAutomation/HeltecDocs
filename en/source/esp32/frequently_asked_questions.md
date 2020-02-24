# Heltec<sup>TM</sup> ESP32+LoRa Series Frequently Asked Questions

This page contains the most frequently questions from user. if this page's detail can't solve your problem, you can also talk in our forum: [community.heltec.cn](http://community.heltec.cn/)

&nbsp;

## Can't Download Firmware

- Use a better USB cable, or change a USB socket;
- Check and make sure the CP210x drive had been correctly installed, users can refer to this document: [https://docs.heltec.cn/#/en/user_manual/establish_serial_connection](https://docs.heltec.cn/#/en/user_manual/establish_serial_connection);
- Press "PRG" button before upload.

&nbsp;

## Orange LED Blink Problem

Annoying orange LED lights are always flashing? It's because the battery management chip MCP73831. with the following control logic:

- Blink -- Power on
- Bight -- Charging
- Turn OFF -- Battery filled

Change this capacitor to 220nF to temporarily correct this problem.

![](img/frequently_asked_questions/replcae.png)

We had use the TP4054 to replace MCP73831, the orange LED have new control logic:

- Dim -- Power on
- Bight -- Charging
- Turn OFF -- Battery filled

## System Reset All the Time

![](img/frequently_asked_questions/resetallthetime.png)

According to the situation we have collected so far, the most likely to cause a constant reset problem may have two reasons:

- Power supply problem: please make sure the voltage of USB ≥ 4.7V, 300mA;
- You chose an error board: because each type of board may have a different FLASH size, and they have a different partition map, it will cause the internal logic error.

## About WiFi LoRa 32(V2) Sleep Current Test

Use the battery to power the development board, and connect an ammeter to the positive pole of the battery. Download this example code:

[https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/Low_Power/Low_Power.ino](https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/examples/Low_Power/Low_Power.ino)

This video is the test effect:

[https://v.youku.com/v_show/id_XNDI2NTE1NTQ3Ng==.html?spm=a2h3j.8428770.3416059.1](https://v.youku.com/v_show/id_XNDI2NTE1NTQ3Ng==.html?spm=a2h3j.8428770.3416059.1)