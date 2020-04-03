# Heltec<sup>TM</sup> STM32+LoRa Series Frequently Asked Questions
[简体中文](https://heltec-automation.readthedocs.io/zh_CN/latest/stm32/frequently_asked_questions.html)

This page contains the most frequently questions from user. If this page's detail can't solve your problem, you can also talk in our forum: [community.heltec.cn](http://community.heltec.cn/)

&nbsp;

## Can't Download Firmware

- Use USB cable.
  - Use a better USB cable, or change a USB socket.
  - Enter the DFU mode correctly.
- Use ST-LINK.
  - Make sure that the development board is connected to ST-LINK correctly.

Please refer to the following documents:

- [LoRa Node 151 download firmware](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/lora_node_151/download_firmware.html);
-  [Turtle Board download firmware](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/turtle_board/download_firmware.html).

&nbsp;

## Serial port has no output

- Use USB-CDC(USB-Virtual Serial Port)
  - USB-CDC is not configured correctly(You can refer to our examples).
- Use USB-UART
  - Make sure that the development board is connected to USB-UART module correctly.

Please refer to the following documents:

- [LoRa Node 151 Establish Serial Connection](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/lora_node_151/establish_serial_connection.html);
- [Turtle Board Establish Serial Connection](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/turtle_board/establish_serial_connection.html).