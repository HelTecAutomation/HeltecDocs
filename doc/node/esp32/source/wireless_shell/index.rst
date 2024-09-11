Wireless Shell
==============
:ht_translation:`[简体中文]:[English]`

``Wireless Shell`` is a module, must work with other PCB boards, it belongs to “Heltec LoRa“ series, with the following features:
- CE Certificate;
- Microprocessor:ESP32-S3FN8 (Xtensa ® 32-bit LX7 dual core processor, five stage pipeline rack Structure, main frequency up to 240 MHz), with LoRa node chip SX1262;
- RF shielding (contain a shield shell) and other protection measures;
- Integrated WiFi, LoRa, Bluetooth network connections, both of them are IPEX socket;
- Support the Arduino development environment;
- (Exclusive) Supports the Arduino version of the ESP32 + LoRaWAN protocol routine provided by Heltec. This is a standard LoRaWAN protocol that can communicate with any gateway/base station running the LoRaWAN protocol (requires serial number activation, only the development of the company) The board is available, the serial number can be queried onthis page;
- With good RF circuit design and basic low-power design (sleep current: 9uA theoretically), it is convenient for IoT application vendors to quickly verify solutions and deploy applications.


.. tip::

   ESP32's BlueTooth and Wi-Fi antenna use a same pin, so BlueTooth and Wi-Fi can't work at the same time.


Related Resources
-----------------

.. toctree::
   :maxdepth: 1

   Datasheet <https://resource.heltec.cn/download/Wireless_Shell_V3/HTIT-Wsh_V3(Rev1.1).pdf>
   Schematic diagram <https://resource.heltec.cn/download/Wireless_Shell_V3/HTIT-Wsh_V3_Schematic_Diagram.pdf>
   Pin Map <https://resource.heltec.cn/download/Wireless_Shell_V3/HTIT-Wsh_V3.png>
   Reference Design <https://resource.heltec.cn/download/Wireless_Shell_V3/HTIT-Wsh_V3_Reference_Design.pdf>
   Hardware Update Log <hardware_update_log>

Get Start
---------

.. toctree::
   :maxdepth: 1

   Framework and libraries installation <https://docs.heltec.org/en/node/esp32/esp32_general_docs/quick_start.html>
   Programming Esp32 <programming_esp32>

Application and Extension
-------------------------

.. toctree::
   :maxdepth: 1

   LoRaWAN Sample Code <https://docs.heltec.org/en/node/esp32/esp32_general_docs/lorawan/index.html>
   Meshtastic Introduction <https://docs.heltec.org/en/node/esp32/esp32_general_docs/meshtastick.html>

Frequently Asked Questions
--------------------------

.. toctree::
   :maxdepth: 1

   Frequently Asked Questions <frequently_asked_questions>

Related Links
-------------

- `Heltec esp32 series framework on Github <https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series>`_
- `Heltec Esp32 library on Github <https://github.com/HelTecAutomation/Heltec_ESP32>`_
- `License Enquiry <https://resource.heltec.cn/search>`_
- `How to use license <https://docs.heltec.org/general/how_to_use_license.html>`_
- `Meshtastic Flasher <https://flasher.meshtastic.org/>`_
- `Meshtastic LoRa 32 Peripherals <https://meshtastic.org/docs/hardware/devices/heltec-automation/lora32/peripherals/>`_
- `LoRaWAN Parameters Instruction <https://docs.heltec.org/general/lorawan_parameters.html>`_
- `LoRaWAN example Sub-Band usage <https://docs.heltec.org/general/sub_band_usage.html>`_
- `LoRaWAN ABP Mode <https://docs.heltec.org/general/lorawan_abp/index.html>`_
- `LoRa Node to Node <https://docs.heltec.org/general/lora_node_to_node.html>`_