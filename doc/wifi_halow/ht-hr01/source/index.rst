
**HT-HR01 Raspberry Pi HAT with Camera and Wi-Fi HaLow**

:ht_translation:`[简体中文]:[Eglish]`

**This document is still under construction and will be completed soon.**

.. warning:: 
   The current firmware version tests are all conducted on Raspberry PI 4B.

Introduction
============

Pi-CamLow is a Raspberry Pi HAT(Hardware Attached on Top) that integrates Wi-Fi HaLow and a camera. Using the firmware we provided, this board allows you to enable various Wi-Fi HaLow functionalities such as AP, node, and Mesh networking on Raspberry Pi.

.. image:: ./img/03.png
   :align: center
   :width: 500px 

Feature
-------

- Raspberry Pi HAT, Specifically designed for Raspberry Pi, making integration and installation easy.
- Provides firmware 
- Excellent Wi-Fi HaLow RF performance
- Powerful camera capabilities

Components
----------

.. image:: ./img/01.png
   :align: center
   :width: 500px 

-------------------------------------------------------------------

Basic Resources
===============

- `ESP-HaLowCamera Datasheet <https://resource.heltec.cn/download/HT-HR01/Datasheet>`_
- `ESP-HaLowCamera Schematic Diagram <https://resource.heltec.cn/download/HT-HR01/Schematic_diagram>`_
- `HaLow-Camera Firmware <https://resource.heltec.cn/download/HT-HR01/firmware/Pi-CamLow>`_

Pin Mapping
===========

The pins on this HAT are fully compatible with the Raspberry Pi.

.. image:: ./img/02.png
   :align: center
   :width: 800px

---------------------------------------------------------------

Get started
===========

Hardware
--------
Hardware Preparation
^^^^^^^^^^^^^^^^^^^^
- `Pi-CamLow <https://heltec.org/project/ht-hc32/>`_
- `Raspberry Pi 4 Module B <https://heltec.org/project/raspberry-pi4-model-b/>`_
- Micro SD card
- SD card reader
- Computer running Windows, Linux, or macOS

Hardware installation
^^^^^^^^^^^^^^^^^^^^^
Follow the steps shown below to install and connect the device.

.. image:: ./img/10.png
   :align: center

Power
^^^^^^
HR01 is powered by Raspberry PI, so it is sufficient to connect the Raspberry PI power supply.

-----------------------------------------------------------

Install firmware
----------------
1. Download the `HR01_Firmware <https://resource.heltec.cn/download/HT-HR01/Firmware/HT-HR01-20241024.gz>`_ and `Raspberry Pi Imager <https://www.raspberrypi.com/software/>`_.
2. Insert the SD card into the card reader and connect it to your computer.

3. Install and run the **Raspberry Pi Imager tool**.

.. image:: ./img/11.png
   :align: center
   :width: 500px

4. Select the appropriate Raspberry Pi model. Slect `Use custom`.Select the **HR01_Firmware** you just downloaded.

.. image:: ./img/12.png
   :align: center
   :width: 500px

6. Click `NEXT` and complete the firmware installation.

7. Remove the SD card from the card reader and insert it into the Raspberry Pi.

.. image:: ./img/13.png
   :align: center
   :width: 500px

------------------------------------------------------

Setup and Use
-------------

.. warning:: 
   Do not Setup while connected to a network cable. If you accidentally did this, please unplug the network cable and reconnect the power.

1. After powering on the device, the red indicator light should turn on, indicating that the device is starting up, which will take approximately dozens of seconds.

2. After the red light turns off, press and hold the device button for 3 seconds until the yellow light turns on, then release the button. At this point, the device has entered configuration mode.

.. image:: ./img/14.png
   :align: center
   :width: 500px

.. note:: 
   In configuration mode, after a period of time, the indicator light will change to a red-green flashing state. This is normal, and the device is still in configuration mode. If you are unable to find the HT-HR01-XXXX configuration hotspot in this state, please try pressing and holding the button for 3 seconds again to re-enter configuration mode.

3. At this point, use your computer to find the Wi-Fi hotspot named 'HT-HR01-XXXX' and connect to it. 
   - The default password is "heltec.org".

.. image:: ./img/04.png
   :align: center
   :width: 500px

4. Open the web browser on your computer and go to '10.42.0.1'. 
   - Default username: root
   - Default password: heltec.org

.. image:: ./img/05.png
   :align: center
   :width: 500px

.. tip::
   

5. Select the mode you want to run and configure it accordingly. For detailed functionality and usage of each mode, please refer to the following link:

   - `Wi-Fi HaLow Feature Description and Configuration Guide <https://docs.heltec.org/en/wifi_halow/halow_guide/index.html>`_

FAQs
=====

- `HT-HR01 Frequently Asked Questions <https://docs.heltec.org/en/wifi_halow/ht-hr01/faq/index.html>`_

Heltec General Docs
===================
-->[General Docs]<-- <https://docs.heltec.org/general/index.html>
