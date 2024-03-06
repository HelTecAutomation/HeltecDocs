# Connect to LoRaWAN Server

{ht_translation}`[简体中文]:[English]`

This topic describes how to connect Wireless Aggregator to the LoRaWAN server. Before you start, make sure you have the following two things:

- Set up your Wireless Aggregator. Quickstart and entry into configuration mode for the HRI-363X is available here: [Quickstar](https://docs.heltec.org/en/ready_to_use/3631/quick_start.html).

- Make sure your lora gateway is registered with the relevant server and is working well.
We highly recommend the following three gateways:
[HT-M02](https://heltec.org/project/ht-m02-v2/)  [HT-M01s](https://heltec.org/project/ht-m01s-v2/)    [HT-M7603](https://heltec.org/project/ht-m7603/)

## Connect to TTN/TTS
### Registeration
Create a new **Application**, All the options are free to fill in.

![](img/08.png)

Click the `register end device`.

![](img/09.png)

Choose the way to register the node, it is recommended to `Enter end device specifics manually`, Select the frequency plan, LoRaWAN version, and fill in the corresponding joinEUI, click `confirmed`.

``` {Tip} joinEUI corresponds to AppEUI on the device.

```

``` {Tip} As of November 2023, Heltec's products use LoRaWAN1.0.2 revision B.

```
![](img/10.png)

Fill in the `DevEUI` and `AppKey` of the device; The `End device ID` is automatically generated by the server. Click on `Register end divece`.

![](img/11.png)

Click `General Setting` to check whether the configuration is correct, drop down to the `Network layer` option, click `Expand`, and continue to check.

``` {Tip} The General Setting option is On the upper right corner. Be careful not to choose the wrong one. The General Setting option on the left is used to change the parameters of the Application.

```

``` {Tip} The default is Class_A after registration, and if the node is Class_C or Class_B, it needs to be selected and saved here.

```

![](img/12.png)

After registration is complete, if all is well, you will see the device active.

![](img/13.jpg)

### Parsing
+ Click `payload formatters`, select `Custom Javascript formatter`, and enter decoding at the position in the figure. Download the decoder here: [https://resource.heltec.cn/download/Sensor%20Hub%20for%20industry](https://resource.heltec.cn/download/Sensor%20Hub%20for%20industry).

![](img/14.jpg)

+ Click `Save change` and move the mouse to the uplink data output to view the data uploaded by HRU-3601.

![](img/15.png)

## Connect to ChirpStack

Register a new device in ChirpStack’s “Applications” page. Enter the device name, description, DevEUI. Select Device-profile.

![](img/20.png)

Enter the Application key of the device.

![](img/21.png)

After registration is complete, if all is well, you will see the device active.

![](img/22.png)

## Connnect to SnapEmu (Manual registration)

*This section describes how to manually register nodes on SnapEmu. If you need to register by scanning the QR code of your device, please refer to this link: .*

Enter configuration mode to get device-related registration information, please refer to: [HRI-3631 Configuration]().

Log into your account on **platform.snapemu.com**, click `device`, `CREATE A NEW DEVICE`.

 *If you're using an APP,click `+` ,select `input`.*

![](img/platformcreate.png)

Fill in the device information.

![](img/platformregister.png)

After registration is complete, if all is well, you will see the device active.

![](img/platformcreategate.png)

## Important Hints

Please double check the following two things:

1. The LoRaWAN parameters is the same as server!
2. The listening frequency of your LoRa Gateway is the same as ESP32 LoRa node's sending frequency. We strictly follow [LoRaWAN™ 1.0.2 Regional Parameters rB](https://resource.heltec.cn/download/LoRaWANRegionalParametersv1.0.2_final_1944_1.pdf);
