# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'sufficient_iot_hub'
conf_py_path = '/doc/dev_kits/sufficient_iot_hub/source/'

copyright = '2023, shug'
author = 'shug'
release = 'latest'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration
import os
import sys
sys.path.insert(0, os.path.abspath('../../../_ext/'))
from common_conf import *

update_path(conf_py_path)
