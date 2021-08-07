import React, { useState } from 'react';
import { Header } from '@buffetjs/custom';
import {
  SettingsPageTitle,
  BaselineAlignment,
} from 'strapi-helper-plugin';

const SettingsPage = () => {
  const [showLoader] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <SettingsPageTitle name="My custom plugin" />
      <div>
        <form onSubmit={handleSubmit}>
          <Header
            title={{ label: 'Settings' }}
            content={'Configure awesome stuff!'}
            isLoading={showLoader}
          />
          <BaselineAlignment top size="3px" />
        </form>
      </div>
    </>
  );
};

export default SettingsPage;
