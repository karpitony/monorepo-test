import * as S from './Footer.styled';
import GitHubIcon from '../../assets/Icons/Github_white.svg';
import InstagramIcon from '../../assets/Icons/Instagram_white.svg';
import LinktreeIcon from '../../assets/Icons/Linktree_white.svg';
import DGUIcon from "../../assets/Icons/DguLogo_small.svg";
import Logo from '@/assets/Icons/FarmLogo_green.svg';

import useMediaQueries from '@/hooks/useMediaQueries';


export function Footer(){
    const { isMobile, isTablet } = useMediaQueries();
    return(
        <S.FooterContainer>
            <S.FooterContent $isMobile={isMobile}>
                <S.FooterText>
                    <S.FooterTitle>
                        <S.Logo $isMobile={isMobile} src={Logo} alt="logo"/>
                        FarmSystem
                    </S.FooterTitle>
                    <S.FooterDescription>
                        미래를 준비하고 성장하는 여정, Farm System에서 함께하세요.
                    </S.FooterDescription>
                </S.FooterText>

                <S.IconsContainer $isMobile={isMobile} $isTablet={isTablet}>
                    <S.IconLink href="https://github.com/DguFarmSystem" target="_blank" rel="noopener noreferrer">
                        <S.Icon $isMobile={isMobile} src={GitHubIcon} alt="GitHub"/>
                    </S.IconLink>
                    <S.IconLink href="https://www.instagram.com/dgu_farm_system/" target="_blank" rel="noopener noreferrer">
                        <S.Icon $isMobile={isMobile} src={InstagramIcon} alt="Instagram" />
                    </S.IconLink>
                    <S.IconLink href="https://linktr.ee/dgu_farm_system" target="_blank" rel="noopener noreferrer">
                        <S.Icon $isMobile={isMobile} src={LinktreeIcon} alt="Linktree" />
                    </S.IconLink>
                    <S.IconLink href="https://dice.dongguk.edu/mainPage.do" target="_blank" rel="noopener noreferrer">
                        <S.Icon $isMobile={isMobile} src={DGUIcon} alt="Community" />
                    </S.IconLink>
                </S.IconsContainer>
            </S.FooterContent>
        </S.FooterContainer>

    );
};