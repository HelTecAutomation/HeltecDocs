# How to connect CubeCell to TTN(The-Things-Network)

-------------------------------------------------------------------------------------------------------

## CONTENT

1. [Overview](#overview)
2. [Preparation](#preparation)
3. [Configure node information](#configure-node-information)

## Overview

​		[CubeCell Series](https://heltec.org/cubecell) is an efficient, low-cost LoRa node solution device by the Heltec AutoMation development team.

​		CubeCell has lower power consumption than ESP32 (sleep current 3.5uA), better impedance matching design, better RF power (core integration SX126x), and reserved solar panel interface to support 5.5V to 7V solar panels .

​		The CubeCell series of devices can be developed through the exclusive underlying layer developed by the HelTec team to perfectly support the convenient Arduino IDE.

The installation environment can be automatically installed by one-click download of the Arduino IDE 
[How to install and develop the CubeCell Arduino development environment](https://docs.heltec.cn/#/en/user_manual/how_to_install_ASR650x_Arduino)

​		This article aims to describe how to connect the [CubeCell Series (CubeCell-Board)](https://heltec.org/cubecell) to the TTN via the OTAA method in the LoRaWAN example.

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\01.png">

## Preparation
- Arduino IDE.

- First we need a gateway to connect to the TTN (for example, HT-M01), how to connect the gateway (HT-M01, HT-M02) to the TTN, please refer to [here](https://docs.heltec.cn/#/en/user_manual/how_to_connect_ht-m01_to_ttn-the-things-network).

- A [CubeCell-Board](https://heltec.org/project/htcc-ab01/) or [CubeCell-Cupsule](https://heltec.org/project/htcc-ac01/) and a premium USB cable.

- In this example, I use [HT-M01 Gateway](https://heltec.org/project/ht-m01/) and drive it through Windows **®** via USB, and use CubeCell-Board to quickly connect to TTN.


## Configure node information

First we have to create a new CubeCell-Board node in the TTN.

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\02.png">

- After installing the CubeCell Arduino IDE development environment, select CubeCell-Board in the Arduino, and the working frequency band, and select LoRaWAN example.

- I need the CubeCell-Board to work in the EU 868 band in Class A mode, which requires:

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\03.png">

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\04.png">

- 1. Make sure the AT command mode is turned on and the required features are turned on.
```
#define  AT_SUPPORT  1
```
For example, turn on the RGB light.
```
#define LoraWan_RGB 1
```
- 2. Click to download.
- 3. The node access information is configured through the AT command.

Open the serial port (COM4) and reset the CubeCell-Board. After the node is started, you can observe the printing:

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\05.png">

#### At the beginning we need to send arbitrary data to the COM to wake up the MCU.

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\06.png">

We will see the information returned by CubeCell-Board.
```
ASR is Waked,LowPower Mode Stopped
```


After waking up the MCU, we can start to configure the DevEui, AppEui, AppKey of the registered nodes to CubeCell-Board.

E.g:
```
AT+DevEui=2232330000******
AT+AppKey=888888888888888888888888********
AT+AppEui=70B3D57ED00*****
```

PS: '*' is the actual registered number. We need to be careful to ensure that the interval between each instruction is >100ms as much as possible to avoid some unnecessary bugs.

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\07.png">

The node works in Class A mode by default, and the sending period is 15s. By default, ADR is enabled.

For example, I need to modify the send period to 60s and query the EUI of the node:

```
AT+DutyCycle=60000
AT+DevEui=?
```

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\08.png">

#### Please note that the configuration of the node's network access information must take effect only when the node is reset or the next time it enters the network. The parameters that have been configured by the node are printed after reset.

The CubeCell-Board can be reset by sending ```AT+RESET=1```.

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\09.png">

The CubeCell-Board completes the reset and starts to enter the network.

Return to TTN to view:

<img src="img\how_to_connect_cubecell_to_ttn-the-things-network\10.png">

CubeCell-Board has successfully connected to TTN!

Enjoy!