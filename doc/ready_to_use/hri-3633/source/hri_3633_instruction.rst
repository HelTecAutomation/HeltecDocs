*************************
Valve control instruction
*************************
:ht_translation:`[简体中文]:[English]`

**This document is still under update, if you have any questions, please contact our official email: support@heltec.cn.**

This document describes the HRI-3633 remote instructions that you can issue on the server.

**The port number is 3.**

1. Check valve status
=====================
+----------------+-------------------+---------------+---------------+
| Description    | Instruction type  | valve 0 state | valve 1 state |
+================+===================+===============+===============+
| Query          | 08                |               |               |
+----------------+-------------------+---------------+---------------+
| Feedback       | 08                | 00            | 01            |
+----------------+-------------------+---------------+---------------+
| Error Feedback | 08                | FF            |               |
+----------------+-------------------+---------------+---------------+

2. Set valve status
===================
+----------------+-------------------+------------------+-------------+
| Description    | Instruction type  | Valve number(0-1) | valve state|
+================+===================+==================+=============+
| Setting        | 09                | 00               | 01          |
+----------------+-------------------+------------------+-------------+
| Feedback       | 09                | 00               | 01          |
+----------------+-------------------+------------------+-------------+
| Error Feedback | 09                | FF               |             |
+----------------+-------------------+------------------+-------------+

3. Query pulse counter
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
**Counter number** : 00=counter_0; 01=counter_1; 02=counter_0 and counter_1.

4. Clear pulse counter
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

5. Query valve timing task instructions
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
- **Instruction number**: The first command is 01 and the last is 15 in the device configuration page.
- **Enable**: Instruction turn on or off, **00** means Off, **01** means On.
- **Instruction number**: The first command is 01 and the last is 15 in the device configuration page.
- **Enable**: Instruction turn on or off, **00** means Off, **01** means On.
- **Action valve**: 0 means valve_0, 1 means valve_1, 2 means valve_0 and valve_1.
- **Action type**: 0 means close, 1 means open.
- **Timed1**: hour.
- **Timed2**: minutes, In hexadecimal, for example, the 30th minute should be expressed as 1E.
- **Repeat type**: The 8-digit binary system represents Sunday through Saturday in descending order.
For example, **0000 0001**, means Sunday, the Hexadecimal notation is **01**; **0001 0001** means Thursday and Sunday, the Hexadecimal notation is **11**; **0111 1111** means every day of the week, the Hexadecimal notation is **7F**.

6. Set valve timing task instructions
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
- **Instruction number**: The first command is 01 and the last is 15 in the device configuration page.
- **Enable**: Instruction turn on or off, **00** means Off, **01** means On.
- **Action valve**: 0 means valve_0, 1 means valve_1, 2 means valve_0 and valve_1.
- **Action type**: 0 means close, 1 means open.
- **Timed1**: hour.
- **Timed2**: minutes, In hexadecimal, for example, the 30th minute should be expressed as 1E.
- **Repeat type**: The 8-digit binary system represents Sunday through Saturday in descending order.
For example, **0000 0001**, means Sunday, the Hexadecimal notation is **01**; **0001 0001** means Thursday and Sunday, the Hexadecimal notation is **11**; **0111 1111** means every day of the week, the Hexadecimal notation is **7F**.