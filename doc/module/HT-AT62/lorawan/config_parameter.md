# "STM32 + LoRa" Preparation & Config Parameters
{ht_translation}`[简体中文]:[English]`

[LoRa Node 151](https://heltec.org/project/lora-node-151/) is based on [STM32L151CCU6](https://www.st.com/resource/en/datasheet/stm32l151cc.pdf), [Turtle Board](https://heltec.org/project/turtle-board/) is based on [STM32L432KC](https://www.st.com/resource/en/datasheet/stm32l432KC.pdf), Our company is gradually replacing the IDE to [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html), which is the STMicroelectronics official just launched development tools for their own MCUs. Based on Eclipse, include code tracking, code completion, compilation, download, single-step debugging, and integrated with CubdeMX.

## Summary

No matter what LoRa management platform is used, DevEui, AppKey, etc. parameters are must needed. And ensure that it is consistent with the relevant settings on the server.

- **The following parameters are essential for OTAA mode:**
  - DevEui -- Mote device IEEE EUI (big endian), 8 bytes;
  - AppEui -- Application IEEE EUI (big endian), 8 bytes;
  - AppKey -- AES encryption/decryption cipher application key, 16 bytes;
- **The following parameters are essential for ABP mode:**
  - NwkSKey -- AES encryption/decryption cipher network session key, 16 bytes;
  - AppSKey -- AES encryption/decryption cipher application session key, 16 bytes;
  - DevAddr -- Device address on the network (big endian), uint32_t;

&nbsp;

## Preparation

- Install [STM32CubeIDE](https://www.st.com/zh/development-tools/stm32cubeide.html#get-software) and [STM32CubeProgrammer](https://www.st.com/zh/development-tools/stm32cubeprog.html) correctly.
- A standard LoRaWAN gateway with at least 8 channels (based on SX1301/8 base band chip will be OK), and make sure your gateway had already connected to a LoRa server.
  - [How to connect HT-M01 to a LoRa server](https://docs.heltec.org/en/gateway/ht-m01/connect_to_server.html)
  - [How to connect HT-M02 to a LoRa server](https://docs.heltec.org/en/gateway/ht-m02_4g/connect_to_server.html)
  - [How to connect HT-M01S to a LoRa server](https://docs.heltec.org/en/gateway/ht-m01s_v2/connect_to_server.html)
- A STM32 LoRa node( [LoRa Node 151](https://heltec.org/project/lora-node-151/) , [Turtle Board](https://heltec.org/project/turtle-board/)), a high quality USB cable and an ST-LINK.

&nbsp;

## Config steps

The LoRaWAN example code of LoRa Node is a STM32CubeIDE project, here is the basic config steps.

- Download and install `STM32CubeIDE` and `STM32CubeProgramme` correctly.

- Double click `.project` document, open project.

The first time you run, may have the following dialog box will, click Yes and then OK.

![](img/config_parameter/01.png)

![](img/config_parameter/02.png)

&nbsp;

- Modify macro definition: Set working bands、working mode and debugger.


  ![](img/config_parameter/03.png)

  - `ACTIVE_CLASS`

    `CLASS_A`

    `CLASS_B`--NOT SUPPORT

    `CLASS_C`

   - `ACTIVE_REGION`

     `LORAMAC_REGION_AS923`

     `LORAMAC_REGION_AU915`

     `LORAMAC_REGION_CN470`

     `LORAMAC_REGION_CN779`

     `LORAMAC_REGION_EU433`

     `LORAMAC_REGION_EU868`

     `LORAMAC_REGION_KR920`

     `LORAMAC_REGION_IN865`

     `LORAMAC_REGION_US915`

     `LORAMAC_REGION_US915_HYBRID`

     `LORAMAC_REGION_AU915_SB2`

     `LORAMAC_REGION_AS923_AS1`

     `LORAMAC_REGION_AS923_AS2`

   - `REGION_EU868`
     Set to the frequency band corresponding to `ACTIVE_REGION`

   - `USE_DEBUGGER` 

     If define `USE_DEBUGGER` , default serial port(PA9-TX, PA10-RX) can print debugging information.

     If delete `USE_DEBUGGER` , debugging information will not be printed.

- Modify `DEVICE_EUI`, `APPLICATION_KEY`, `APPLICATION_EUI` in the `main.c` file according to your needs.

  ![](img/config_parameter/04.png)

- Modify `userChannelMask` ,  access mode `overTheAirActivation` and other parameter.

  ![](img/config_parameter/05.png)

  - `overTheAirActivation`

    `true`--OTAA

    `false`--ABP

- Write the data you want to send in `prepareTxFrame`.

  ![](img/config_parameter/06.png)
  
  

Now, if download the program into your board, if everything is normal, it should be able to run.

- You may need: How to Download Firmware into STM32 LoRa Node([LoRa Node 151](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/lora_node_151/download_firmware.html), [Turtle Board](https://heltec-automation-docs.readthedocs.io/en/latest/stm32/turtle_board/download_firmware.html)).
