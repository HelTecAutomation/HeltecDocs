# Connect "ESP32 + LoRa" to LoRaWAN Server

Before this operation, please read this document carefully: **[“ESP32 + LoRa” Node Preparation & Config Parameters](https://heltec-automation-docs.readthedocs.io/en/latest/esp32/lorawan/config_parameter.html)**

![](img/connect_to_gateway/01.png)

&nbsp;

![](img/connect_to_gateway/05.png)



## Connect to TTN

Before that, make sure there is a LoRa Gateway active in your TTN's account.

### Register a device

Register a new device in TTN's "Applications" page. The `Device ID`, `Device EUI`, `App Key` can be generated automatically. users need make sure the relevant parameter in ESP32 LoRa node is the same with TTN.

![](img/connect_to_gateway/02.png)

Correctly config LoRaWAN parameters for ESP32 LoRa node, please refer to [this document](config_parameter). If all goes well, we will be able to see Device is alive in "DEVICE OVERVIEW".

![](img/connect_to_gateway/04.png)



## Connect to ChirpStack

Coming soon.



## Important Hints

Please double check the following two things:

1. The LoRaWAN parameters is the same as server!
2. The listening frequency of your LoRa Gateway is the same as ESP32 LoRa node's sending frequency. We strictly follow [LoRaWAN 1.1 Regional Parameters](https://lora-alliance.org/sites/default/files/2018-04/lorawantm_regional_parameters_v1.1rb_-_final.pdf);

