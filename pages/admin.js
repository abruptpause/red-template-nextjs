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
  media_folder: 'public/images',

  // The Pages collection
  collections: [
    {
      name: 'Images',
      label: 'Image',
      label_singular: 'Image',
      folder: 'public/images/main',
      create: true,
      slug: '{{title}}_{{slug}}',
      extension: 'json',
      format: 'json',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: true,
        },
        {
          label: 'Medium',
          name: 'medium',
          widget: 'string',
          required: true,
        },
        {
          label: 'Size',
          name: 'size',
          widget: 'string',
          required: true,
        },
        {
          label: 'File',
          name: 'file',
          widget: 'image',
          required: true,
        }
      ]
    },
    {
      name: 'Side Images',
      label: 'Side Image',
      label_singular: 'Side Image',
      folder: 'public/images/side',
      create: true,
      slug: '{{title}}_{{slug}}',
      extension: 'json',
      format: 'json',
      fields: [
        {
          label: 'File',
          name: 'file',
          widget: 'image',
          required: true,
        }
      ]
    }
  ]
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
