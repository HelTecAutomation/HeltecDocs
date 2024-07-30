********************************
Valve Controller Romete Commands
********************************
:ht_translation:`[简体中文]:[English]`

This article describes some common remote commands that you can issue through the LoRaWAN server to achieve remote control of the device.

**The port number is 3.**

1. Querying device parameters
=============================
+----------------+-------------------+----------+---------------+----------------+----------+-------------+----------------+
| Description    | Command type      | ADR 1byte| Confirm 1byte | Interval       | DR 1byte | Power 1byte | Timezone 2byte |
+================+===================+==========+================================+==========+=============+================+   
| Query          | 00                |          |               |                |          |             |                |
+----------------+-------------------+----------+---------------+----------------+----------+-------------+----------------+
| Feedback       | 00                | 00       | 01            | 64(Hex, 100S)  | 01       |16           | 00 08          |
+----------------+-------------------+----------+---------------+----------------+----------+-------------+----------------+
| Error Feedback | 00                | FF       |               |                |          |             |                |
+----------------+-------------------+----------+---------------+----------------+----------+-------------+----------------+
- **ADR**: 01 represents ADR, and 00 represents fixed DR.
- **Confirm**: 01 represents confirm, and 00 represents no confirm.
- **Interval**: LoRaWAN reporting interval, HRI-3633 will send the valve status to the server according to the Interval.
- **DR**: When fixed DR is enable.
- **Power**: RF power, unit'dbm'.
- **Timezone**: 00 represents East, 01 represents West.

2. Settting device parameters
=============================
+----------------+-------------------+----------+---------------+----------------+----------+-------------+----------------+
| Description    | Command type      | ADR 1byte| Confirm 1byte | Interval       | DR 1byte | Power 1byte | Timezone 2byte |
+================+===================+==========+================================+==========+=============+================+   
| Query          | 00                | 00       | 01            | 64(Hex, 100S)  | 01       |  16         |                |
+----------------+-------------------+----------+---------------+----------------+----------+-------------+----------------+
| Feedback       | 00                | 00       | 01            | 64(Hex, 100S)  | 01       | 64(Hex,100%)| 00 08          |
+----------------+-------------------+----------+---------------+----------------+----------+-------------+----------------+
| Error Feedback | 00                | FF       |               |                |          |             |                |
+----------------+-------------------+----------+---------------+----------------+----------+-------------+----------------+
- **ADR**: 01 represents ADR, and 00 represents fixed DR.
- **Confirm**: 01 represents confirm, and 00 represents no confirm.
- **Interval**: LoRaWAN reporting interval, HRI-3633 will send the valve status to the server according to the Interval.
- **DR**: When fixed DR is enable.
- **Power**: RF power, unit'dbm'.
- **Timezone**: 00 represents East, 01 represents West. Example, `00 08` represents `East 8`.

3. Query valve status
=====================
+----------------+-------------------+---------------+---------------+
| Description    | Command type      | valve 0 state | valve 1 state |
+================+===================+===============+===============+
| Query          | 08                |               |               |
+----------------+-------------------+---------------+---------------+
| Feedback       | 08                | 00            | 01            |
+----------------+-------------------+---------------+---------------+
| Error Feedback | 08                | FF            |               |
+----------------+-------------------+---------------+---------------+

4. Set valve status
===================
+----------------+-------------------+--------------+-------------+
| Description    | Instruction type  | Valve number | Valve state |
+================+===================+==============+=============+
| Setting        | 09                | (0-1)        | 01          |
+----------------+-------------------+--------------+-------------+
| Feedback       | 09                | (0-1)        | 01          |
+----------------+-------------------+--------------+-------------+
| Error Feedback | 09                | FF           |             |
+----------------+-------------------+--------------+-------------+
**Valve number**:0 means Valve_0; 1 means Valve_1.

5. Query pulse counter
======================
+----------------+-------------------+-------------------+-------------------+
| Description    | Instruction type  | Counter_0         | Counter_1         |
+================+===================+===================+===================+
| Query          | 0A                | (00-02)                               |
+----------------+-------------------+-------------------+-------------------+
| Feedback       | 0A                | 4byte             | 4byte             |
+----------------+-------------------+-------------------+-------------------+
| Error Feedback | 0A                | FF                |                   |
+----------------+-------------------+-------------------+-------------------+
**Counter number** : 00 means counter_0; 01 means counter_1; 02 means counter_0 and counter_1.

6. Clear pulse counter
======================
+----------------+-------------------+------------------+-----------------+
| Description    | Instruction type  | Counter_0        | Counter_1 4byte |
|                |                   | 4byte            | Counter_1 4byte |
+================+===================+==================+=================+
| Clear          | 0B                |                  |                 |
+----------------+-------------------+------------------+-----------------+
| Feedback       | 0B                | (4byte)          | (4byte)         |
+----------------+-------------------+------------------+-----------------+
| Error Feedback | 0B                | FF               |                 |
+----------------+-------------------+------------------+-----------------+

7. Query valve timing task instructions
=======================================
+----------------+-------------------+--------------------+--------+--------------+-------------+--------+-----------+-----------------+
| Description    | Instruction type  | Instruction number | Enable | action valve | action type | timed  | timed     | Repeat type     |
+================+===================+====================+========+==============+=============+========+===========+=================+
| Query          | 0C                | (01~15)            |        |              |             |        |           |                 |
+----------------+-------------------+--------------------+--------+--------------+-------------+--------+-----------+-----------------+
| Feedback       | 0C                | (01~15)            | (0-1)  | (0-2)        | ( 0-1 )     | (hour) | (minutes) | (0x7F)          |
+----------------+-------------------+--------------------+--------+--------------+-------------+--------+-----------+-----------------+
| Error Feedback | 0C                | FF                 |        |              |             |        |           |                 |
+----------------+-------------------+--------------------+--------+--------------+-------------+--------+-----------+-----------------+
- **Instruction number**: The first instruction is 01 and the last is 15 in the device configuration page.
- **Enable**: Instruction turn on or off, **00** means Off, **01** means On.
- **Action valve**: 0 means valve_0, 1 means valve_1, 2 means valve_0 and valve_1.
- **Action type**: 0 means close, 1 means open.
- **Timed1**: hour.
- **Timed2**: minutes, In hexadecimal, for example, the 30th minute should be expressed as 1E.
- **Repeat type**: The 8-digit binary system represents Sunday through Saturday in descending order.For example, **0000 0001**, means Sunday, the Hexadecimal notation is **01**; **0001 0001** means Thursday and Sunday, the Hexadecimal notation is **11**; **0111 1111** means every day of the week, the Hexadecimal notation is **7F**.

8. Set valve timing task instructions
=====================================
+----------------+-------------------+--------------------+---------+--------------+-------------+--------+-----------+-----------------+
| Description    | Instruction type  | Instruction number | Enable  | action valve | action type | timed1 | timed2    | Repeat type     |
+================+===================+====================+=========+==============+=============+========+===========+=================+
| Set            | 0D                | (01~15)            | (00-01) | (00-02)      | ( 00-01 )   | (hour) | (minutes) | (01~7F)         |
+----------------+-------------------+--------------------+---------+--------------+-------------+--------+-----------+-----------------+
| Feedback       | 0D                | (01~15)            | (00-01) | (00-02)      | ( 00-01 )   | (hour) | (minutes) | (01~7F)         |
+----------------+-------------------+--------------------+---------+--------------+-------------+--------+-----------+-----------------+
| Error Feedback | 0D                | FF                 |         |              |             |        |           |                 |
+----------------+-------------------+--------------------+---------+--------------+-------------+--------+-----------+-----------------+
- **Instruction number**: The instructions command is 01 and the last is 15 in the device configuration page.
- **Enable**: Instruction turn on or off, **00** means Off, **01** means On.
- **Action valve**: 0 means valve_0, 1 means valve_1, 2 means valve_0 and valve_1.
- **Action type**: 0 means close, 1 means open.
- **Timed1**: hour.
- **Timed2**: minutes, In hexadecimal, for example, the 30th minute should be expressed as 1E.
- **Repeat type**: The 8-digit binary system represents Sunday through Saturday in descending order.For example, **0000 0001**, means Sunday, the Hexadecimal notation is **01**; **0001 0001** means Thursday and Sunday, the Hexadecimal notation is **11**; **0111 1111** means every day of the week, the Hexadecimal notation is **7F**.