# LoRaWAN example Sub-Band usage (AU915)

## Description

In the LoRaWAN protocol, there are detailed regulations in various countries or regions. These regulations include uplink and downlink Channel Frequency, Bandwidth, Duty cycle etc.

**[LoRaWAN 1.1 Regional Parameters](https://lora-alliance.org/sites/default/files/2018-04/lorawantm_regional_parameters_v1.1rb_-_final.pdf)**

Let's take AU915 as an example:

![](img/sub-band_usage/01.png)



Then, let's look into our code: (in LoRaWan_APP.cpp file)

![](img/sub-band_usage/02.png)

Here are 5 arrays defined all channels of LoRaWAN protocol for AU915. In the channelsMaskTemp[0], 0x00FF means use the first 0-7 channels, they are 915.2MHz, 915.4MHz, 915.6MHz … 916.6MHz. When you set the value to 0xFF00, it means the upload channels changed to 8-15, they are 916.8MHz, 917.0MHz … 918.2MHz. More detail... see the below picture：

![](img/sub-band_usage/03.png)

TTN uses 2nd Sub-Band only (channels 8 to 15 and 65) for AU915:
https://www.thethingsnetwork.org/docs/lorawan/frequency-plans.html

![](img/sub-band_usage/04.png)

## How To?

Generally speaking... we just need to change the `channelsMaskTemp[0]=0xFF00;`, then the uplink frequency will be changed to TTN supported.

*BTW. the listening frequency in your LoRa gateway must be the same as the TTN server. it's defined in your gateway's `gloable_conf.json` file.*