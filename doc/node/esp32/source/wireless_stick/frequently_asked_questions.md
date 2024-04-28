# Frequently Asked Questions
{ht_translation}`[简体中文]:[English]`

This page contains the most frequently questions from user. If this page's detail can't solve your problem, you can also talk in our forum: [community.heltec.cn](http://community.heltec.cn/)

&nbsp;

## Can't Download Firmware

- Use a better USB cable, or change a USB socket;
- Check and make sure the CP210x drive had been correctly installed, users can refer to this document: [Establish Serial Connection](https://heltec-automation-docs.readthedocs.io/en/latest/general/establish_serial_connection.html);
- Press "PRG" button before upload.

## Node to node communication

On the premise of no hardware problem, LoRa nodes can communicate with each other node-to-node. The key to success node-to-node communication need make sure the following 7 points the same:

1.  The same sending and listening frequency: `LoRa.setFrequency(frequency);`
2.  The same bandwidth: `LoRa.setSignalBandwidth(signalBandwidth);`
3.  The same coding rate: `LoRa.setCodingRate4(codingRateDenominator);`
4.  The same preamble length: `LoRa.setPreambleLength(preambleLength);`
5.  The same sync word: `LoRa.setSyncWord(syncWord);`
6.  The status of `LORA_IQ_INVERSION` is the same;
7.  the same `SPREADING FACTOR`;

Know more information about LoRa node-to-node communication, please refer to LoRa basic library APIs: `https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/src/lora/API.md`

## Meshtastick

**The device uses the firmware of Wireless Stick Lite, it <u>does not</u> have a display function.**