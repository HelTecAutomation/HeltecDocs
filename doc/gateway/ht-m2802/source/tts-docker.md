# M2802 Install TTS through Docker

[toc]

## 1. Environmental preparation
### 1.1 Install Certificate Tool
```sh
    apt install golang-cfssl
```

### 1.2 Install docker-compose
1.2.1 The following two methods are the same, but the github network in some regions is slower, and the other one will be faster.
```sh
    wget https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-linux-aarch64 
    or
    wget http://minerback.heltec.cn/download/docker-compose-linux-aarch64
```

```sh
    chmod +x docker-compose-linux-aarch64
    cp docker-compose-linux-aarch64 /usr/bin/docker-compose
```

## 2. Configure TTS
### 2.1 Configure the docker-compose.yml file.
2.1.1 Create a folder to save the docker-compose.yml file.
```sh
    mkdir /root/tts
    cd /root/tts  
```

2.1.2 Enter the [TTS installation document interface](https://www.thethingsindustries.com/docs/getting-started/installation/configuration/) to download the docker-compose.yml file, or use the following statement to download.
```sh
    cd /root/tts  
    wget https://www.thethingsindustries.com/docs/getting-started/installation/configuration/docker-compose-open-source.yml -O docker-compose.yml
```
> Note: When downloading, select the configuration file of the open source project to download. You cannot download the enterprise user configuration file.

2.1.3 Postgres currently has no version requirements. It can be configured as a relatively new and stable version. Here is the selected ***15***.
```sh
    image: postgres:15
```

2.1.4 Redis currently requires version ***6.2***, so you can select 6.2 directly.
```sh
    image: redis:6.2
```

2.1.5  The current version of stack is modified directly by ***3.22.2***. Then because it is used locally, the encryption certificate file is also used locally, so it needs to be commented out ***# - ./acme:/var/lib/acme***. And will be opened with local certificates.
```sh
	image: thethingsnetwork/lorawan-stack:3.22.2
```

```sh
    # - ./acme:/var/lib/acme
```

```sh
   secrets:
      - ca.pem
      - cert.pem
      - key.pem
```

```sh
    secrets:
        ca.pem:
            file: ./ca.pem
        cert.pem:
            file: ./cert.pem
        key.pem:
            file: ./key.pem
```
>Note: The above modifications are made in the docker-compose.yml file.

### 2.2 Configure ttn-lw-stack-docker.yml file
2.2.1 Create a folder to save the ttn-lw-stack-docker.ymll file.
```sh
    mkdir -p /root/tts/config/stack
    cd  /root/tts/config/stack
```

2.2.2 Enter the [TTS installation document interface](https://www.thethingsindustries.com/docs/getting-started/installation/configuration/) to download the ttn-lw-stack-docker.yml file, or use the following statement to download.
```sh
    cd  /root/tts/config/stack
    wget https://www.thethingsindustries.com/docs/getting-started/installation/configuration/ttn-lw-stack-docker-open-source.yml -O ttn-lw-stack-docker.yml
```

2.2.3 Complete ***block-key:*** and ***hash-key:*** in ***# HTTP server configuration***.
2.2.3.1 Execute the following command in the shell interface to generate the key.
```sh
    openssl rand -hex 32               # generate 32 bytes 
    openssl rand -hex 64               # generate 64 bytes
```

2.2.3.2 Save the key generated above to the following file.
```sh
# HTTP server configuration
http:
  cookie:
    block-key: 'f3043ef59511de9cee7e306718d9cd77e435e5d7f8627a87e2867ce9e438dc63'      # generate 32 bytes (openssl rand -hex 32)
    hash-key: '20ef7adcc58c6ec4fe5cb1e9890c9c48cb68183732948e4e87a9edf0d663e4846022a6225ceae23001fdeae76bd74523e253dac8aeab39875eef3a10579f4c36'   # generate 64 bytes (openssl rand -hex 64)
```

2.2.4 Modify the encryption file used.
```sh
# If using custom certificates:
tls:
   source: file
   root-ca: /run/secrets/ca.pem
   certificate: /run/secrets/cert.pem
   key: /run/secrets/key.pem

# Let's encrypt for "thethings.example.com"
#tls:
# source: 'acme'
# acme:
#   dir: '/var/lib/acme'
#   email: 'you@thethings.example.com'
#   hosts: ['thethings.example.com']
#   default-host: 'thethings.example.com'
```

2.2.5 Add a dcs in the console.
```sh
console:
    dcs:
      base-url: 'https://thethings.example.com/api/v3'
```

2.2.6 Replace all domain names with LAN IP addresses.  
2.2.6.1 Get the LAN IP.
```sh
    ifconfig
```

2.2.6.2 Replace the domain name with the acquired LAN IP.
```sh
    identity-server-url: 'https://thethings.example.com/oauth' #Before replacement
    identity-server-url: 'https://192.168.2.106/oauth'         #After replacement
```
> Note： 
> 1. When replacing, only the domain name can be replaced, and ***https://*** should be reserved.
> 2. After each IP transformation, it needs to be replaced again, otherwise it cannot be accessed normally.
> 3. Each domain name of the ttn-lw-stack-docker.yml file needs to be replaced.

## 3. Certificate generation
### 3.1 Generate ca.pem
3.1.1 Create ca.json and add the data.
```sh
    cd /root/tts
    vim ca.json
```
> The following data is used for filling.
```json
{
    "names": [
    {"C": "NL", "ST": "Noord-Holland", "L": "Amsterdam", "O": "The Things Demo"}
    ]
}
```

3.1.2 Execute the following command to generate.
```sh
    cfssl genkey -initca ca.json | cfssljson -bare ca
```

### 3.2 Generate key.pem cert.pem
3.2.1 Create cert.json and add the data.
```sh
    cd /root/tts
    vim cert.json
```
> The following is the data for filling. The IP address in it needs to be replaced with its own LAN IP.
```json
{
    "hosts": ["192.168.2.106"],
    "names": [
    {"C": "NL", "ST": "Noord-Holland", "L": "Amsterdam", "O": "The Things Demo"}
    ]
}
```

3.2.2 Execute the following command to generate.
```sh
    cfssl gencert -ca ca.pem -ca-key ca-key.pem cert.json | cfssljson -bare cert
```

3.2.3 you’ll need to rename cert-key.pem to key.pem.
```sh
    cp -f cert-key.pem  key.pem
```

## 4. Run TTS
### 4.1 Download image file
```sh
    cd /root/tts
    docker-compose pull 
```

### 4.2 The database of Identity Server needs to be initialized.
```sh
    docker-compose run --rm stack is-db migrate
```

### 4.3 You must create an initial administrator user and make sure you give it a good password.
```sh
    docker-compose run --rm stack is-db create-admin-user \
    --id admin \
    --email your@email.com
```

### 4.4 The command line interface needs to be registered as an OAuth client.
```sh
    docker-compose run --rm stack is-db create-oauth-client \
        --id cli \
        --name "Command Line Interface" \
        --owner admin \
        --no-secret \
        --redirect-uri "local-callback" \
        --redirect-uri "code"
```

### 4.5 The OAuth client of Console and Network Operations Center needs to be created in Identity Server so that they can use the login function.
```sh
    SERVER_ADDRESS="192.168.2.106"
    ID="console"
    NAME="Console"
    CLIENT_SECRET="console"
    REDIRECT_URI="${SERVER_ADDRESS}/console/oauth/callback"
    REDIRECT_PATH="/console/oauth/callback"
    LOGOUT_REDIRECT_URI="${SERVER_ADDRESS}/console"
    LOGOUT_REDIRECT_PATH="/console"
    
    docker-compose run --rm stack is-db create-oauth-client \
        --id ${ID} \
        --name "${NAME}" \
        --owner admin \
        --secret "${CLIENT_SECRET}" \
        --redirect-uri "${REDIRECT_URI}" \
        --redirect-uri "${REDIRECT_PATH}" \
        --logout-redirect-uri "${LOGOUT_REDIRECT_URI}" \
        --logout-redirect-uri "${LOGOUT_REDIRECT_PATH}"
```
>Note: These parameters need to be quoted, and the service address needs to be changed to its own IP address.

### 4.6  Running The Things Stack 
```sh
    docker-compose up
```