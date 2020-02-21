# What's the Upgrade of WiFi LoRa 32 (V2) Compare with V1

- 4MB (32M-bits) FLASH upgrade to 8MB (64M-bits) FLASH;

- Use 40MHz HSE (V1 use 26MHz);

- Basic low power design (800uA in deep sleep);

- Add Vext power output pin, users can use this pin to drive some external device (sensor, motor etc.), when system need into deep sleep mode, Vext can be turn off.

  **This pin was controlled by GPIO21, for example:**

  ​		Turn ON:  `digitalWrite(21, LOW);`

  ​		Turn OFF: `digitalWrite(21, HIGH);`

- Changed some pin connection:

| Pin name  | V1 connection | V2 connection |
| --------- | ------------- | ------------- |
| LoRa DIO1 | GPIO 33       | GPIO 35       |
| LoRa DIO2 | GPIO 32       | GPIO 34       |

- Circuit optimization, system more stable;
- Better power manage system design;
- Better RF impendence matching.