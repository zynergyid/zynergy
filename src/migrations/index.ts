import * as migration_20260901_205423_initial from './20260901_205423_initial';
import * as migration_20260919_182605_site_settings_and_api_keys from './20260919_182605_site_settings_and_api_keys';
import * as migration_20260919_183743_site_business_profile_url from './20260919_183743_site_business_profile_url';
import * as migration_20260921_025526_site_socials from './20260921_025526_site_socials';

export const migrations = [
  {
    up: migration_20260901_205423_initial.up,
    down: migration_20260901_205423_initial.down,
    name: '20260901_205423_initial',
  },
  {
    up: migration_20260919_182605_site_settings_and_api_keys.up,
    down: migration_20260919_182605_site_settings_and_api_keys.down,
    name: '20260919_182605_site_settings_and_api_keys',
  },
  {
    up: migration_20260919_183743_site_business_profile_url.up,
    down: migration_20260919_183743_site_business_profile_url.down,
    name: '20260919_183743_site_business_profile_url',
  },
  {
    up: migration_20260921_025526_site_socials.up,
    down: migration_20260921_025526_site_socials.down,
    name: '20260921_025526_site_socials'
  },
];
