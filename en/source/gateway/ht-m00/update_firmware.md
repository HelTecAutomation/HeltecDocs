# HT-M00 Firmware Upgrade

[简体中文](https://heltec-automation.readthedocs.io/zh_CN/latest/gateway/ht-m00/update_firmware.html)


## Summary

This article aims to describe how to upgrade the HT-M00 firmware and the processing method of overwriting the HT-M00 firmware.

&nbsp;

## Upgrade Firmware

Download [HT-M00 corresponding upgrade firmware](https://resource.heltec.cn/download/HT-M00/firmware)。

![](img/update_firmware/01.png)

Enter the HT-M00 gateway configuration interface by connecting to the HT-M00 WiFi(can refer to [HT-M00 Quick Start](https://heltec-automation-docs.readthedocs.io/en/latest/gateway/ht-m00/qucik_start.html))，click "Firmwaer Update"。

![](img/update_firmware/02.png)

Click "Select firmware" to select the downloaded corresponding upgrade firmware, and click "Update" to upgrade.

![](img/update_firmware/03.png)

After the upgrade is complete, a corresponding prompt will pop up and restart the gateway.

![](img/update_firmware/04.png)

&nbsp;

## The Processing Method of Overwriting the HT-M00 Firmware

Download [HT-M00 hardware](https://resource.heltec.cn/download/HT-M00/firmware/M00_firmware.zip)。

Open the downloaded file and edit the "M00.bat" file.

![](img/update_firmware/05.png)

Change the COM port to the COM port corresponding to HT-M00.

![](img/update_firmware/06.png)

After the modification is completed, double-click to run "M00.bat" to complete the gateway firmware upload.

```Tip:: This firmware version is V1.2, and the firmware can be upgraded according to the "firmware upgrade" method.

```

