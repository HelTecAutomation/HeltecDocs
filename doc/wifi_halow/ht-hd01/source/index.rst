
HT-HD01 Wi-Fi HaLow Dongle User Guide
=====================================

:ht_translation:`[简体中文]:[Eglish]`

Introduction
------------
HT-HD01 is a plug-and-play network bridge designed to significantly extend the transmission range of traditional networks.

.. image:: ./img/01.png
   :align: center
   :width: 500px

Feature
-------
- Long transmission range, up to 1km.
- IEEE 802.11ah standard.
- Both Wi-Fi and Ethernet supported, WiFi HaLow and 2.4GHz dual-band design.
- Large capacity allows access to a large number of devices simultaneously.
- High transmission rate, 32.5Mbps@8MHz, 15Mbps@4MHz.
- Firequency range: 902~928 MHz.
- High penetration.
- Seamlessly connected to traditional networks.
- Offers four bandwidth modes: 1/2/4/8MHz.
- Plug and play, simple configuration.
- Lightweight and easy to deploy.
- Rich in modes and strong in extensibility.

Components
----------

.. image:: ./img/02.png
   :align: center
   :width: 700px

----------------------------------------------------------------

Enter configuration Page
------------------------
.. tip::

   If you are using the default "AP-STA" mode and do not need to change the default configuration or password, you can skip this section

.. warning::
   If you're using Wi-Fi for configuration, you'll need to unplug the cable before powering on.

1. Powered on, press the button with the SIM needle for 3 seconds until the yellow light is on and release it.

.. image:: ./img/07.jpg
   :align: center
   :width: 500px 

2. There are two ways to connect to the configuration network of the device, either of which you can choose:

   - **Via Ethernet**, using a cable directly to connect the computer to the HT-HD01.
   - **Via Wi-Fi**, use your computer to find a WiFi hotspot named HT-HD01-xxxx and connect to it.

3. Enter "10.42.0.1" in your browser to navigate to the configuration page, the default account as "root" and password as "heltec.org".

.. image:: ./img/05.png
   :align: center
   :width: 500px

4. Please refer to the following link to set up your device:

- `Access Point setup guide <https://docs.heltec.org/en/wifi_halow/halow_guide/gateway.html>`_
- `Station(Client) setup guide <https://docs.heltec.org/en/wifi_halow/halow_guide/station.html>`_

------------------------------------------------

Quick Started(Default paired mode)
----------------------------------
We have provided a plug-and-play mode for the HT-HD01 to help you get started more quickly.

.. image:: ./img/13.jpg
   :align: center
   :width: 700px 

1. Connect Access Point  

Connect the AP device to the upstream router and power it on. When the red light goes off and the green light stays on, it indicates that the device has successfully joined the network and obtained an IP address.

.. image:: ./img/11.jpg
   :align: center
   :width: 700px 

.. tip:: 
   If you use Wi-Fi to connect to the upstream network, please refer to the topic: `Reconfiguration <#section_one>`_

2. Station(Client) 

Under default conditions, your device is already paired. You only need to power on the STA device, and it will be able to work with the AP device.

.. image:: ./img/12.jpg
   :align: center
   :width: 700px

.. tip:: 
   If you need to re-pair, please refer to: {Reconfiguration}`Reconfiguration`
      
3. Start Using  

You can directly connect your device to the RJ45 or USB-C port, or you can use the device's Wi-Fi to connect.

- Default 2.4G Wi-Fi SSID:HT-HD01-XXXX
- Default Password:heltec.org

.. image:: ./img/13.jpg
   :align: center
   :width: 700px

.. warning::
   The blue light of the device represents a USB-C cable, and the green light represents an RJ45 cable. If the color of your indicator does not match the type of network cable you are connected to, you need to change the color of the indicator by pressing the button.
   
--------------------------------------------------------

Work with HaLow Gateway
-----------------------
HT-HD01 can be work as a normal HaLow client, and connected to the HaLow gateway(such as `HT-H7608 <https://heltec.org/project/ht-h7608/>`_.)

.. image:: ./img/13.jpg
   :align: center
   :width: 700px 

1. Enter configuration

   Refer to the `Enter configuration Page <https://docs.heltec.org/en/wifi_halow/ht-hd01/index.html#enter-configuration-page>`_ topic to go to the configuration page.

2. Configuration

   See this link for instructions on how to set STA mode:
   - `Station(Client) setup guide <https://docs.heltec.org/en/wifi_halow/halow_guide/station.html>`_

----------------------------------------------------------

View and change the configuration
---------------------------------
IP-Based Connection
~~~~~~~~~~~~~~~~~~~
1. Connect the PC(Laptop) to the same network as the device, and go to the router's control page.

.. tip:: 
   By default, connect to your upstream router. If not, then you need to determine how your device's IP is obtained, as described in the `Wi-Fi Setup Guide <https://docs.heltec.org/en/wifi_halow/halow_guide/>`_.

2. Find the IP address of the corresponding device.

.. image:: ./img/08.png
   :align: center
   :width: 500px

3. Go to this address, default account "root", default password "heltec.org".

.. image:: ./img/09.png
   :align: center
   :width: 500px

4. From this page, you can view the device information or change the relevant Settings.

.. image:: ./img/10.png
   :align: center
   :width: 500px

AP Remote Access
~~~~~~~~~~~~~~~~
1. Connect the PC(Laptop) to the Dongle.
2. Enter “192.168.1.1” or “10.42.0.1” in the browser (depending on the mode of operation of the device, if you are not sure which one to enter, you can try both). You will see the IP of the connected device and the IP of the Dongle itself.

Frequently asked questions
--------------------------

.. toctree::
   :maxdepth: 1

   HT-HD01 FAQ <faq>

Hardware Update Log
-------------------

.. toctree::
   :maxdepth: 1

   Hardware Update Log <hardware_update_log>

Related Links
-------------

- `Wi-Fi HaLow general user guide <https://docs.heltec.org/en/wifi_halow/halow_guide/index.html>`_
- `HT-H7608 Wi-Fi HaLow Gateway <https://docs.heltec.org/en/wifi_halow/ht-h7608/index.html>`_
- Technical Support: support@heltec.cn
- `HD01 Resource station <https://resource.heltec.cn/download/HT-HD01>`_
