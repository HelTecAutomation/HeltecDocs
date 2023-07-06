# Establish Serial Connection
{ht_translation}`[简体中文]:[English]`

**[MacOS](for-macOS)**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[Windows](for-windows)**

**This section provides guidance how to establish serial connection between your board and PC.**

(for-macOS)=
## For MacOS

### 1. Install the USB driver

**[Download the SiLabs CP2104 Driver](https://www.silabs.com/documents/public/software/Mac_OSX_VCP_Driver.zip)**

**After the disk image `SiLabsUSBDriverDisk.dmg` was downloaded, mount it.**

**And install this USB driver following those screenshots.**

![](img/establish_serial_connection/macOS_CP2104_dmg.png)

![](img/establish_serial_connection/macOS_CP2104_pkg.png)

![](img/establish_serial_connection/2.png)

![](img/establish_serial_connection/3.png)

![](img/establish_serial_connection/4.png)

![](img/establish_serial_connection/5.png)

![](img/establish_serial_connection/6.png)

![](img/establish_serial_connection/7.png)

![](img/establish_serial_connection/8.png)

![](img/establish_serial_connection/9.png)

### 2. Check port on MacOS

**To check the device name for the serial port of your your board board (or external converter dongle), open terminal and run this command two times, first with the board / dongle unplugged, then with plugged in. The port which appears the second time is the one you need:**

**MacOS**

    ls /dev/cu.*


(for-windows)=
## For Windows

### 1.Install the USB driver

**Download the [SiLabs CP2104 Driver](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)**

**Choice the version of USB driver according to your windows version(Windows7/8/10).**

![](img/establish_serial_connection/windows_download_CP2104_USB_driver.png)

**Choice the right version installer(x64/x86), and install it.**

![](img/establish_serial_connection/windows_install_usb_driver01.png)

![](img/establish_serial_connection/windows_install_usb_driver02.png)

![](img/establish_serial_connection/windows_install_usb_driver03.png)

### 2. Check port on Windows

**Check the list of identified COM ports in the Windows Device Manager. Disconnect your board and connect it back, to verify which port disappears from the list and then shows back again.**

**Figures below show serial port for Heltec board**

![](img/establish_serial_connection/windows_in_device_manager.png)