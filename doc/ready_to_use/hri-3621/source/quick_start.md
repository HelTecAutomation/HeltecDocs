# Getting Started

{ht_translation}`[简体中文]:[English]`

## Power supply
HRI-3621 integrates a 1100aMh rechargeable lithium battery, charging voltage is 5V and its charging interface is magnetic-2P, a single filling time is about 3~4 hours.

![](img/02.jpg) 

## LED light status description
The HRI-362x series has a wealth of indicator effects, which can help you more easily use the device, or determine the status of the device.

![](img/led.png)

## Configura
### Enter Configuration mode
+ Long press the button on the top of the device, and the device will first display white light and then orange light. At this time, release your finger.

``` {Tip} If the blue light/green light blinks sequentially after long press, it means that the device is in working state. After 5 seconds, when the light is all out and no longer blinks, release your finger and long press again to enter the configuration page.

```

![](img/03.jpg) 

+ Find the WiFi named **Sensor_Hub_xxxx** with your PC or mobile phone, connect it.

![](img/04.png) 

+ In the browser, type **192.168.4.1**, enter the configuration page.

![](img/05.png) 

### Parameter Definition
Configure the parameters according to specific requirements on the configuration page, and click `Submit` after the configuration is completed.The following is the definition of each parameter.

+ **Sensor Data Page**: This page will show real-time data when clicked, and you'll need to refresh it by clicking `Refresh`.

  ![](img/06.png)

+ **LoRaWAN Configuration Page**: Shows the parameter configuration associated with LoRaWAN.

  ![](img/07.png)

  - `Network access mode` LoRaWAN network access mode.
  - `NwkSKey` `appSKey` `devAddr` ABP node parameters, must be consistent across the server.
  - `RxWindow1Delay unit:S` Receive window 1 delay.
  - `RxWindow2Delay unit:S` Receive window 2 delay.
  - `Rx2dr` Window 2 data rate adaptive.
  - `DevEui`  `appEui`  `appKey` OTAA node parameters, must be consistent across the server.
  - `AppTxDutyCycle unit:S` Node transmission period.
  - `AppPort` AppPort.
  - `Channel_start` LoRaWAN channel start.
  - `Channel_end` LoRaWAN channel end.
  - `LoRaWanClass`LoRaWAN Class A, Class C.
  - `IsTxConfirmed` Send Receive confirmation
  - `LoRa signal light` Signal LED light switch.
  - `Adr` Data rate adaptation.
+ **Submit**: Configuration is complete, click here to submit.
+ **OTA UPDATE**: Sensor Hub for Industry series supports OTA upgrade.

## Operating
### Power off
After the configuration is completed, long press the button for five seconds, and when the light goes off, the device is shut down.
### Power on
Press the button for 3 seconds. When the button shows white light, release the button. At this time, the device enters the working state, where the sending is green light and the receiving is purple light.

## Common problems and solutions
+ Unable to confirm device working status.
Press the device button once, and if it shows blue light, it will wake up, and the device will upload a message immediately.

+ Device not working
After each configuration, you must button off in, then button on.