import React from 'react';
import * as S from './AchievementItem.styles';

interface AchievementItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const AchievementItem: React.FC<AchievementItemProps> = ({ title, description, imageUrl }) => {
  return (
    <S.ItemContainer>
      <S.Image src={imageUrl} alt={title} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.ItemContainer>
  );
};

export default AchievementItem;
