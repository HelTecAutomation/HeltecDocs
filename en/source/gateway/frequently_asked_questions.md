# Heltec<sup>TM</sup> Gateway Series Frequently Asked Questions
[简体中文](https://heltec-automation.readthedocs.io/zh_CN/latest/gateway/frequently_asked_questions.html)

This page contains the most frequently questions from user. If this page's detail can't solve your problem, you can also talk in our forum: [community.heltec.cn](http://community.heltec.cn/)

&nbsp;

## HT-M02 Change Frequency Band

To change the HT-M02 gateway frequency band, just execute the following command.

```shell
sudo cp -f /home/debian/lora/lorasdk/lora_conf_CN470.json /home/debian/lora/packet_forwarder/lora_pkt_fwd/lora_conf.json
```

Among them, "lora_conf_CN470.json" can be replaced with "lora_conf_EU433.json", "lora_conf_EU868.json", and "lora_conf_US915.json", which correspond to the corresponding frequency bands.

