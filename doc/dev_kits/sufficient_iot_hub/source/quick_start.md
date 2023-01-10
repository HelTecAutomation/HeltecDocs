# Getting Started

## Introduction
Here is a T113 development board with LoRaWAN function.


## Setting up your Sufficient IoT Hub


### Make a SD Cards for Sufficient IoT Hub
1. Download [SD_Card_Toolkit.zip]() and unzip it.  

2. Insert the SD card into the computer with the card reader, and the computer will detect the SD card.        

3. Find the **SD Card Formatter** tool, double-click to open it, and select the card to be burned for formatting, as shown in the figure.

  ![](img/SD_Formatter.png)       

4. Download [T113_sdcard.img]() locally.  

5. Open the tool **Win32DiskImager** just downloaded, and burn it according to the following steps.

![](img/Win32DiskImager.png)

> Note: SD needs at least 2G capacity, 8G memory card is recommended.
### Establish Serial Connection
1. Take the SD card you just burned and insert it into the development board.
2. The development board uses serial port 3 (`PB6`, `PB7`) as the debug output serial port, the baud rate of the serial port is 115200, connect the serial port 3 to the computer above the serial software, you can see the printout.
### Login Sufficient IoT OS
1. You can see the login screen on top of the serial software.
> Username: root
> Password: 123456.

## Configuration

### Wi-Fi Connection
1. Go under the **/etc** directory.
2. Use the following statement for networking.
```
bash wlan-connect.sh yourssid  yourpwssd   1
```
### Ethernet Connection
1. You need to plug in the Internet cable first.
2. Execute the following statement to connect to the Internet.
```
udhcpc -i eth0
```