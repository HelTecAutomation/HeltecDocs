# Config LoRaWAN Networking Parameters for CubeCell (Dev EUI, App Key, etc.)

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

``` Tip:: There are three method to configuration LoRaWAN networking parameters, choose one of them.

```

## Directly Fix in Source Code

LoRaWAN networking relevant parameters are in this path:

`ASR650X-ARDUINO/libraries/LoRa/src/Commissioning.h`

Change in the source code and Compile/Upload again.

&nbsp;

``` Note:: The follows two methods need AT-Command enable.

```

**[CubeCell AT Command list](CubeCell_Series_AT_Command_User_Manual_V0.2)**

## Via AT Command

Make sure the AT command mode is turned on and the required features are turned on.

```
#define  AT_SUPPORT  1
#define LoraWan_RGB 1
ASR is Waked,LowPower Mode Stopped
AT+DevEui=2232330000******
AT+AppKey=888888888888888888888888********
AT+AppEui=70B3D57ED00*****
AT+DutyCycle=60000
AT+DevEui=?
```

The CubeCell-Board completes the reset and starts to enter the network.

![img](file:///Users/aaronlee/Documents/HeltecDocs/en/source/cubecell/img/connect_to_server/09.png?lastModify=1577603288)

The CubeCell-Board can be reset by sending `AT+RESET=1`.

#### Please note that the configuration of the node's network access information must take effect only when the node is reset or the next time it enters the network. The parameters that have been configured by the node are printed after reset.

![img](file:///Users/aaronlee/Documents/HeltecDocs/en/source/cubecell/img/connect_to_server/08.png?lastModify=1577603288)

For example, I need to modify the send period to 60s and query the EUI of the node:

The node works in Class A mode by default, and the sending period is 15s. By default, ADR is enabled.

![img](file:///Users/aaronlee/Documents/HeltecDocs/en/source/cubecell/img/connect_to_server/07.png?lastModify=1577603288)

PS: '*' is the actual registered number. We need to be careful to ensure that the interval between each instruction is >100ms as much as possible to avoid some unnecessary bugs.

E.g:

After waking up the MCU, we can start to configure the DevEui, AppEui, AppKey of the registered nodes to CubeCell-Board.

We will see the information returned by CubeCell-Board.

![img](file:///Users/aaronlee/Documents/HeltecDocs/en/source/cubecell/img/connect_to_server/06.png?lastModify=1577603288)

#### At the beginning we need to send arbitrary data to the COM to wake up the MCU.

![img](file:///Users/aaronlee/Documents/HeltecDocs/en/source/cubecell/img/connect_to_server/05.png?lastModify=1577603288)

Open the serial port (COM4) and reset the CubeCell-Board. After the node is started, you can observe the printing:

- Click to download.
- The node access information is configured through the AT command.

For example, turn on the RGB light.



## Via CubeCell Configurator

