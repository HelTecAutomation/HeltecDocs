# How to programming a CubeCell Module

**CubeCell module provide two version:** 

- **AT command only**
  - *For the flash size reason, the "AT command only" HTCC-AM01 only provide CN470-510MHz, EU863-870MHz, US902-928MHz three hardware versions, sending & lestening frequency are fixed (Channel 0~7), cannot be configured by software, and can't upgrade without special hardwares.*
- **Arduino compatible & AT command**
  - *Support AT command defaultly, already have an actived Arduino bootloader, can development via Arduino.* 

This document is for the "Arduino compatible & AT command" version.

CubeCell module (HTCC-AM01) only have ASR6501and RF relevant circute inside. In order to program it, need connect to a external UART-USB bridge. CH340G, CP2102 etc.

&nbsp;

### 1. Recommend Circute

There are two recommend schematics:

- **[Arduino compatible recommend design](https://docs.heltec.cn/download/cubecell/HTCC-AM01_Reference_Design(Arduino).pdf)**
  - This circute have an auto boot circute, can running into bootloader mode automatically.
- **[A slave module control by a master device](https://docs.heltec.cn/download/cubecell/HTCC-AM01_Reference_Design(AT).pdf)**
  - This circute need access bootloader mode manually ([How to access bootloader](https://docs.heltec.cn/#/en/faq/cubecell_series_common_problem_summary?id=how-to-access-bootloader-mode)).

### 2. Preparation

- Install the CubeCell development framework correctly ([Reference resources]());
- Connect your redesigned board to a computer, make sure useing a high qulity Micro USB cable;
- success access the bootloader mode ([How to access bootloader](), following log will be print via serial port:

![](img/programming_cubecell/01.png)

*If use the Arduino compatible circute, and system into bootloader mode automatically, will not see this log. Log printed by CubeCell normally, but the com port used by IDE for programming purpose,  there is no place to show.* 

### 3. Program via Arduino IDE;

![](img/programming_cubecell/02.png)

&nbsp;

Enjoy.

