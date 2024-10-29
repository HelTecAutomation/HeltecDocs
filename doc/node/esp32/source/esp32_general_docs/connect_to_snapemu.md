# Heltec WiFi LoRa 32 V3  Connect  to Snapemu

## Register a LoRa Node in Snapemu

*User log in to [Snapemu](https://platform.snapemu.com/dashboard/) by using their Heltec website account.* 

![](img/connect_to_snapemu/1.png)

*User successfully logs in, this interface will be displayed.* 

![](img/connect_to_snapemu/2.png)

*Registering the device, click where shown below.*

![](img/connect_to_snapemu/3.png)

*Fill in configuration information on this interface and submit it after completion.*

![](img/connect_to_snapemu/4.png)

   - `device name` and `description` can be filled in freely, and they will become the name and remark of the device displayed on the platform. 
   - `group` denotes the grouping of the device on SnapEmu.
   - `Device type` This device is a node, so choose "LoRaNode".
   - `Region` Match the frequency band of the LoRaNode.
   - `jointype`  All choose OTAA mode
   - `Appeui` and `Deveui`  and `AppKey`   need to match the LoRaWAN code, which can be customized by the user. When registering, only the numerical value needs to be filled in. 

![](img/connect_to_snapemu/5.png)

*After running the lorawan code, the device will be automatically activated, and if everything goes smoothly, it will be as shown in the figure. Then click here to select the corresponding product image.*

![](img/connect_to_snapemu/6.png)

![](img/connect_to_snapemu/7.png)

![](img/connect_to_snapemu/8.png)

The final result will be as shown in the figure.

![](img/connect_to_snapemu/9.jpg)