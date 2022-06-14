#!/usr/bin/env node

// https://github.com/netlify/netlify-cms/issues/3580

import dynamic from 'next/dynamic'

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.init({})
    }),
  { ssr: false, loading: () => <p>Loading Admin...</p> }
)

const Admin = () => (<CMS />)

export default Admin

// const Admin: React.FC = () => {
// return <CMS />;
// };

// export default Admin;
