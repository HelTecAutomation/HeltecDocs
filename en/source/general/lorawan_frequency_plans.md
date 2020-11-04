# LoRaWAN Frequency Plans

[简体中文](https://heltec-automation.readthedocs.io/zh_CN/latest/general/lorawan_frequency_plans.html)

## Summary

This is the list of LoRaWAN frequency plans. These frequency plans are based on what is specified in the LoRaWAN regional parameters document. To know which frequency plan to use in your country, see the list of [frequency plans by country list](https://heltec-automation-docs.readthedocs.io/en/latest/general/lorawan_frequency_plans_by_country.html).

&nbsp;

## EU863-870

- Uplink:

1. **868.1** - SF7BW125 to SF12BW125
2. **868.3** - SF7BW125 to SF12BW125 and SF7BW250
3. **868.5** - SF7BW125 to SF12BW125
4. **867.1** - SF7BW125 to SF12BW125
5. **867.3** - SF7BW125 to SF12BW125
6. **867.5** - SF7BW125 to SF12BW125
7. **867.7** - SF7BW125 to SF12BW125
8. **867.9** - SF7BW125 to SF12BW125
9. **868.8** - FSK

- Downlink:
  - Uplink channels 1-9 (RX1)
  - **869.525** - SF9BW125 (RX2)

```Tip:: Note that The Things Network uses the non-standard SF9BW125 data rate for RX2 in Europe. If your devices use OTAA, this will be configured automatically when they join. If your devices use ABP, you’ll need to program this RX2 data rate into the devices.

```

&nbsp;

## EU433

No frequency plan yet.

&nbsp;

## US902-928

Used in USA, Canada and South America

- Uplink:

1. **903.9** - SF7BW125 to SF10BW125
2. **904.1** - SF7BW125 to SF10BW125
3. **904.3** - SF7BW125 to SF10BW125
4. **904.5** - SF7BW125 to SF10BW125
5. **904.7** - SF7BW125 to SF10BW125
6. **904.9** - SF7BW125 to SF10BW125
7. **905.1** - SF7BW125 to SF10BW125
8. **905.3** - SF7BW125 to SF10BW125
9. **904.6** - SF8BW500

- Downlink:

1. **923.3** - SF7BW500 to SF12BW500 (RX1)
2. **923.9** - SF7BW500 to SF12BW500 (RX1)
3. **924.5** - SF7BW500 to SF12BW500 (RX1)
4. **925.1** - SF7BW500 to SF12BW500 (RX1)
5. **925.7** - SF7BW500 to SF12BW500 (RX1)
6. **926.3** - SF7BW500 to SF12BW500 (RX1)
7. **926.9** - SF7BW500 to SF12BW500 (RX1)
8. **927.5** - SF7BW500 to SF12BW500 (RX1)
9. **923.3** - SF12BW500 (RX2)

&nbsp;

## CN470-510

Used in China

- Uplink:

1. **486.3** - SF7BW125 to SF12BW125
2. **486.5** - SF7BW125 to SF12BW125
3. **486.7** - SF7BW125 to SF12BW125
4. **486.9** - SF7BW125 to SF12BW125
5. **487.1** - SF7BW125 to SF12BW125
6. **487.3** - SF7BW125 to SF12BW125
7. **487.5** - SF7BW125 to SF12BW125
8. **487.7** - SF7BW125 to SF12BW125

- Downlink:

1. **506.7** - SF7BW125 to SF12BW125 (RX1)
2. **506.9** - SF7BW125 to SF12BW125 (RX1)
3. **507.1** - SF7BW125 to SF12BW125 (RX1)
4. **507.3** - SF7BW125 to SF12BW125 (RX1)
5. **507.5** - SF7BW125 to SF12BW125 (RX1)
6. **507.7** - SF7BW125 to SF12BW125 (RX1)
7. **507.9** - SF7BW125 to SF12BW125 (RX1)
8. **508.1** - SF7BW125 to SF12BW125 (RX1)
9. **505.3** - SF12BW125 (RX2)

&nbsp;

## AU915-928

- Uplink:

1. **916.8** - SF7BW125 to SF12BW125
2. **917.0** - SF7BW125 to SF12BW125
3. **917.2** - SF7BW125 to SF12BW125
4. **917.4** - SF7BW125 to SF12BW125
5. **917.6** - SF7BW125 to SF12BW125
6. **917.8** - SF7BW125 to SF12BW125
7. **918.0** - SF7BW125 to SF12BW125
8. **918.2** - SF7BW125 to SF12BW125
9. **917.5** - SF8BW500

- Downlink:

1. **923.3** - SF7BW500 to SF12BW500 (RX1)
2. **923.9** - SF7BW500 to SF12BW500 (RX1)
3. **924.5** - SF7BW500 to SF12BW500 (RX1)
4. **925.1** - SF7BW500 to SF12BW500 (RX1)
5. **925.7** - SF7BW500 to SF12BW500 (RX1)
6. **926.3** - SF7BW500 to SF12BW500 (RX1)
7. **926.9** - SF7BW500 to SF12BW500 (RX1)
8. **927.5** - SF7BW500 to SF12BW500 (RX1)
9. **923.3** - SF12BW500 (RX2)

```Tip:: Note that The Things Network uses 2nd Sub-Band only (channels 8 to 15 and 65). You’ll need to program the specific channels into the devices.

```

&nbsp;

## AS923

Use two frequency plans based on country/region. OTAA devices use two common channels: 923.2MHz and 923.4MHz. They will receive the additional channels on a successful join.

### AS920-923 (“AS1”)

Used in Japan, Malaysia, Singapore

- Uplink:

1. **923.2** - SF7BW125 to SF12BW125
2. **923.4** - SF7BW125 to SF12BW125
3. **922.2** - SF7BW125 to SF12BW125
4. **922.4** - SF7BW125 to SF12BW125
5. **922.6** - SF7BW125 to SF12BW125
6. **922.8** - SF7BW125 to SF12BW125
7. **923.0** - SF7BW125 to SF12BW125
8. **922.0** - SF7BW125 to SF12BW125
9. **922.1** - SF7BW250
10. **921.8** - FSK

-  Downlink:
  - Uplink channels 1-10 (RX1)
  - **923.2** - SF10BW125 (RX2)

### AS923-925 (“AS2”)

Used in Brunei, Cambodia, Hong Kong, Indonesia, Laos, Taiwan, Thailand, Vietnam

- Uplink:

1. **923.2** - SF7BW125 to SF12BW125
2. **923.4** - SF7BW125 to SF12BW125
3. **923.6** - SF7BW125 to SF12BW125
4. **923.8** - SF7BW125 to SF12BW125
5. **924.0** - SF7BW125 to SF12BW125
6. **924.2** - SF7BW125 to SF12BW125
7. **924.4** - SF7BW125 to SF12BW125
8. **924.6** - SF7BW125 to SF12BW125
9. **924.5** - SF7BW250
10. **924.8** - FSK

- Downlink:
  - Uplink channels 1-10 (RX1)
  - **923.2** - SF10BW125 (RX2)

&nbsp;

## KR920-923

- Uplink:

1. **922.1** - SF7BW125 to SF12BW125
2. **922.3** - SF7BW125 to SF12BW125
3. **922.5** - SF7BW125 to SF12BW125
4. **922.7** - SF7BW125 to SF12BW125
5. **922.9** - SF7BW125 to SF12BW125
6. **923.1** - SF7BW125 to SF12BW125
7. **923.3** - SF7BW125 to SF12BW125
8. *none*

- Downlink:
  - Uplink channels 1-7
  - **921.9** - SF12BW125 (RX2; SF12BW125 might be changed to SF9BW125)

&nbsp;

## IN865-867

- Uplink:

1. **865.0625** - SF7BW125 to SF12BW125
2. **865.4025** - SF7BW125 to SF12BW125
3. **865.9850** - SF7BW125 to SF12BW125

- Downlink:
  - Uplink channels 1-3 (RX1)
  - **866.550** - SF10BW125 (RX2)

&nbsp;

## Relevant Resources

- [Frequency Plans](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans.html)