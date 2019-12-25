# Heltec CubeCell Series Quick Start

``` Tip:: Please confirm whether the USB driver, Git and Arduino IDE has been installed correctly.

```

*If not, please view this two articles [establish serial connection](https://heltec-automation-docs.readthedocs.io/en/user_manual/establish_serial_connection) and [Install Git and Arduino IDE](https://heltec-automation-docs.readthedocs.io/en/user_manual/how_to_install_git_and_arduino).*



## Install CubeCell relevant Framework

there are two methods to install the CubeCell framework, choose one of them.

### Use Arduino board manager

Open Arduino IDE, and click `File`->`Peferences`->`Settings`

![](img/quick_start/01.png)

![](img/quick_start/02.png)

Input following json url to board manager URLs:

**Recommend:** [https://docs.heltec.cn/download/package_CubeCell_index.json](https://docs.heltec.cn/download/package_CubeCell_index.json)

or

**China main land:** [http://119.23.153.38/download/package_CubeCell_index.json](http://119.23.153.38/download/package_CubeCell_index.json)

![](img/quick_start/03.png)

Click `Tools`->`Board:`->`Boards Manager...`, search `Heltec cubecell`in the new pop-up dialog, select the latest `releases` and  click `install`

![](img/quick_start/04.png)

![](img/quick_start/05.png)

The source code of Heltec ASR650x series (ASR6501&ASR6502) framework available here: [https://github.com/HelTecAutomation/ASR650x-Arduino](https://github.com/HelTecAutomation/ASR650x-Arduino)

### Via Git

Please refer to this document: [Install CubeCell Frame via Git](https://github.com/HelTecAutomation/ASR650x-Arduino#installation-instructions)

&nbsp;


## Running an Example

Connect your CubeCell board to computer via a **high quality** Micro USB cable *(This is the most common reason we had encountered can’t program software)*. 

### Correctly Config the Tools Menu

In the tools menu, there are following options:

| Features                | Description                                                  |
| :---------------------- | :----------------------------------------------------------- |
| Board                   | Choose the right hardware connected to your computer         |
| LORAWAN_REGION          | LoRaWAN protocol region definition, strictly follow [LoRaWAN 1.1 Regional Parameters](https://lora-alliance.org/sites/default/files/2018-04/lorawantm_regional_parameters_v1.1rb_-_final.pdf) |
| LORAWAN_CLASS           | Now with Class A and Class C supported                       |
| LORAWAN_NETMODE         | OTAA or ABP                                                  |
| LORAWAN_ADR             | Turn ON or turn OFF ADR (Adaptive Data Rate)                 |
| LORAWAN_Net_Reservation | This is a feature outside the LoRaWAN protocol, only valid in OTAA mode. If this option is enabled, when system reset does not need join again. Projects such as smart street lights may be useful. |
| LORAWAN_AT_SUPPORT      | AT command will provide many useful functions, for example, users can use serial port to config LoRa Node's DevEui, AppKey, or make node sleep, reset etc. |
| LORAWAN_RGB             | RGB light for LoRaWAN status:<br />`Purple -- Join;`<br />`Blue -- First RX window;`<br />`Yellow -- Second RX window;`<br />`Green -- Join done.` |
| COM Port                | Device's serial port in your computer                        |


``` Note:: **LORAWAN_Net_Reservation:** For example, a large-scale power outage in city, when power is restored, thousands of devices are connected to the network at the same time, which may cause the LoRa gateway or server to fail. Enable this feature will avoid this situation. Enable LORAWAN_Net_Reservation must disable Frame counter (fCnt) in LoRa server.

```

![](img/quick_start/06.png)

### Select an example

![](img/quick_start/07.png)

### Compile and upload

![](img/quick_start/08.png)



### New a sketch for CubeCell

In Arduino IDE, click `File --> new` and copy the following code:

```arduino
// the setup routine runs once when starts up
void setup(){

  // Initialize the Heltec ASR650x object


// the loop routine runs over and over again forever
void loop() {

}
```

## External resources

### Serial port cannot connected to Linux system?

In the Linux system, If encounter the serial port cannot be connected. Please refer to this document:
[https://playground.arduino.cc/Linux/All/#Permission](https://playground.arduino.cc/Linux/All/#Permission)

&nbsp;

Enjoy!

