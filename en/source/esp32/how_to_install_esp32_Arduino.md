# Heltec ESP32 Based Dev-baords Develop Environment

We suggest you confirm whether the `USB driver`, `Git` and `Arduino IDE` has installed first. If not, please view this two articles [establish serial connection](/en/user_manual/establish_serial_connection) and [Install Git and Arduino IDE](/en/user_manual/how_to_install_git_and_arduino).

## CONTENT

1. [Setting Environment](#setting-environment)
- [Step1. Download Heltec Arduino-ESP32 Support](#step1-download-arduino-esp32-support)
  
- [Step2. Download the Heltec ESP32 Library](#step2-download-the-m5stack-lib)
  
2. [Example](#example)

## 1. Setting Environment

*(Only two steps to complete setting)*

### Step1. Download Arduino-ESP32 Support

Open Arduino IDE, and click `File`->`Peferences`->`Settings`

<img src="img/how_to_install_esp32_Arduino/01.png">

<img src="img/how_to_install_esp32_Arduino/02.png">

Input last esp32 board manager URL

*Now the last board manager URL: [https://docs.heltec.cn/download/package_heltec_esp32_index.json](https://docs.heltec.cn/download/package_heltec_esp32_index.json)*

<img src="img/how_to_install_esp32_Arduino/03.png">

Click `Tools`->`Board:`->`Boards Manager...`, search `Heltec ESP32` in the new pop-up dialog, then click `install`

<img src="img/how_to_install_esp32_Arduino/04.png">

<img src="img/how_to_install_esp32_Arduino/05.png">

The source code of Heltec ESP series (ESP32 & ESP8266) framework available here: [https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series](https://github.com/Heltec-Aaron-Lee/WiFi_Kit_series)



### Step2. Download the Heltec ESP32 Library

Open Arduino IDE, then Select `Sketch`->`Include Library`->`Manage Libraries...`
Search `Heltec ESP32` and install it

<img src="img/how_to_install_esp32_Arduino/06.png">

<img src="img/how_to_install_esp32_Arduino/07.png">

The source code of `Heltec ESP32` library available here: [https://github.com/HelTecAutomation/Heltec_ESP32](https://github.com/HelTecAutomation/Heltec_ESP32)


## Example

This section for verifying whether you can program with Arduino or not. Now, The USB cable connects to Heltec ESP32 board, then select your serial port which is connected to Heltec ESP32 board.

Select a demo example, compile and upload

### 1. Execute a example likes `FactoryTest.ino`

Correct select the board you had connected to computer and the specified serial port: e.g. WiFi Kit 32, WiFi LoRa 32, COM3(my PC is `COM3`)

<img src="img/how_to_install_esp32_Arduino/08.png">

Then select an example likes `XXXXXX_FactoryTest.ino`

<img src="img/how_to_install_esp32_Arduino/09.png">

Upload it

<img src="img/how_to_install_esp32_Arduino/10.png">

### 2. New a Heltec ESP32 program

Open Arduino IDE, then new a `.ino` file, then copy the below code.

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

compile it and upload, the on board screen (if have) will show and Arduino's serial monitor will print something, it means Heltec ESP32 board is running successfully!

Enjoy!

