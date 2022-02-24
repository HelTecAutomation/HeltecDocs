# Heltec<sup>TM</sup> CubeCell<sup>TM</sup> Series Frequently Asked Questions
[简体中文](https://heltec-automation.readthedocs.io/zh_CN/latest/cubecell/frequently_asked_questions.html)

This page contains the most frequently questions from user. If this page's detail can't solve your problem, you can also talk in our forum: [community.heltec.cn](http://community.heltec.cn/)

&nbsp;

## How to Access Bootloader Mode

The bootloader of CubeCell<sup>TM</sup> is preprogrammed software for burning and verification firmware. In FLASH row 0~33, rewrite this part will break the bootloader and can't download firmware anymore.

Entering the bootloader mode needs to meet the following timing (T<sub>RST</sub>≥10mS):

![](img/frequently_asked_questions/01.png)

Here are two methods access bootloader manually:

- CubeCell not connect to a computer -- Press the “USER” button of the CubeCell while plugging it to any USB port of a computer.
- CubeCell already connected to a computer -- Keep the "USER" button pressed → Press the "RESET" button → Release the "RESET" button → release the "USER" button.

**USER Pin map**

- Dev-Board
  - **[HTCC-AB01](https://heltec.org/project/htcc-ab01/)** -- `GPIO 7`
  - **[HTCC-AB02](https://heltec.org/project/htcc-ab02/)** -- `GPIO 11` or `GPIO 16`
  - **[HTCC-AB02S](https://heltec.org/project/htcc-ab02s/)** -- `GPIO 11` or `GPIO 16`
  - **[HTCC-AB02A](https://heltec.org/project/htcc-ab02a/)** -- `GPIO 11` or `GPIO 16`
- Module
  - **[HTCC-AM01](https://heltec.org/project/htcc-am01/)** -- `GPIO 0`
  - **[HTCC-AM02](https://heltec.org/project/htcc-am02/)** -- `GPIO 11` or `GPIO 16`

- Capsule Sensor
  - **[Capsule Sensor(HTCC-AC01) + Debug board](https://heltec.org/project/htcc-ac01/)** -- `GPIO 0`

```Tip:: The USER pin of HTCC-AB02, HTCC-AB02S, HTCC-AB02A can use GPIO11 or GPIO16, but the USER pin defaults to GPIO16 in the Dev-Board, and you should be careful not to pull GPIO11 low when entering the bootloader mode.

```



``` Tip:: If keep USER pin keep LOW all the time (software set LOW or pull down to GND), may cause auto-boot system not working, users can access bootloader mode manually.

```

&nbsp;

## How to use the ADC pin for AnalogRead (ASR6501)

**The ASR6501 embedded 12-bit 1Msps SAR ADC, but only have one channel ADC input pin**, this pin had been used for battery voltage reading default.

![](img/frequently_asked_questions/02.png)

In order to read other analog signal, user need remove the resistance BR1, then the ADC header will be free. 

![](img/frequently_asked_questions/03.png)

``` Tip:: the ADC of CubeCell uses internal 1.2V reference voltage

```

``` Note:: ADC input voltage can NOT higher than 2.4V.

```

## Vext Control

The `Vext` is a power source for external devices. Refer from the schematic diagram, It's controlled by `GPIO6`:

![](img/frequently_asked_questions/04.png)

- `GPIO 6 --> LOW --> Vext(3.3V/300mA) ON`

- `GPIO 6 --> HIGH --> Vext(3.3V/300mA) OFF`

``` Tip:: The Vext features is very important for some devices without deep sleep mode. When the system need in deep sleep status, we can turn off the Vext by set GPIO 21 to HIGH, then to save energy.

```

## How to upgrade using firmware
1. Select the desired project to compile.
2. Find the location of the ***CubeCellelftool.exe*** file and the file of type ***.cyacd*** in the build process information.
3. Create a new folder and copy the two files of appeal to this folder.
4. Check the port number of the development board (it is assumed to be COM3 here).
5. Open a command line window under Windows and go to the folder you created above. Enter the following command and execute it to download.
>- CubeCellflash.exe -serial COM3   XXXXXXXX.cyacd         
