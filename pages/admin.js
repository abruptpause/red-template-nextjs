#!/usr/bin/env node

// https://github.com/netlify/netlify-cms/issues/3580
// https://www.luckymedia.dev/blog/page-builder-with-netlify-cms-and-next-js

/*
import dynamic from 'next/dynamic'

const config = {}

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.init(config)
    }),
  { ssr: false, loading: () => <p>Loading Admin...</p> }
)

const Admin = () => <CMS />

export default Admin
*/

import dynamic from 'next/dynamic'
import Head from 'next/head'

const config = {
  // We want to manually init the config file
  // cms_manual_init: true,

  // Backend configuration, in this case with git
  backend: {
    name: 'git-gateway',
    branch: 'main',
    // branch: "master",
    squash_merges: true
  },

  // Local backend is used during development
  // local_backend: true,

  // Where to store the images
  media_folder: 'public/images/',

  // Where to link the images
  // public_folder: "public/images/",

  // The Pages collection
  collections: [
    {
      name: 'Pages',
      label: 'Page',
      editor: { preview: false },
      label_singular: 'Page',
      folder: 'content/pages',
      create: true,
      slug: '{{slug}}',
      extension: 'md',
      format: 'yaml-frontmatter',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: true
        }
      ]
    }
  ]
}

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.init({ config })
    }),
  {
    ssr: false,
    loading: () => <h1>Loading</h1>
  }
)

const AdminPage = () => {
  return (
    <>
      <Head>
        <script
          async
          src='https://identity.netlify.com/v1/netlify-identity-widget.js'
        ></script>
      </Head>

      <CMS />
    </>
  )
}

export default AdminPage
