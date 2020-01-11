CubeCell
========

We believe `CubeCell Series <https://heltec.org/cubecell>`__ is the best
choice for LoRaWAN node applications, which provide following main
features:

-  Fully Arduino-Compatible;
-  Ultral low power design, best can reach 3.5uA in deep sleep mode
   (with RTC clock running);
-  Low-cost;
-  Integrated encryption algorithm, for example, a product based on
   CubeCell, if someone copied the firmware inside the flash and
   program into a clone hardware, it will not running;
-  Use ASR650x, it's PSoC4000 and SX1262 inside one chip, makes
   application circuit has smaller size;
-  Solar panel support;
-  LoRaWAN protocol support;
-  AT command support;
-  In the LoRaWAN relevant examples, have a reasonable timeline
   planning.

.. tip::

   for example, an application need send data to server every 10 minutes, then in a cycle, only ~1 second is in the state of sending, other 9 minutes and 59 seconds are in deep sleep low power Consuming status.


.. toctree::
    :maxdepth: 2
    
    Quick Start <quick_start>
    Config LoRaWAN Networking Parameters <config_parameter>
    Connect to LoRaWAN server <connect_to_gateway>
    LoRaWAN Example Sub-Band Usage <sub_band_usage>
    AT Command List <https://docs.heltec.cn/download/cubecell/CubeCell_Series_AT_Command_User_Manual_V0.2.pdf>



