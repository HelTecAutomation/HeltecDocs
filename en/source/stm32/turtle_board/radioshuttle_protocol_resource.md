# RadioShuttle Protocol Resource
[简体中文](https://heltec-automation.readthedocs.io/zh_CN/latest/stm32/turtle_board/radioshuttle_protocol_resource.html)

## The RadioShuttle Wireless Protocol

- **Peer-to-peer LoRa wireless protocol software**

  The standard **LoRaWAN** protocol is inefficient, does not support direct node to node communication, and is too expensive and complex for many applications. Radioshuttle can send information efficiently and safely between simple LoRa modules.

- **Secure message transmission.**

  232 bytes user data maximum, the receipt will be acknowledged, lost data is automatically repeated

- **Air traffic control**

  The nodes only send if no LoRa signal is active on that channel. The stations create an automatic network plan, defining which nodes and stations are allowed to communicate, and when. (Planned)

- **Optimized protocol**

  - Message delivery within 110 ms (SF7, 125 kHz, free channel provided)
  - Messages only require 2 x 12 bytes (protocol overhead)
  - Narrow bandwidths allow for a longer range
  - Automatic transmitting power adjustment saves energy and reduces traffic on the neighboring stations

- **Support multiple MCU boards**

  - The [Turtle](https://www.radioshuttle.de/en/turtle-en/turtle-board-en/) board
  - The [ECO Power](https://www.radioshuttle.de/en/esp32-eco-power-en/esp32-eco-power-board-en/) board
  - The [LongRa](https://www.radioshuttle.de/en/longra-en/board-en/) board

- **Supported multiple systems**

  - Arduino, Arduino Zero or newer
  - ARM Mbed OS, supported MCUs (e.g. STM32L0, STM32L4)
  - Linux (Raspberry PI/Orange PI planned)

  Know more about RadioShuttle Protocol please click:[The RadioShuttle Wireless Protocol](https://www.radioshuttle.de/en/radioshuttle-en/protocol/).

  &nbsp;

## RadioShuttle STM32 Utility

“RadioShuttle STM32 Utility” is a special utility which easily allows uploading and downloading software to/from RadioShuttle STM32-compatible boards, via USB using the DFU protocol. The utility can be used either from a command line from Mac, Windows, and Linux, or in a GUI from Mac and Windows computers. Software can be uploaded to/downloaded from STM32 MCUs. It has been designed to be used with RadioShuttle compatible boards which obtained a valid license (code) during the manufacturing process.

- **System requirements**

  - **Windows:** Windows 7 or higher
  - **Mac:** macOS 10.9 or higher
  - **Linux:** Linux kernel 2.6.16 or higher,glibc 2.4 or higher

  Know more about RadioShuttle STM32 Utility please click: [RadioShuttle STM32 Utility](https://www.radioshuttle.de/en/turtle-en/radioshuttle-stm32-utility-en/)