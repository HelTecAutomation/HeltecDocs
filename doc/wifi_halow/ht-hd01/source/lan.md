# Building Local Area Network(LAN)

{ht_translation}`[简体中文]:[English]`

------------------------------------

**WiFi HaLow devices can form a LAN, allowing communication between connected devices**.

## Working Principle
Here are some key tips to help you achieve more networking configurations:
- All connected devices must obtain IP addresses from the same device, regardless of the network type they are connected to.
- Bridge mode does not handle IP assignment, whether on the AP or STA side. The responsibility for IP allocation lies with the higher-level device.
- In the HD01 configuration page diagram, you can see IP addresses are connected, .

## Common Examples
### Example 1: LAN without Router
A common method is to set the AP to None mode and the STA to BRIDGE mode. By configuring the AP in None mode, you eliminate the need for an external router, while setting the STA to Bridge mode ensures it doesn't participate in IP allocation, allowing all devices on the network to obtain IP addresses directly from the AP and establish connectivit.

![](img/lan/01.png)

1.  **AP Setup**<br>
    When configuring the AP side, set its **Upstream Network** to **None**.<br>If you are unsure how to configure AP mode, please refer to this link:<br>
    [AP Setup Guide](https://docs.heltec.org/en/wifi_halow/ht-hd01/ap-sta/ap.html)

    ![](img/lan/02.png)

2. **STA Setup**<br>
    When configuring the STA side, set its **Traffic Mode** to **Bridge**.<br>If you are unsure how to configure STA mode, please refer to this link:<br>
    [STA Setup Guide](https://docs.heltec.org/en/wifi_halow/ht-hd01/ap-sta/sta.html)

-----------------------------------

## Related Links
- [Access Configuration Page](https://docs.heltec.org/en/wifi_halow/ht-hd01/quick_started.html#access-configuration-page)
- [HaLow AP-STA](https://docs.heltec.org/en/wifi_halow/ht-hd01/ap-sta/index.html)
- [Mesh Point](https://docs.heltec.org/en/wifi_halow/ht-hd01/mesh/meshpoint.html)