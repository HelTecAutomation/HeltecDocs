# Connect "STM32 + LoRa" to LoRaWAN Server
[简体中文](https://heltec-automation.readthedocs.io/zh_CN/latest/stm32/lorawan/connect_to_gateway.html)

In this document, all operations and tests must be performed with a standard [LoRaWAN Gateway](https://heltec.org/proudct_center/lora/lora-gateway/), and at least have 8 channels!

Before this operation, please read this document carefully: **[“STM32 + LoRa” Node Preparation & Config Parameters](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/lorawan/config_parameter.html#) .**

&nbsp;

## Connect to TTN

Before that, make sure there is a LoRa Gateway active in your TTN's account.

### Register a device

Register a new device in TTN's "Applications" page. The `Device ID`, `Device EUI`, `App Key` can be generated automatically. users need make sure the relevant parameter in STM32 LoRa node is the same with TTN.

![](img/connect_to_gateway/02.png)

Config LoRaWAN parameters for STM32 LoRa node correctly, please refer to [this document](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/lorawan/config_parameter.html). If all goes well, we will be able to see Device is alive in "DEVICE OVERVIEW".

![](img/connect_to_gateway/03.png)

&nbsp;

## Connect to ChirpStack

Coming soon.

&nbsp;

## Connect to HelTec server

Before that, make sure there is a LoRa Gateway active in your HelTec's account.

### Register a device

Select "AppsCreate" in "Apps" to create a new application, fill in the corresponding information and click "CREATE APPLICATION" to complete the application creation.

![](img/connect_to_gateway/04.png)

Select the newly created application in "AppsList", and create a new device in the application.

![](img/connect_to_gateway/05.png)

Config the "Device EUI" and "App Key" related parameters of the node device. The user needs to ensure that the parameters in the STM32 LoRa node are consistent with those configured in the server.

![](img/connect_to_gateway/06.png)

![](img/connect_to_gateway/07.png)

Correctly config LoRaWAN parameters for STM32 LoRa node, please refer to [this document](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/lorawan/config_parameter.html). If all goes well, we will be able to see the status of the device.

![](img/connect_to_gateway/08.png)

&nbsp;

## Important Hints

Please double check the following two things:

1. The LoRaWAN parameters is the same as server;
2. The listening frequency of your LoRa Gateway is the same as STM32 LoRa node's sending frequency. We strictly follow [LoRaWAN™ 1.0.2 Regional Parameters rB](https://resource.heltec.cn/download/LoRaWANRegionalParametersv1.0.2_final_1944_1.pdf).
