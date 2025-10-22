# MeshSolar Quick Start
{ht_translation}`[简体中文]:[English]`

## First Charge
The Meshtower comes pre-configured with battery management settings. It is ready to use once you connect the solar panel and antenna.<br>
However, before first use, it is recommended to activate the battery function and fully charge the battery via the USB-C port or DC interface.
### Via USB-C(recommended)
The USB-C port requires PD3.0 and a 20V voltage input.

![](img/quick_start/07.png)

### Via DC
The DC interface is the solar panel input port, which uses an XT30 connector and supports an input voltage of 18-24V.

![](img/quick_start/08.jpg)

--------------------------------

## Checking Battery Level
- You can check the battery level via the Meshtastic app on your phone.

![](img/quick_start/09.jpg)

- Connect the device to a computer and check via the battery management web page: [MeshSolar WebSerial Tool](https://flash.nmiot.net:3333/).

![](img/quick_start/13.jpg)

--------------------------------

## Firmware
### Pre-installed Firmware
The Meshtower comes pre-installed with Meshtastic firmware.<br>
The default password is: **123456**.<br>
For instructions on how to use Meshtastic, please refer to [Meshtastic official documentation.](https://meshtastic.org/docs/introduction/)

``` {tip} If the serial port cannot be detected, the device may have entered low-power mode. Please press the RST button once to restart the device and connect to it before it enters low-power mode again.
```

![](img/quick_start/02.png)

### Firmware Installation and Update
You can install or update the firmware via the USB-C port.<br>
If your installation method requires entering DFU mode, you will need to open the device casing and double-press the RST button to enter DFU mode.

![](img/quick_start/02.png)

At this point, the computer will pop up a USB drive named HT-n5262. Copy your firmware to this drive.

![](img/quick_start/11.jpg)

### Meshtastic Serial
Enabling the Meshtastic serial function allows you to modify relevant parameters directly in the BMS tool while running Meshtastic firmware, without needing to reinstall dedicated BMS firmware.
1. Users can download the [official Meshtastic firmware](https://github.com/meshtastic/firmware/releases) from GitHub, select the nrf52840 package and extract it, then choose the Meshsolar version inside the package for installation.
2. After downloading the firmware, connect it to the Meshtastic App. For detailed instructions, please refer to the [official documentation](https://meshtastic.org/docs/introduction/).
3. After successfully connecting to the Meshtastic App, go to the settings and adjust the serial port configuration.
- Click on the `serial port` in the settings

![](img/quick_start/21.png)

- Select `Enable`

![](img/quick_start/22.png)

- Click the mode, then select `MS_CONFIG` under the serial port mode and save the settings. If you don't see this option, please update your app.

![](img/quick_start/23.png)


--------------------------------------

(hardware)=

## Hardware Installation
### Wall-Mount

![](img/quick_start/04.jpg)

### Pole-Mount

![](img/quick_start/05.jpg)
