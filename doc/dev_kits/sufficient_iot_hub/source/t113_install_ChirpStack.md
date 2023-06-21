# t113 install  ChirpStack

## 1. Install requirements
```sh
udhcpc -i eth0
apt-get update
apt-get install --reinstall ca-certificates
apt-get update
apt install \
    mosquitto \
    mosquitto-clients \
    redis-server \
    redis-tools \
    postgresql
```
## 2. PostgreSQL setup
To enter the command line utility for PostgreSQL:
```sh
postgres psql
```
Inside this prompt, execute the following queries to setup the ChirpStack database. It is recommended to change the usernames and passwords.
```sh
-- create role for authentication
create role chirpstack with login password 'chirpstack';

-- create database
create database chirpstack with owner chirpstack;

-- change to chirpstack database
\c chirpstack

-- create pg_trgm extension
create extension pg_trgm;

-- exit psql
\q

```
## 3. Setup software repository
ChirpStack provides a Debian repository which can be used to install the latest ChirpStack version. First make sure that both dirmngr and apt-transport-https are installed:

```sh
 apt install apt-transport-https dirmngr
```
Set up the key for the ChirpStack repository:
```sh
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 1CE2AFD36DBCCA0
```
Add the repository to the repository list:
```sh
echo "deb https://artifacts.chirpstack.io/packages/4.x/deb stable main" |  tee /etc/apt/sources.list.d/chirpstack.list
```
Update the apt package cache:
```sh
apt update
```

## 4. Install ChirpStack Gateway Bridge

> Note: If you intend to install the ChirpStack Gateway Bridge only on gateway(s) themselves, you can skip this step.

Install the package using apt:
```sh
apt install chirpstack-gateway-bridge
```
### 4.1 Configuration
The configuration file is located at /etc/chirpstack-gateway-bridge/chirpstack-gateway-bridge.toml. Please update the [integration.mqtt] section to match the region prefix for the region that applies to this ChirpStack Gateway Bridge instance.

Example for EU868:
```sh
[integration.mqtt]
event_topic_template="eu868/gateway/{{ .GatewayID }}/event/{{ .EventType }}"
command_topic_template="eu868/gateway/{{ .GatewayID }}/command/#"
```
### 4.2 Starting
Start the ChirpStack Gateway Bridge service:
```sh
# start chirpstack-gateway-bridge
sudo systemctl start chirpstack-gateway-bridge

# start chirpstack-gateway-bridge on boot
sudo systemctl enable chirpstack-gateway-bridge
```

## 5. Install ChirpStack
Install the package using apt:
```sh
apt install chirpstack
```
### 5.1 Configuration
The configuration files are located at /etc/chirpstack. You will find one global configuration file called chirpstack.toml and various region configuration files.
### 5.2 Starting
Start the ChirpStack service:
```sh
# start chirpstack
sudo systemctl start chirpstack

# start chirpstack on boot
sudo systemctl enable chirpstack
```
Print the ChirpStack log-output:
```sh
journalctl -f -n 100 -u chirpstack
```
## 6. configure gateway

The frequency band and frequency point of the gateway should be the same as those of the chirpstack.
```sh
cd /home/lora/sx130x_hal/packet_forwarder
ls     #View all bands
#Take 470 band as an example
cp -f global_conf_CN470_0-7.json global_conf.json 
vim global_conf.json
#Find and modify the following options
  # "server_address": "localhost",
  # "serv_port_up": 1700,
  # "serv_port_down": 1700,
#Save Exit
```
> Section 4.1 contains the frequency band configuration of the gateway.

### 6.1 Start Gateway
```sh
cd /home/lora/sx130x_hal/packet_forwarder
./lora_pkt_fwd 
```
## 7. LAN web login
View LAN IP:
```sh
$ ifconfig

eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.2.171  netmask 255.255.255.0  broadcast 192.168.2.255
        inet6 fe80::9096:71ff:fed1:743b  prefixlen 64  scopeid 0x20<link>
        ether 92:96:71:d1:74:3b  txqueuelen 1000  (Ethernet)
        RX packets 35021  bytes 34313908 (32.7 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 28314  bytes 2297084 (2.1 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 39  

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 6662  bytes 708718 (692.1 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 6662  bytes 708718 (692.1 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```
Use the LAN IP on the PC side to log in to ChirpStack.
```sh
http://192.168.2.171:8080/
User: admin
Password: admin
```

