import React from 'react';
import * as S from './Popup.styled';
import useMediaQueries from '@/hooks/useMediaQueries';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;
  const { isMobile,isTablet } = useMediaQueries();

  return (
    <S.PopupOverlay onClick={onClose}>
      <S.PopupBox onClick={(e) => e.stopPropagation()} $isMobile={isMobile} $isTablet={isTablet}>
        <S.PopupTitle $isMobile={isMobile} $isTablet={isTablet}>{title}</S.PopupTitle>
        <S.PopupText $isMobile={isMobile} $isTablet={isTablet}>{content}</S.PopupText>
        <S.PopupCloseButton onClick={onClose} $isMobile={isMobile} $isTablet={isTablet}>확인</S.PopupCloseButton>
      </S.PopupBox>
    </S.PopupOverlay>
  );
};

export default Popup;