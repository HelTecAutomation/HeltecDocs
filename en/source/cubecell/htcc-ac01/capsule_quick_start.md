# 拿到CubeCell胶囊传感器之后，如何开始

-------------------------------------------------------------------------------------------------------

## 目录

1. [概述](#总览)
2. [事前准备](#事前准备)
3. [例程说明](#例程说明)

## 概述

**使用胶囊传感器时，注意以下一些问题：**

- 胶囊传感器的本身定位为一种小体积、方面组装和部署的传感器，自身是不带有程序烧录、调试等接口的，需要使用[调试板](https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-17001064404.9.614a2dcbHZPe2o&id=604633131143)，才能进行程序的烧录、调试工作；
- 因为仓储、运输等问题，胶囊内部默认是未集成电池的，中国大陆地区的用户，下单时可以告知我们的客服，我们会提供集成电池的服务。
  - [如何在胶囊传感器内集成一个电池](zh_CN/user_manual/assemble_a_battery)

&nbsp;

## 事前准备
- [安装CubeCell Arduino开发环境](zh_CN/user_manual/how_to_install_ASR650x_Arduino)；
- 一根优质的Micro USB线缆；
- [将胶囊传感器与调试板正确相连](zh_CN/user_manual/connect_capsule_to_debugger)；
- 若有需要，安装CP2102驱动程序（大多数情况下，Windows，Mac OS，Linux会自动识别CP2102 USB转串口芯片，若未正常识别，请参阅[这里](zh_CN/user_manual/establish_serial_connection)）。

&nbsp;

## 例程说明

#### 传感器基本测试

`Sensor Basic Test (XXX)`路径下，是胶囊传感器使用的基本测试程序，可用于快速验证传感器，读取传感器数值。括弧种的内容说明：

- Heltec made -- 为我公司生产的传感器模块配套的测试程序；
- Third party -- 由用户开发的第三方传感器模块的支持；

<img src="img\cubecell_capsule_begin\01.png">

&nbsp;

#### 传感器基本测试 + LoRaWAN协议发送云服务器测试

`LoRa → LoRaWAN_Sensors(_ThirdParty)`路径下，是读取传感器数据后，再通过LoRaWAN协议发送到网关的例子。

要进行此部分的测试需要做额外以下一些准备：

1. 一个支持标准LoRaWAN协议的[网关](https://heltec.org/proudct_center/lora/lora-gateway/)，请注意一定是**“标准LoRaWAN协议”**，因为LoRaWAN协议中，对各地区的工作频段、上下行频点、监听信道、发射功率，都有明确规定！CubeCell严格按照LoRaWAN协议进行工作，若网关工作在私有频段或监听信道不匹配，会导致无法与网关通信；
2. 确保网关已经成功的连接到云服务器上（TTN，阿里云等），若使用我司生产的网关，请参阅相关文档；
3. [正确配置节点的DevEUI，APP KEY等参数]()，确保与服务器匹配。

