# Get Limited Technical Resources
[简体中文](https://heltec-automation.readthedocs.io/zh_CN/latest/general/view_limited_technical_data.html)
We released all relevant resources in [GitHub](https://github.com/HelTecAutomation) or [Resource Page](http://resource.heltec.cn/).

Some technical data ara special for Heltec produced products, it's not shown public, these relevant resources will become downloadable with the products' Chip ID. At the same time, the Chip ID can also be used to identify authenticity

## Get Limited Resources via Chip ID

Limited resources will become downloadable with products' Chip ID, that's an unique ID.

Input the Chip ID in [http://resource.heltec.cn/search](http://resource.heltec.cn/search), and click `Confirm` .

![](img/view_limited_technical_data/03.png)

&nbsp;

There with show some basic informations about this board, click `Relevant Resource`.

``` Tip:: The license in this page is also useful, such as ESP32 + LoRa series, the ESP32_LoRaWAN library need this license to active.

```



![](img/view_limited_technical_data/04.png)

Now, will be bring to the products' download page. the files in the limited folder will become downloadable.

![](img/view_limited_technical_data/05.png)

**About in the winter of 2018, we began to not fully manage the chip ID. Some previous product Chip ID has not been synchronized to this database. Anyway, users can mail to [support@heltec.cn](mailto:support@heltec.cn), we will regenerate one for you.**



## How to Get Chip ID

The products' Chip ID is relative to the onboard MCU, each MCU have an unique ID.

- [ESP32 Core](#esp32-lora-series)
- [STM32 Core](#stm32-series)
  - LoRa Node 030
  - [LoRa Node 151](#lora-node-151)
  - [Turtle Board](#turtle-board)
- [CubeCell Series (ASR650x Core)](#cubecell-series)

### ESP32 (+ LoRa) Series

Make sure you have already installed the [Heltec ESP32 development framework](https://heltec-automation-docs.readthedocs.io/en/latest/esp32/quick_start.html).

Choose the [Chip ID read example](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/blob/master/esp32/libraries/ESP32/examples/ChipID/GetChipID/GetChipID.ino) from menu: `File -- Examples -- ESP32 -- ChipID -- GetChipID`.

![](img/view_limited_technical_data/01.png)

&nbsp;

Upload the example, the Chip ID will be printed via serial port:

![](img/view_limited_technical_data/02.png)

### STM32 series

This [Heltec STM32+LoRa Series Quick Start](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/quick_start.html) maybe helpful for the following operations.

#### LoRa Node 151

[How to Download Firmware to LoRa Node 151](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/lora_node_151/download_firmware.html)

[LoRa Node 151](https://heltec.org/project/lora-node-151/) use STM32L151CCU6, download this firmware into the LoRa Node 151:

[http://resource.heltec.cn/download/LoRa_Node_151/L151_Read_ID.zip](http://resource.heltec.cn/download/LoRa_Node_151/L151_Read_ID.zip)

Then the Chip ID will be printed via the virtual serial port (USB CDC).

![](img/view_limited_technical_data/06.png)

&nbsp;

#### Turtle Board

[How to Download Firmware to Turtle Board](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/turtle_board/download_firmware.html)

[Turtle Board](https://heltec.org/project/turtle-board/) use STM32L432KC, download this firmware into Turtle Board:

Then the Chip ID will be printed via the virtual serial port (USB CDC).

&nbsp;

#### CubeCell Series

Almost all resources for CubeCell are open source. Anyway, users can query the Chip ID via AT command:

```shell
AT+ChipID=?
```

![](img/view_limited_technical_data/07.png)

Or via this example code: [Get ChipID](https://github.com/HelTecAutomation/ASR650x-Arduino/blob/master/libraries/Basics/examples/ChipID/ChipID.ino)
