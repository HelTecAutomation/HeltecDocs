# Heltec ESP32 Series Quick Start
{ht_translation}`[简体中文]:[English]`

This article describes the installation of the Heltec ESP32 series development framework and library.

**LoRaWAN related code has been stripped since version 3.0.0. Heltec ESP32 framework only contains the basic code now, For the special ESP32 codes please download [Heltec ESP32 Series Library](https://github.com/HelTecAutomation/Heltec_ESP32).**

**Framework v3.0.0 and Library v2.0.0 are updated together, Older frameworks and libraries are no longer applicable to the new ones.**

------

## Preparation
1. **USB driver**, you can refer to this articles [establish serial connection](https://docs.heltec.org/general/establish_serial_connection.html).
2. [Install Git and Arduino IDE](https://docs.heltec.org/general/how_to_install_git_and_arduino.html).

------

## Installing development framework and 
**There are three methods to install the development framework, choose one of they:**

- [Via Arduino Board Manager](esp32-via-arduino-board-manager)
- [Via Git](esp32-via-git)
- [Via Local File](esp32-via-local-file)

(esp32-via-arduino-board-manager)=
### Via Arduino Board Manager
1. Open Arduino IDE, and click `File`->`Peferences`.

![](img/quick_start/01.png)

![](img/quick_start/02.png)

2. **Input the last ESP32 package URL:** [https://resource.heltec.cn/download/package_heltec_esp32_index.json](https://resource.heltec.cn/download/package_heltec_esp32_index.json)

![](img/quick_start/03.png)

3. Click on the `Boards Manager` icon on the left side of the Arduino, and enter "**heltec esp32**" in the search box that pops up., then select the latest version and click `install`	.

![](img/quick_start/05.png)

4. For special code library, search for "HELTEC ESP32" in `Library Manager`, select the latest version and install:[ESP32 Series Library](https://github.com/HelTecAutomation/Heltec_ESP32). 

![](img/quick_start/lib.png)

------

(esp32-via-git)=

### Via Git
1. Installing Git.

2. Check the following links for your operating system, the specific operation steps are detailed in the link:
- [For Windows](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/blob/master/InstallGuide/windows.md)
- [For MacOS](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/blob/master/InstallGuide/mac.md)
- For Linux
  - [Debian/Ubuntu](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/blob/master/InstallGuide/debian_ubuntu.md)
  - [Fedora](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/blob/master/InstallGuide/fedora.md)
  - [OpenSUSE](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series/blob/master/InstallGuide/opensuse.md)

``` {TIP} After obtaining updates through "git pull", please execute "get. exe" under the path of "Arduino\hardware\heltec\esp32\tools" to obtain the latest compilation tool.

```

3. The above is the development environment installation. If you need to install the Heltec ESP32 extension library, you can refer to this link:[Heltec ESP32 Series Library](https://github.com/HelTecAutomation/Heltec_ESP32)

------

(esp32-via-local-file)=

### Via Local File
1. Download the development environment. [https://resource.heltec.cn/download/tools/esp32.zip](https://resource.heltec.cn/download/tools/esp32.zip)

2. Open Arduino IDE, and click `File`->`Peferences`.

![](img/quick_start/01.png)

3. Go to the folder in the red box.

![](img/quick_start/16.png)

4. Create a new "hardware" folder in the Arduino folder. If there is already a "hardware" folder, you don't need to create a new one.

![](img/quick_start/17.png)

5. Creat a new "hletec" folder in "hardware" folder.

![](img/quick_start/heltecfolder.png)

6. Go to the "heltec" folder and extract "esp32" into this folder.

![](img/quick_start/18.png)

7. Go to the "heltec" folder, refer to the figure below to confirm whether the path in the red box is correct.

![](img/quick_start/19.png)

8. Restart the Arduino IDE to confirm whether the development environment is installed successfully.

![](img/quick_start/20.png)



9. For special code library, search for "HELTEC ESP32" in `Library Manager`, select the latest version and install:[ESP32 Series Library](https://github.com/HelTecAutomation/Heltec_ESP32). 

   ![](img/quick_start/lib.png)

------

## Example

This section for verifying whether you can program with Arduino or not. Now, The USB cable connects to Heltec ESP32 board, then select your serial port which is connected to Heltec ESP32 board.

Select a demo example, compile and upload.

### Execute an example 
Correctly select a board and relevant options in the `Tools` menu:

![](img/quick_start/08.png)

Then select an example.

![](img/quick_start/09.jpg)

``` {Tip} To execute the code in a library, you need to mouse over, scroll down, find the library, and find the code in it.

```

Compile & Upload

![](img/quick_start/10.png)

------

### New a Heltec ESP32 program
Open Arduino IDE, create a new  `.ino` file, then copy the below code.

```arduino
#include <heltec.h>

// the setup routine runs once when starts up
void setup(){

  // Initialize the Heltec ESP32 object
  Heltec.begin(true /*DisplayEnable Enable*/, true /*LoRa Disable*/, true /*Serial Enable*/, true /*PABOOST Enable*/, 470E6 /**/);
}

// the loop routine runs over and over again forever
void loop() {

}
```

compile it and upload, the  screen (if this board has a screen) will show and Arduino's serial monitor will print something, it means Heltec ESP32 board is running successfully!

