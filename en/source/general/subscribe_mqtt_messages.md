# How to Subscribe MQTT Messages from LoRa Server
## Overview

The purpose of this article is to subscribe to data messages from TTN nodes using the MQTT plugin in the data flow applicition Node-Red provided by TTN.

The experiment kit used in this experiment is [HT-M02](https://heltec.org/project/ht-m02/), and [CubeCell-board](https://heltec.org/project/htcc-ab01/).

Maybe you don’t have a real device. You can still test this solution through the simulation uplink provided by TTN. How to use please see below.

----------
## Preparation

- First we need to connect LoRa gateways and nodes to TTN.(ESP32 series and Cubecell series are both available)

  How to connect gateways and nodes to TTN please refer to:

  - **[How to connect HT-M01 to TTN (The-Things-Network)](https://heltec-automation-docs.readthedocs.io/en/latest/gateway/ht-m01/connect_to_server.html#connect-to-ttn)**
  - **[How to connect CubeCell to a LoRa Gateway via LoRaWAN protocol (TTN)](https://heltec-automation-docs.readthedocs.io/en/latest/cubecell/lorawan/connect_to_gateway.html)**

- The Linux version of Node-Red and MQTT-Broker software installed in this article is Ubuntu 16.04. (The MQTT-Broker I use here is Mosquitto).

- MQTT.fx software is used to test whether it can subscribe to node messages.

  - About MQTT.fx : http://mqttfx.jensd.de 

### Download and install Node-red(takes a long wait)

If you are on a Raspberry Pi or any Debian-based operating system, including Ubuntu and Diet-Pi, you can use the Pi install script available here.

```Shell
bash <(curl -sL https://raw.githubusercontent.com/node-red/raspbian-deb-package/master/resources/update-nodejs-and-nodered)
```

If you want to install to other operating systems such as Windows, RedHat, CentOS, please refer to the official installation guide of Node-Red:
  - **[https://nodered.org/docs/getting-started/local](https://nodered.org/docs/getting-started/local)**

------------------
## Configure Node-Red

I access the web interface provided by Node-Red in ubuntu, so the port accessed through the browser is: `localhost:1880`

Then we need to download the TTN plugin in Node-Red.

### Add TTN palettes to Node-red

  - **Installation via user setting in Node-Red panel**

    ![](img/subscribe_mqtt_messages/01.png)

  - **Install from the command line**
```Shell
    npm install node-red-contrib-ttn@2.0.1
```
We need to configure the data source from TTN, such as APP EUI, APP KEY, DevEUI and other parameters...

We select INPUT-> ttn_message palette from the downloaded TTN plugin, which is on the left side of the panel.	Drag it into the Flow panel on the right.

![](img/subscribe_mqtt_messages/13.png)

Next, Double-click it fill in the key parameters such as the application EUI, KEY, and Device ID that we registered in TTN.

![](img/subscribe_mqtt_messages/03.png)

![](img/subscribe_mqtt_messages/04.png)

Click `Update` after configuration.

### Configure MQTT plugin

We need to configure the topic forwarded by the MQTT plugin.

For example, now I want to wrap the upstream message of a node into a topic named `Node_uplink` through the MQTT plugin and forward it to my private MQTT Broker. 

First, select the OUTPUT-> mqtt palette in the left panel. Drag it into the Flow panel on the right.

![](img/subscribe_mqtt_messages/05.png)

Next, double-click it to fill in our reposted topic. In the end, you must fill in your target broker.

![](img/subscribe_mqtt_messages/06.png)

![](img/subscribe_mqtt_messages/07.png)



After filling all the palettes, we must connect them in Flow.

![](img/subscribe_mqtt_messages/08.png)

Please don't forget to click the `Deploy` button in the upper right corner to make them effective after completing all the configurations.

![](img/subscribe_mqtt_messages/09.png)

------------------
## View subscription

Then use MQTT.fx software to subscribe to this topic. If it goes well, we will see the default uplink data  `1, 2, 3, 4.`(ASCII: 31 32 33 34) of CubeCell-Board in MQTT.fx software.

![](img/subscribe_mqtt_messages/10.png)

We successfully subscribed the payload of the uplink data of the nodes in the TTN through MQTT. 

If you don't have a real device, you can use the SIMULATE UPLINK prepared by TTN for you, which can be used like this:

![](img/subscribe_mqtt_messages/11.png)

It's in the Application-> Device page you created.

Click Send to simulate the node's Uplink data.

enjoy.

---------------------