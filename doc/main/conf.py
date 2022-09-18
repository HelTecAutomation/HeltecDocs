# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'main'
copyright = '2022, shug'
author = 'shug'
release = 'latest'

conf_py_path = '/doc/main/'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

import os
import sys
sys.path.insert(0, os.path.abspath('../_ext/'))
from common_conf import *

update_path(conf_py_path)

templates_path = ['../_ext/_templates', '_templates']
html_static_path = ['../_ext/_static', '_static']

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output


def setup(app):
    os.system("tree")
    os.system("bash install.sh")
    os.system("tree")
