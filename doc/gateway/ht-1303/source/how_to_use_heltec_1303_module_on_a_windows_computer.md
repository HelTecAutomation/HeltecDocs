# How to Use Heltec 1303 Module on a Windows computer

## Significance

Directly using the LoRaWAN gateway module on Windows computers can enable industrial computers to fully support all functions of the LoRaWAN gateway, effectively reducing costs. 

**Note :** *only the USB version of the LoRaWAN module can be directly compatible with Windows computers.*

## Preparation

[Heltec 1303 module](https://heltec.org/project/ht1303/)

Mini PCle to PCle board

## Operation

### 1.Connect the gateway module to the adapter card

As this adapter card does not support USB protocol, users need to connect a set of wires from the USB interface on the motherboard. In addition, the LoRa gateway 1303 module can only accept 3.3V power supply. Do not connect the 5V power supply of the USB port to the module to avoid damaging it.

### 2.Download the module driver

Search and download the Heltec.LoraGateWay driver from [resource 1303](https://resource.heltec.cn/download/HT-1303), which will be installed as a system service.

### 3.Configure the gateway

Open the device manager on the computer, and under normal circumstances, you will see a serial device. If there is no serial port number, you need to install the en.stsw-stm32102 driver. 

![](img\01.png)

The serial port of this driver should correspond to the serial port in the global_conf.json file. 

![](img\02.png)

The server address and port number below should correspond to the user's server and port.

![](img\03.png)

### 4.Activate the module license

Enter the SN serial number on the module through the [Heltec official website](https://resource.heltec.cn/search), search for the corresponding license, and get to ID. Open the cmd command window and enter `Heltec.LoraGateway.exe -s -1 license`  command. If everything is normal, it means that its service has been installed.

> [!IMPORTANT]
>
> If the user cannot find the license, don't worry. Run the command `Heltec.LoraGateway.exe - s` through cmd. Under normal circumstances, the gateway ID in the global_conf.json file will be updated, and the user needs to send the updated gateway ID to leehunter8801@gmail.com . We will solve this problem in the future.
> I deeply apologize to the users who have encountered the above-mentioned issues. Due to the recent development of Windows service functionality, it was not included in previous shipments and was not written to the server. Therefore, module numbers and gateway IDs are required for numbering. This problem will not occur again in the future.

## Display

If everything is running well, when we reopen the gateway configuration file global_conf.json, we will find that the GateWay ID has been updated and is consistent with the GateWay ID in the log.

![](img\04.png)

Open the windows service and find that the gateway can start and stop like a normal service, and can also be set to start automatically. Now your computer supports all the functions of LoRaWAN gateway.

![](img\05.png)







