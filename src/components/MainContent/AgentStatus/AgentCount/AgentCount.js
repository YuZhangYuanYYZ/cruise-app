import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';

export function AgentCount({ allNumber, physicalNumber, virtualNumber }) {
  const { t } = useTranslation();
  return (
    <div className="countContainer">
      <div className="all">
        <span>{t('ALL')}</span>
        <span className="allNumber">{allNumber}</span>
      </div>
      <div className="physical">
        <span>{t('PHYSICAL')}</span>
        <span className="physicalNumber">{physicalNumber}</span>
      </div>
      <div className="virtual">
        <span>{t('VIRTUAL')}</span>
        <span className="virtualNumber">{virtualNumber}</span>
      </div>
    </div>
  );
}
