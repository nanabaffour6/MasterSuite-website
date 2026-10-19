import {
  MASTER_SUITE_BUILD,
  MASTER_SUITE_DOWNLOAD_URL,
  MASTER_SUITE_RELEASE_DATE_ISO,
  MASTER_SUITE_SITE_URL,
  MASTER_SUITE_SUPPORT_EMAIL,
  MASTER_SUITE_SUPPORT_TEL,
  MASTER_SUITE_VERSION,
  MASTER_SUITE_COMPANION_DOWNLOAD_URL,
  MASTER_SUITE_COMPANION_VERSION,
} from './site-config';

export const SITE_TITLE =
  'MasterSuite | Free School Management Software for Schools';

export const SITE_DESCRIPTION =
  'Manage school operations with free MasterSuite Desktop for Windows and supported mobile tasks with MasterSuite Companion for Android. An authorised school Host is required.';

export const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${MASTER_SUITE_SITE_URL}#organization`,
      name: 'BAF Creative',
      url: `${MASTER_SUITE_SITE_URL}#about`,
      email: MASTER_SUITE_SUPPORT_EMAIL,
      telephone: MASTER_SUITE_SUPPORT_TEL.slice('tel:'.length),
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: MASTER_SUITE_SUPPORT_EMAIL,
        telephone: MASTER_SUITE_SUPPORT_TEL.slice('tel:'.length),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${MASTER_SUITE_SITE_URL}#website`,
      name: 'MasterSuite',
      url: MASTER_SUITE_SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: 'en',
      publisher: { '@id': `${MASTER_SUITE_SITE_URL}#organization` },
      about: { '@id': `${MASTER_SUITE_SITE_URL}#software` },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${MASTER_SUITE_SITE_URL}#companion-software`,
      name: 'MasterSuite Companion',
      description:
        'Preview Android Companion for authorised users of a compatible MasterSuite Desktop school Host. Available information and tasks depend on assigned permissions.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Android',
      softwareVersion: MASTER_SUITE_COMPANION_VERSION,
      downloadUrl: MASTER_SUITE_COMPANION_DOWNLOAD_URL,
      url: `${MASTER_SUITE_SITE_URL}#companion`,
      softwareRequirements:
        'Compatible MasterSuite Desktop Host, authorised pairing and account access.',
      publisher: { '@id': `${MASTER_SUITE_SITE_URL}#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${MASTER_SUITE_SITE_URL}#software`,
      name: 'MasterSuite',
      description: SITE_DESCRIPTION,
      applicationCategory: 'EducationalApplication',
      applicationSubCategory: 'School management software',
      operatingSystem: 'Windows',
      softwareVersion: `${MASTER_SUITE_VERSION} (Build ${MASTER_SUITE_BUILD})`,
      dateModified: MASTER_SUITE_RELEASE_DATE_ISO,
      url: MASTER_SUITE_SITE_URL,
      downloadUrl: MASTER_SUITE_DOWNLOAD_URL,
      releaseNotes: `${MASTER_SUITE_SITE_URL}#whats-new`,
      image: `${MASTER_SUITE_SITE_URL}assets/mastersuite-logo.png`,
      isAccessibleForFree: true,
      featureList: [
        'Student records',
        'School fees and finance',
        'Student and staff attendance',
        'Assessment and reports',
        'School timetables',
        'SMS and communication',
        'Staff and school payroll with Ghana PAYE support',
        'Backup and restore',
        'Offline school operations',
      ],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        url: `${MASTER_SUITE_SITE_URL}#download`,
      },
      publisher: { '@id': `${MASTER_SUITE_SITE_URL}#organization` },
    },
  ],
};
