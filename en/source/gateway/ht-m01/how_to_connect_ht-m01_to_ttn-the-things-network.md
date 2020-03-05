# How to connect HT-M01 to TTN(The-Things-Network)

-------------------------------------------------------------------------------------------------------

## CONTENT

1. [Overview](#overview)
2. [Preparation](#preparation)
3. [Connect to TTN](#connect-to-ttn)



## Overview

​		The Things Network, commonly known as TTN, is an open source infrastructure aiming at providing a free LoRaWAN network cover. 

​		This article aims to describe how to connect [HT-M01 Gateway](https://heltec.org/project/ht-m01) to TTN, which facilitates secondary development and rapid deployment of LoRa devices.

## Preparation
- First we need a TTN registered account, if there is no account, please click [here](https://console.thethingsnetwork.org/), enter the TTN official website and register your account.
- Connect the HT-M01 to a Raspberry Pi (Linux) or Windows computer.

## Connect to TTN

Select ```Gateway``` in the TTN's console.

<img src="img\how_to_connect_ht-m01_to_ttn-the-things-network\01.png">

Fill in the HT-M01 information as shown below and complete the addition.

<img src="img\how_to_connect_ht-m01_to_ttn-the-things-network\02.png">

- If you are using packet_forwarder_UI in Windows® and forwarding the message to the TTN, you need to:

1. Select the frequency band.
2. Check the box to the contents.
3. Click OK to start forwarding.

<img src="img\how_to_connect_ht-m01_to_ttn-the-things-network\03.png">

- If you are using packet_forwarder forwarding in Raspberry Pi (Linux)
  The global_conf file needs a few changes. To edit it type:

```
  nano /home/pi/lora/packet_forwarder/lora_pkt_fwd/global_conf.json/global_conf.json
```
  At the end of the file make these changes:


  ```
  “gateway_ID”: “YOUR_GATEWAY_ID”,
  “server_address”: “router.eu.thethings.network”,
  “serv_port_up”: 1700,
  “serv_port_down”: 1700,
  ```

  Where **"YOUR_GATEWAY_ID"** fills in the Gateway ID obtained when configuring the Raspberry Pi.

  Restart the forwarding service after the change is complete.

  Going back to TTN, you will get this:

<img src="img\how_to_connect_ht-m01_to_ttn-the-things-network\04.png">



At this point, the HT-M01 has successfully connected to the TTN.