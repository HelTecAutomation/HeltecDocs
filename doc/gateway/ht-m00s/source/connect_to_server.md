# Connect HT-M00S to LoRa Server
{ht_translation}`[简体中文]:[English]`

## Summary

This article aims to describe how to connect [HT-M00S](https://heltec.org/project/ht-m00s/) to a LoRa server, such as [TTN](https://www.thethingsnetwork.org/)/[TTS](https://lora.heltec.org/), [ChirpStack](https://www.chirpstack.io/), which facilitates secondary development and rapid deployment of LoRa devices.

Before all operation, make sure the HT-M00S is running well . If not, please refer to this [HT-M00S_Quick Start](https://docs.heltec.org/en/gateway/ht-m00s/quick_start.html) document.

[Connect to TTN/TTS](connect-to-ttn)

[Connect to Chirpstack](connect-to-chirpstack)

[Connect to SnapEmu](connect-to-snapemu)

&nbsp;

(connect-to-ttn)=
## Connect to TTN/TTS

### Register a LoRa gateway in TTN/TTS

Select a cluster in the [TTN console](https://console.thethingsnetwork.org/) page to start adding devices and gateways. Or start adding devices and gateways in [TTS console](https://lora.heltec.org/console).

![](img/connect_to_server/01.png)

Create a new gateway.

![](img/connect_to_server/02.png)

Fill in the HT-M00S information as shown below and complete the addition.

![](img/connect_to_server/10.png)

- **Gateway EUI** -- The unique ID of HT-M00S gateway, view from configuration page.
- **Gateway ID** -- Generated by default.
- **Gateway name** -- Filled in by the user, can be filled in arbitrarily.
- **Frequency Plan** -- Matches the LoRa band configuration in HT-M00S.

### Configure the Gateway
Configuring the gateway, please refer to the [HT-M00S](https://docs.heltec.org/en/gateway/ht-m00s/quick_start.html) document.

![](img/connect_to_server/03.png)

Check the server address in the gateway details.

![](img/connect_to_server/04.png)

View gateway status, it is running:

![](img/connect_to_server/05.png)

&nbsp;

(connect-to-chirpstack)=
## Connect to ChirpStack Server

[ChirpStack](https://www.chirpstack.io/) is the most popular LoRa server open source project, widely used in many fields, and also the best choise for a private LoRa server.

- ChirpStack Installation guide: [https://www.chirpstack.io/overview/](https://www.chirpstack.io/overview/)
- ChirpStack support forum: [https://forum.chirpstack.io/](https://forum.chirpstack.io/)

### ChirpStack Gateway Bridge

**One thing need attention!** the ChirpStack need a special service named `Gateway Bridge`, which converts LoRa® Packet Forwarder protocols into a ChirpStack Network Server common data-format (JSON and Protobuf).

the `Gateway Bridge` service can running on the Raspberry Pi or the ChirpStack server.

Install ChirpStack Gateway Bridge: [https://www.chirpstack.io/gateway-bridge/install/debian/](https://www.chirpstack.io/gateway-bridge/install/debian/)

### Register LoRa Gateway in ChirpStack

Fill in the HT-M00S information as shown below and complete the addition.

![](img/connect_to_server/06.png)

- **Gateway ID** -- The unique ID of HT-M00S gateway, view from configuration page.

### Connect to ChirpStack server

Configure M00S, note that the parameters match the registration information on the server, please refer to the [HT-M00S](https://docs.heltec.org/en/gateway/ht-m00s/quick_start.html) document.

![](img/connect_to_server/03.png)

View gateway status, it is running:

![](img/connect_to_server/07.png)

&nbsp;

(connect-to-snapemu)=
## Connect to SnapEmu

### Register through SnapEmu APP
Search the **App Store** for `SnapEmu`, download and install it.

![](img/connect_to_server/installapp.jpg)


Open the `Scan` option to scan the Heltec device QR code.

``` {Tip} If the device does not have a QR code, click 'Input' for manual registration. For product information you can refer to the corresponding 'Quick Start'.

```

![](img/connect_to_server/scanapp.jpg)


Fill in the group and add the device.

![](img/connect_to_server/addapp.jpg)



Registration is completed and the device display is activated.

![](img/connect_to_server/appcheck.jpg)

&nbsp;

### Manual registration through the SnapEmu IoT Platform webpage
Register and log in to SnapEmu: [SnapEmu Web Page link](platform.snapemu.com).

Click where shown below.

![](img/connect_to_server/platformlog.png)



Click `CREATE A NEW DEVICE`.

![](img/connect_to_server/platformcreate.png)



Go to the device registration page.

![](img/connect_to_server/platformregister.png)

   - `Name` and `Description` can be filled in freely, and they will become the name and remark of the device displayed on the platform. 
   - `Group` denotes the grouping of the device on SnapEmu.
   - `Device type` This device is a gateway, so choose "LoRaGate".
   - `Region` Match the frequency band of the gateway.
   - `GatewayEUI` Gateway ID, through device configuration page or scan the device QR code to obtain.



After filling in the information, click Submit and refresh the page to see the device.

![](img/connect_to_server/platformcreategate.png) 

``` {Tips} If the device shows "unactiveted", it means that the device was not successfully connected. Don't worry, it usually takes some time for the server to respond, please wait a minute and refresh the web page again.
```