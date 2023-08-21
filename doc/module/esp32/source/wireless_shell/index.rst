Wireless Shell
==============
:ht_translation:`[简体中文]:[English]`

``Wireless Shell`` is a module, must work with other PCB boards, it belongs to “Heltec LoRa“ series, with the following features:
- CE Certificate;
- Microprocessor:ESP32-S3FN8 (Xtensa ® 32-bit LX7 dual core processor, five stage pipeline rack Structure, main frequency up to 240 MHz), with LoRa node chip SX1262;
- RF shielding (contain a shield shell) and other protection measures;
- Integrated WiFi, LoRa, Bluetooth network connections, both of them are IPEX socket;
- Support the Arduino development environment;
- (Exclusive) Supports the Arduino version of the ESP32 + LoRaWAN protocol routine provided by Heltec. This is a standard LoRaWAN protocol that can communicate with any gateway/base station running the LoRaWAN protocol (requires serial number activation, only the development of the company) The board is available, the serial number can be queried onthis page);
- With good RF circuit design and basic low-power design (sleep current: 9uA theoretically), it is convenient for IoT application vendors to quickly verify solutions and deploy applications.


.. tip::

   ESP32's BlueTooth and Wi-Fi antenna use a same pin, so BlueTooth and Wi-Fi can't work at the same time.


.. toctree::
   :maxdepth: 2
    
    Quick Start <quick_start>
    Programming_esp32<programming_esp32>
    LoRaWAN <lorawan/index> 
    
Relevant Offical Resources
--------------------------

- `Heltec ESP32 development framework source code <https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series>`_;
- `Heltec ESP32 series Arduino library <https://github.com/HelTecAutomation/Heltec_ESP32>`_;
- `LoRaWAN-Node protocol Arduino library <https://github.com/HelTecAutomation/ESP32_LoRaWAN>`_.