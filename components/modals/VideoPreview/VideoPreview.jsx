import { useState, useRef } from 'react';

import { useTranslation } from 'react-i18next';

import cls from './videoPreview.module.scss';

const PreviewModal = ({ setOpenPreview, videoLink  }) => {
  // COMPONENT HOOKS
  const overlay = useRef();
  const { t: translate, i18n } = useTranslation('common');

  // COMPONENT HANDLERS
  const closeModal = (e) => {
    if(overlay.current === e.target) setOpenPreview(false)
  }

  const close = async () => {
    setOpenPreview(false)
  }

  return (
    <div className={cls.overlay} ref={overlay} onClick={(e) => closeModal(e)}>
      <div className={cls.area}>

        <div className={cls.area__wrapper}>
          <div className={`${cls.close} ${cls[i18n.language]}`} onClick={close}>
            <i className="fa-solid fa-xmark"></i>
          </div>

          <div container className={cls.area__content} spacing={3}>

            <iframe src={videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

          </div>

        </div>
      </div>
    </div>
  )
}

export default PreviewModal;