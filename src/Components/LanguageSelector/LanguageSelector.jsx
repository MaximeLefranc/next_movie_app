'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { availableLocales } from '@/utils/i18n';
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';

import styles from './LanguageSelector.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = useCurrentLanguage();

  useEffect(() => {
    setIsOpen(false);
  }, [currentLanguage]);

  return (
    <div className={`${styles.selector} ${isOpen ? styles.enabled : ''}`}>
      <p onClick={() => setIsOpen((prevState) => !prevState)}>
        {currentLanguage + ' '}
        <span>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </p>
      <ul>
        {availableLocales
          .filter((locale) => locale !== currentLanguage)
          .map((locale) => (
            <li key={locale}>
              <Link href={`/${locale}`}>{locale}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
