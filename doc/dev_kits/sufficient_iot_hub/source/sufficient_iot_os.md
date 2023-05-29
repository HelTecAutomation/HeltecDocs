# Sufficient IoT OS

## Introduction


## The Linux Kernel
This kernel is fully dedicated to the mainline linux-5.4 and adapts to the features of t113.   
linux-5.4 Summary: This release includes the kernel lockdown mode, intended to strengthen the boundary between UID 0 and the kernel; virtio-fs, a high-performance virtio driver which allows a virtualized guest to mount a directory that has been exported on the host; fs-verity, for detecting file tampering, like dm-verity, but works on files rather than block devices; dm-clone, which allows live cloning of dm targets; two new madvise() flags for improved app memory management on Android, support for new Intel/AMD GPUs, support for the exfat file system and removing the experimental status of the EROFS file system; a new haltpoll cpuidle driver and governor that greatly improves performance for virtualized guests wanting to do guest-side polling in the idle loop; and blk-iocost, a I/O cgroup controller that attempts to calculate the cost of I/O more accurately. As always, there are many other new drivers and improvements.

### Building the Kernel
1. Download [heltec_t113.zip]() and unzip it afterwards.       
2. Open Vmware software, click "Open" in the main interface "File" menu, and then select the OVF extension file inside the folder you just unzipped.
3. Then you will be asked to set the name of the virtual machine and the file directory, where the file directory is the real directory of the new virtual machine.           
>Note: It is best to choose a directory disk larger than 100G for the installation.            

4. Go to the virtual machine, username:navi password:1598 .           
5. Go to the **t113** directory and execute the following statement
```
source build/envsetup.sh
./build.sh
./build.sh pack
```
6. Package the img file.
```sh
cd ~
./rootfs_pack.sh
#After execution, a ~/T113_sdcard.img
```
7. T113_sdcard.img  can be directly burned to the SD card, and then plugged into the development board to start.

### Download the source code separately.
You can also build your own environment for compilation. The source code has been placed in github. Please refer to the official Quanzhi document for environment installation.
