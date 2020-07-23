# HT-M02 Edge LoRa Gateway 4G(LTE) Quick Start
[简体中文](https://heltec-automation.readthedocs.io/zh_CN/latest/gateway/ht-m02_4g/quick_start_4g.html)
## Summary

HT-M02 has integrated operating system and LoRa related programs, so it can be used directly in applications. HT-M02 has two versions: PoE and 4G(LTE). The purpose of this article is how to use the 4G(LTE) version.

``` Note:: Before powering up for the first time, make sure the antenna is properly installed in the appropriate location. The standard antenna itself is not water-discharged. If it is necessary to use it outdoors for a long time, it is recommended to use a plastic film to properly block the antenna part.

```

## Configure the gateway

### Establish Serial Connection

4G (LTE) network don't have a public IP address. So the only way to config the HT-M02 4G version is via a serial port. in other words, before deploying the gateway, you need to configure the gateway through the serial port.

Because of the waterproof design, the UART interface is not directly exposed outside. Establish a serial connection need to remove the protective board on the side of the HT-M02, and also a UART-USB bridge is required (CP2102, CP2104, CH340G etc.).

- HT-M02 TXD `<---->` UART-USB bridge RXD

- HT-M02 RXD `<---->` UART-USB bridge TXD

- HT-M02 GND `<---->` UART-USB bridge GND

![](img/quick_start_4g/04.png)

Recommended to use [Putty,](https://putty.org/) configured as shown in the following image. 

![](img/quick_start_4g/05.png)

## Power ON for the first time

This version only supports 220 / 110V AC power supply. Before all operations, insert the Micro SIM card first, the card direction and interface are as shown below (SIM card chip facing down, notch facing outward):

![](img/quick_start_4g/01.png)

If everything goes well, the system will run automatically after power ON. When the system kernel starts successfully, the SYS LED light up. After the whole system initial complete, the TX LED will flash once, and the system enters the normal working status. The entire boot process takes approximately 90 seconds.

4G (LTE) networks will automatically identification and registration.

- Default login account: `debian`
- Default login password: `temppwd`

``` Tp:: Many system logs printed on the putty terminal. Once the system is started, it can be logged in at any time.

```

&nbsp;

## Relevant resources

More details about how to connect to a LoRa server, please refer to here:

[https://heltec-automation-docs.readthedocs.io/en/latest/gateway/ht-m01/connect_to_server.html](https://heltec-automation-docs.readthedocs.io/en/latest/gateway/ht-m01/connect_to_server.html)