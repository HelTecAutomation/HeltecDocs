*************************************
Heltec Products Operation Documention
*************************************

Heltec Automation is an IoT device/solution provider mainly in LoRa/LoRaWAN field. This documentation page is trying to make sense to you about how to use our products. This is a document in the nature of operation guide. If you want to get more information about product parameters, please refer to the product manual or `Heltec Automation website <https://heltec.org>`_.

This picture shown the LoRaWAN communication framkework.

.. figure:: img/01.png
   :scale: 90%
   :align: center
   :alt: LoRaWAN communication framkework
   :figclass: align-center

LoRa server
===========

For a whole LoRaWAN communication process, a server is must needed, LoRaWAN server includedd two parts: Network Server and Application Server (We also generally call them NS). LoRa node join network, ACK, identity identification, communication authentication, etc. are handled by NS. Now there are many excellent LoRaWAN NS, such as:

- `ChirpStack <https://www.chirpstack.io>`_
- `TTN <https://www.thethingsnetwork.org/>`_
- `Heltec LoRaWAN Test Server <https://lora.heltec.org/>`_

.. note:: We highly recommend use `Heltec LoRaWAN Test Server <https://lora.heltec.org/>`_, it's a ready to use LoRa server based on TTS V3, users can login with Heltec website account.

After login the LoRaWAN server, the next thing to do is register your gateway and nodes.

.. toctree::
   :maxdepth: 2
   :caption: LoRa Gateway
   
   HT-M00 Dual Channel LoRa Gateway <https://docs.heltec.cn/en/gateway/ht-m00/index.html>
   HT-M01 Evaluation LoRa Gateway <https://docs.heltec.org/en/gateway/ht-m01/index.html>
   HT-M01S Indoor LoRa Gateway <https://docs.heltec.org/en/gateway/ht-m01s/index.html>
   HT-M01S-V2 Indoor LoRa Gateway <https://docs.heltec.org/en/gateway/ht-m01s_v2/index.html>
   HT-M7603 Indoor LoRa Gateway <https://docs.heltec.org/en/gateway/ht-m7603/index.html>
   HT-M02 Edge LoRa Gateway <https://docs.heltec.org/en/gateway/ht-m02/index.html>
   HT-M02_V2 Edge LoRa Gateway <https://docs.heltec.org/en/gateway/ht-m02_v2/index.html>
   HT-1303 LoRaWAN Concentrator Module <https://docs.heltec.org/en/gateway/ht-1303/index.html>
   SX1301 Module (Phaseout) <https://docs.heltec.org/en/gateway/sx1301module/index.html>

Here are the LoRa Gateways produced by Heltec Automation. You will be able to find the quict start and how to register on LoRa NS.

.. toctree::
   :maxdepth: 2
   :caption: Dev Board

   ASR650x Series <https://docs.heltec.org/en/board/asr650x/index.html>
   ESP32 Series <https://docs.heltec.org/en/board/esp32/index.html>
   STM32 Series <https://docs.heltec.org/en/board/stm32/index.html>
   Sufficient IoT Hub <https://docs.heltec.org/dev_board/sufficient_iot_hub/index.html>

.. toctree::
   :maxdepth: 2
   :caption: Module
   
   ASR650x Series <https://docs.heltec.org/en/module/asr650x/index.html>
   Esp32 Series <https://docs.heltec.org/en/module/esp32/index.html>
   HT-AT62 <https://docs.heltec.org/en/module/ht_at62/index.html>
   HT-RA62 <https://docs.heltec.org/en/module/ht_ra62/index.html>
   
.. toctree::
   :maxdepth: 2
   :caption: DTU and sensor
   
   HRI-485x <https://docs.heltec.org/en/ready2use/hri_485x/index.html>
   

.. toctree::
   :maxdepth: 2
   :caption: General Docs

   /general/index

