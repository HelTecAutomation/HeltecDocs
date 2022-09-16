import os
from docutils import nodes
from sphinx.transforms.post_transforms import SphinxPostTransform

import sphinx.builders


class translation_link(nodes.Element):
    """Node for "ht_translation" role."""


def ht_translation(name, rawtext, text, lineno, inliner, options={}, content=[]):
    node = translation_link()
    node['expr'] = (rawtext, text, options)
    return [node], []


class TranslationLinkNodeTransform(SphinxPostTransform):
    default_priority = 0

    def run(self, **kwargs):

        for node in self.document.traverse(translation_link):
            if 'html' in self.app.builder.name:
                rawtext, text, options = node['expr']
                (zh, en) = text.split(':')
                env = self.document.settings.env
                docname = env.docname
                base_url = self.app.outdir.split('/html', maxsplit=1)[1]
                if base_url.startswith('/en'):
                    base_url = base_url.replace('/en', '/zh_CN')
                    url = '{}.html'.format(os.path.join(base_url, docname))
                    node.replace_self(nodes.reference(rawtext, zh, refuri=url, **options))
                else:
                    base_url = base_url.replace('/zh_CN', '/en')
                    url = '{}.html'.format(os.path.join(base_url, docname))
                    node.replace_self(nodes.reference(rawtext, en, refuri=url, **options))
            else:
                node.replace_self([])


def setup(app):
    app.add_role('ht_translation', ht_translation)
    app.add_node(translation_link)
    app.add_post_transform(TranslationLinkNodeTransform)

    return {'parallel_read_safe': True, 'parallel_write_safe': True, 'version': '0.5'}

