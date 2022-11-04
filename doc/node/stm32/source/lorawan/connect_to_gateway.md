# Connect "STM32 + LoRa" to LoRaWAN Server
{ht_translation}`[简体中文]:[English]`

In this document, all operations and tests must be performed with a standard [LoRaWAN Gateway](https://heltec.org/proudct_center/lora/lora-gateway/), and at least have 8 channels!

Before this operation, please read this document carefully: **[“STM32 + LoRa” Node Preparation & Config Parameters](https://docs.heltec.org/en/node/stm32/lorawan/config_parameter.html) .**

&nbsp;

## Connect to TTN/TTS

Before that, make sure there is a LoRa Gateway active in your [TTN](https://console.thethingsnetwork.org/)/[TTS](https://lora.heltec.org/console) account.

### Register a device

Register a new device in TTN or TTS “Applications” page. Select the corresponding Brand, Model, Hardware Version, Firmware Version, Region.

![](img/connect_to_gateway/01.png)

Select the frequency plan, and fill in the corresponding AppEUI, DevEUi, AppKey, and register the device.

![](img/connect_to_gateway/02.png)

After registration is complete, if all is well, you will see the device active.

![](img/connect_to_gateway/03.png)

&nbsp;

## Connect to ChirpStack

Register a new device in ChirpStack’s “Applications” page. Enter the device name, description, DevEUI. Select Device-profile.

![](img/connect_to_gateway/04.png)

Enter the Application key of the device.

![](img/connect_to_gateway/05.png)

After registration is complete, if all is well, you will see the device active.

![](img/connect_to_gateway/06.png)

&nbsp;

## Important Hints

Please double check the following two things:

1. The LoRaWAN parameters is the same as server;
2. The listening frequency of your LoRa Gateway is the same as STM32 LoRa node's sending frequency. We strictly follow [LoRaWAN™ 1.0.2 Regio
