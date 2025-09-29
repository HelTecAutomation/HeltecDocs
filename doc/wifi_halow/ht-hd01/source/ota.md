# HT-HD01 OTA Upgrade Procedure

{ht_translation}`[简体中文]:[English]`

[Firmware Download Link](https://resource.heltec.cn/download/HT-HD01/firmware)

1. Access the Configuration Page. For entry methods, refer to: [Access Configuration Page](https://docs.heltec.org/en/wifi_halow/ht-hd01/quick_started.html#access-configuration-page)

2. Navigate to Firmware Update. Click: `Advanced Config` → `System` → `Reset/Flash Firmware` → `Flash Image`

![](img/22.png)

3. Select `Browse`, Choose target firmware, click `Upload`, Waiting for firmware upload to complete...

![](img/23.jpg)

4. Select whether to **"keep settings and retain the current"** configurations

![](img/24.jpg)

``` {note} Ensure network and power stability during firmware upgrade.
```

## Firmware Version Update 

HT-HD01 Firmware Version 2.6.6-20250605 update:
- Add Mesh mode
- Press the button to change from purple to red.
- In AP and MeshGateway modes, the ETH indicator light for network usage is changed to green, and the USB indicator light for network usage is changed to purple.

HT-HD01 V1 Firmware Version 2.8.5-20250807 update:
- Added support for enabling the HaLow AP function in HaLow Mesh mode, allowing STA devices to connect to Mesh nodes.
- `Dynamic Channel Selectionis` is enabled by default.

HT-HD01 V1 and HT-HD01 V2 Firmware Version 2.8.5-20250924 update:
- Fixed a bug where devices kept rebooting after enabling the HaLow AP function in HaLow Mesh mode.

