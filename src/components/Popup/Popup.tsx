import React from 'react';
import * as S from './Popup.styled';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <S.PopupOverlay onClick={onClose}>
      <S.PopupBox onClick={(e) => e.stopPropagation()}>
        <S.PopupTitle>{title}</S.PopupTitle>
        <S.PopupText>{content}</S.PopupText>
        <S.PopupCloseButton onClick={onClose}>확인</S.PopupCloseButton>
      </S.PopupBox>
    </S.PopupOverlay>
  );
};

export default Popup;