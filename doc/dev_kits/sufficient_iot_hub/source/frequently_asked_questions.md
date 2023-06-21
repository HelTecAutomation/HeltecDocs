# frequently_asked_questions


## How to achieve expansion and use the full capacity of the memory card?
1. Query the starting address of the idle partition (6th partition):
```sh
fdisk -l #The starting address of the second partition displayed is 135414, which will be used later.
```
2. Follow the steps below to reallocate the partition size.
```sh
fdisk /dev/mmcblk0

#The backup GPT table is not on the end of the device. This problem will be corrected by write.
#A hybrid GPT was detected. You have to sync the hybrid MBR manually (expert command 'M').

Command (m for help): d
Partition number (1-6, default 6): 6

#Partition 6 has been deleted.

Command (m for help): n
Partition number (6-128, default 6): 6
First sector (135414-15687646, default 137216): 135414
Last sector, +/-sectors or +/-size{K,M,G,T,P} (135414-15687646, default 15687646): #Just press Enter here.

#Created a new partition 6 of type 'Linux filesystem' and of size 7.4 GiB.
#Partition #6 contains a ext4 signature.

Do you want to remove the signature? [Y]es/[N]o: n

Command (m for help): w
#The device contains hybrid MBR -- writing GPT only. You have to sync the MBR manually.

#The partition table has been altered.
#Syncing disks.

```
3. Restart
```sh
    reboot
```
4. After restarting, you also need to use the resize2fs command to adjust the size of the file system:
```sh
    resize2fs /dev/mmcblk0p6
```
5. View the latest file system size.
```sh
    fdisk -l
```

## How to add swap memory?
```sh
	mkdir /opt/swapfile
	dd if=/dev/zero of=/opt/swapfile/swap256 bs=1M count=256
	chown root:root /opt/swapfile/swap256
	chmod 0600 /opt/swapfile/swap256
	mkswap /opt/swapfile/swap256
	swapon /opt/swapfile/swap256
	vim  /etc/fstab  #Add a new line in the /etc/fstab file to indicate automatic mounting upon startup. ( /opt/swapfile/swap256  swap swap defaults 0 0 )
```

## Make msconfig cannot function properly on SSH on Mac
1. This is because the Character encoding in the environment does not support locks. Change it to C.UTF-8.
```sh
    env # Viewing Environment Variables
    export LANG=C.UTF-8
```
