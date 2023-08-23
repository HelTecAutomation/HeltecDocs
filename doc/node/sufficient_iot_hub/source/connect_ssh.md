# How to connect SSH


## Connect the device to the internet.
1. Connect Ethernet or WiFi, just connect one of them
```sh
udhcpc -i eth0 # Connecting Ethernet

cd /etc/
bash wlan-connect.sh ssid passwd 1 # Connect to WiFi
```

## Installing SSH
```sh
apt update
apt install ssh
```

## Modify configuration file
```sh
vim /etc/ssh/sshd_config 
#Find the relevant fields and modify them to the following format.
PasswordAuthentication yes
PermitRootLogin yes
```

## Startup SSH
```sh
systemctl start ssh 
systemctl status ssh #Check the SSH operation status.
```