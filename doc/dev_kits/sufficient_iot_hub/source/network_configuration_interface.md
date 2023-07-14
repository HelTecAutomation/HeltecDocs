# Network configuration interface

## How to open the network configuration interface
1. Open web task

   ```sh
   systemctl start webconfig.service 
   ```

2. View task status

   ```sh
    systemctl status webconfig.service 
   ```

3. Enable startup

   ```sh
   systemctl enable webconfig.service 
   ```

4. Use the **ifconfig** command to view the LAN IP, and then enter this IP address in the browser to enter the network configuration interface.