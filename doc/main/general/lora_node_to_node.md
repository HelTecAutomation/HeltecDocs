# LoRa Node to Node
{ht_translation}`[简体中文]:[English]`

## Summary
On the premise of no hardware problem, LoRa nodes can communicate with each other node-to-node. The key to success node-to-node communication need make sure the following 7 points the same:

1.  The same sending and listening frequency: `LoRa.setFrequency(frequency);`
2.  The same bandwidth: `LoRa.setSignalBandwidth(signalBandwidth);`
3.  The same coding rate: `LoRa.setCodingRate4(codingRateDenominator);`
4.  The same preamble length: `LoRa.setPreambleLength(preambleLength);`
5.  The same sync word: `LoRa.setSyncWord(syncWord);`
6.  The status of `LORA_IQ_INVERSION` is the same;
7.  the same `SPREADING FACTOR`;

## Example
*Comming Soon*

Know more information about LoRa node-to-node communication, please refer to LoRa basic library APIs: `https://github.com/HelTecAutomation/Heltec_ESP32/blob/master/src/lora/API.md`