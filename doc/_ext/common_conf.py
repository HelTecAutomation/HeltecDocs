import recommonmark
from recommonmark.transform import AutoStructify

source_suffix = ['.rst', '.md']
# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'myst_parser',
    'ht_translation'
]

templates_path = ['../../../_ext/_templates']
exclude_patterns = []

locale_dirs = ['locale/']   # path is example but recommended.
gettext_compact = False     # optional.

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_rtd_theme'
html_static_path = ['../../../_ext/_static']

html_js_files = [
    'js/custom.js',
]
html_css_files = [
    'css/custom.css',
]

html_context = {
  'display_github': True,
  'github_user': 'HelTecAutomation',
  'github_repo': 'HeltecDocs',
  'github_version': 'master',
}

def update_path(path):
    html_context['conf_py_path'] = path
