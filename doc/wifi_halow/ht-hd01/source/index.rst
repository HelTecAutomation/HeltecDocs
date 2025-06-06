
HT-HD01 Wi-Fi HaLow Dongle User Guide
=====================================

:ht_translation:`[简体中文]:[Eglish]`

Introduction
------------
HT-HD01 is a plug-and-play  long-range communicator based on Wi-Fi HaLow can replace Ethernet cables in certain scenarios. Pair two devices for use, or work with the HaLow gateway.

.. image:: ./img/01.png
   :align: center
   :width: 400px

Feature
-------

- Long transmission range, up to 1km.
- Plug and play, simple configuration.
- IEEE 802.11ah standard.
- Both Wi-Fi and Ethernet supported, WiFi HaLow and 2.4GHz dual-band design.
- Firequency range: 902~928 MHz.
- Seamlessly connected to traditional networks.

Components
----------

.. image:: ./img/02.png
   :align: center
   :width: 700px

------------------------------------

Network Mode
------------

AP-STA: Point to Point
^^^^^^^^^^^^^^^^^^^^^^

.. image:: ./img/04.jpg
   :align: center
   :width: 500px

AP-STA: Star Topology
^^^^^^^^^^^^^^^^^^^^^

.. image:: ./img/17.webp
   :align: center
   :width: 500px

AP-STA: LAN
^^^^^^^^^^^^^^^^^^^

.. image:: ./img/19.jpg
   :align: center
   :width: 500px

Mesh Networking
^^^^^^^^^^^^^^^

.. image:: ./img/18.jpg
   :align: center
   :width: 500px

RGB Indicator
-------------
**The description may vary depending on the firmware version.**

.. table:: Firmware Version 20250605
   :widths: auto
   :align: center

   +--------+------------+-----------------------------------------------------------------------------------------+
   | Color  | State      | Description                                                                             |
   +========+============+=========================================================================================+
   | Red    | Fast blink | Device booting                                                                          |
   +--------+------------+-----------------------------------------------------------------------------------------+
   | Red    | Solid      | Device starting up                                                                      |
   +--------+------------+-----------------------------------------------------------------------------------------+
   | Red    | Blink once | Button pressed                                                                          |
   +--------+------------+-----------------------------------------------------------------------------------------+
   | Cyan   | Fast blink | AP/Mesh_gate device connecting to upstream network via RJ45/Wi-Fi                       |
   +--------+------------+-----------------------------------------------------------------------------------------+
   | Cyan   | Solid      | AP/Mesh_gate device successfully obtained upstream IP via RJ45/Wi-Fi                   |
   +--------+------------+-----------------------------------------------------------------------------------------+
   | Purple | Fast blink | AP/Mesh_gate device connecting to upstream network via USB-C                            |
   +--------+------------+-----------------------------------------------------------------------------------------+
   | Purple | Solid      | AP/Mesh_gate device successfully obtained upstream IP via USB-C                         |
   +--------+------------+-----------------------------------------------------------------------------------------+
   | Green  | Fast blink | STA/Mesh_point device connecting to upstream network via RJ45/Wi-Fi                     |
   +--------+------------+-----------------------------------------------------------------------------------------+
   | Green  | Solid      | STA/Mesh_point device successfully obtained upstream IP via RJ45/Wi-Fi                 |
   +--------+------------+-----------------------------------------------------------------------------------------+
   | Blue   | Fast blink | STA/Mesh_point device connecting to upstream network via USB-C                          |
   +--------+------------+-----------------------------------------------------------------------------------------+
   | Blue   | Solid      | STA/Mesh_point device successfully obtained upstream IP via USB-C                       |
   +--------+------------+-----------------------------------------------------------------------------------------+
   | Yellow/| Alternating| Entering configuration mode                                                             |
   | Others | blink      |                                                                                         |
   +--------+------------+-----------------------------------------------------------------------------------------+
   | White  | 3 seconds  | Factory reset                                                                           |
   +--------+------------+-----------------------------------------------------------------------------------------+

.. toctree::
   :maxdepth: 2
   
   Overview<https://docs.heltec.org/en/wifi_halow/ht-hd01/index.html>
   Quick Start(Plug&Play)<quick_started>
   Access Configuration Page<access_configuration_page>
   AP-STA Mode <ap-sta/index>
   Mesh Mode <mesh/index>
   IP Allocation Rules<ip_rules>
   Frequently Asked Questions<faq>
   Hardware Update Log<hardware_update_log>
   OTA Firmware Upgrade<ota>
   Heltec General<https://docs.heltec.org/general/index.html>

HD01 Related Links
------------------

- `Wi-Fi HaLow general user guide <https://docs.heltec.org/en/wifi_halow/halow_guide/index.html>`_
- `HT-H7608 Wi-Fi HaLow Gateway <https://docs.heltec.org/en/wifi_halow/ht-h7608/index.html>`_
- Technical Support: support@heltec.cn
- `HD01 Resource station <https://resource.heltec.cn/download/HT-HD01>`_

   