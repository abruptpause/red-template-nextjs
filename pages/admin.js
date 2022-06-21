/* eslint-disable */

import dynamic from 'next/dynamic'
import Head from 'next/head'
import Script from 'next/script'

// https://www.netlifycms.org/docs/configuration-options/
// https://github.com/netlify/netlify-cms/issues/3580
// https://www.luckymedia.dev/blog/page-builder-with-netlify-cms-and-next-js
// https://stackoverflow.com/questions/62203427/problem-with-configuring-netlify-cms-with-git-gateway
// https://answers.netlify.com/t/fetch-data-from-the-cms-in-create-react-app/40084/3

const config = {
  // We want to manually init the config file
  // cms_manual_init: true,

  // Backend configuration, in this case with git
  backend: {
    name: 'git-gateway',
    branch: 'main',
    repo: 'abruptpause/red-template-nextjs',
    squash_merges: true,
  },

  // Local backend is used during development
  // local_backend: true,

  // Where to store the images
  media_folder: 'public/images/',

  // The Pages collection
  collections: [
    {
      name: 'Images',
      label: 'Image',
      // editor: { preview: false },
      label_singular: 'Image',
      folder: 'public/Images',
      create: true,
      // slug: '{{slug}}',
      slug: '{{title}}_{{slug}}',
      // extension: 'md',
      extension: 'json',
      // format: 'yaml-frontmatter',
      format: 'json',
      fields: [
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
          required: false,
        },
        {
          label: 'File',
          name: 'file',
          widget: 'image',
          required: true,
        },
      ],
    },
  ],
}

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then(cms => {
      cms.init({ config })
    }),
  {
    ssr: false,
    loading: () => (
      <div>
        <p>Loading...</p>
      </div>
    ),
  }
)

const Admin = () => {
  return (
    <>
      <Head>
        <Script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
      </Head>
      <CMS />
    </>
  )
}

export default Admin
