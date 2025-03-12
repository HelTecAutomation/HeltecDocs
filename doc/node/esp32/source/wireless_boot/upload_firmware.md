# Upload Firmware via WirelessBoot

{ht_translation}`[简体中文]:[English]`

## Enter WirelessBoot

1. **Different devices have different methods for entering WirelessBoot. Here, the HRI-3621 is used as an example.**Press and hold the device button until the blue light stays on. Continue holding without releasing until the purple light turns on. At this point, release the button, and the device will enter WirelessBoot mode.

   


2. Locate the WiFi network named "WirelessBoot-xxxx" and connect to it. Default password is “heltec.org".

   ![](img/development/01.png)


3. In your browser, enter "192.168.4.1" and use the default password "heltec.org".<br>This is the interface for uploading firmware via WirelessBoot.

   ![](img/development/02.png)


``` {Tip} You can configure the WiFi address on this page. After "Save Configuration", you can access the WirelessBoot mode through the device's IP address without needing to connect to its WiFi.
```

![](img/development/03.png)

### Upload Firmware

``` {Note} WirelessBoot only accepts firmware in “.bin” format.
```

1. Navigate to the WirelessBoot page, choose the corresponding firmware,select an APP partition, and click "Upload."

   ![](img/development/04.png)

``` {Note} The firmware name should not be too long; otherwise, it cannot be uploaded.
```

2. After the upload is successful, click "RUN" to confirm which program you want to execute.

   ![](img/development/05.png)

3. Click "Restart" to reboot the device and start its operation.

   ![](img/development/06.png)

----------------------------------------