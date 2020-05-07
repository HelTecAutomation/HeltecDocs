# Assemble a battery to Capsule sensor
[简体中文](https://heltec-automation.readthedocs.io/zh_CN/latest/cubecell/capsule-sensor/htcc-ac01/assemble_a_battery.html)

The capsule sensor is a global product, but because of international transportation, storage and other problems, **default is no integrated battery inside the Capsule sensor**.

&nbsp;

After disassembling the sensor shell, you can see 2 pads on the round PCB at the bottom, and solder the battery positive and negative electrodes to this pad:

![](img/assemble_a_battery/01.png)

&nbsp;

![](img/assemble_a_battery/02.png)

&nbsp;

## Battery specifications

In the capsule sensor, it's already integrates a charge management circuit (see [Capsule sensor bottom plate schematic diagram]()), but does not have an over-discharge protection circuit, so **the lithium battery must have a protection circute**. Battery must include following features:

- Voltage: 3.7V
- Charging voltage: 4.2V
- Discharge cut-off voltage: ≤3.3V

&nbsp;

