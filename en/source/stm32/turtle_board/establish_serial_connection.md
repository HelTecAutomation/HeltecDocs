# Establish Serial Connection
[简体中文](https://heltec-automation.readthedocs.io/zh_CN/latest/stm32/turtle_board/establish_serial_connection.html)
The LoRa Node can print debugging information through USB-CDC (USB-Virtual Serial Poart) or UART, but the USB to UART chip is not integrated on the board. If the debugging information is to be output through the UART, an external USB to UART module is required.

## Use UART

- Open the example of we provided.
- Right-click the project to open `Properties`.

![](img/establish_serial_connection/03.png)

- Add `USE_DEBUGGER` in macro definitions, compile and download program.

![](img/establish_serial_connection/04.png)

- Connect the board and USB-UART module correctly.

```Tip:: The LoRa Node and USB-UART module are connect as below (if the LoRa Node is powered via USB or battery, the UART module&#39;s 3.3 / 5V pin do not need connect, just need TXD, RXD, GND).

```

![](img/establish_serial_connection/02.png)

```Tip:: When using UART, the TX and RX pins used in the program should be corresponding to the TX and RX pins on the board. In the routine we provide, we use TX-PA9 and RX-PA10. Therefore, TX of UART module should be connected to TX(PA9) of board, RX of UART module should be connected to RX(PA10) of board.

```

- Open serial port.

  ![](img/establish_serial_connection/05.png)

&nbsp;

## Use virtual serial port

- Open the example of we provided.
- Right-click the project to open `Properties`.

![](img/establish_serial_connection/03.png)

- Add `USB_VCP` and `USE_DEBUGGER`  in macro definitions, compile and download program.	

![](img/establish_serial_connection/01.png)

- Connect LoRa Node to computer via a Micro USB cable and open serial port.

![](img/establish_serial_connection/06.png)