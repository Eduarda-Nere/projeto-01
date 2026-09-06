import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    NotFoundSection,
    NotFoundContent,
    NotFoundCode,
    NotFoundTitle,
    NotFoundDescription,
    NotFoundIcon,
    ButtonWrapper,
    StyledNotFoundButton,
} from './NotFound.styles';

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Página não encontrada - Lopez Engenharia';
    }, []);

    const handleGoHome = () => {
        navigate('/');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    return (
        <NotFoundSection>
            <NotFoundContent>
                <NotFoundIcon aria-hidden="true">
                    <i className="fas fa-hard-hat"></i>
                </NotFoundIcon>

                <NotFoundCode>404</NotFoundCode>
                <NotFoundTitle>Página não encontrada</NotFoundTitle>

                <NotFoundDescription>
                    A página que você está procurando pode ter sido removida, 
                    renomeada ou estar temporariamente indisponível.
                    <br /><br />
                    Verifique se o endereço está correto ou volte para o início 
                    do site para continuar navegando.
                </NotFoundDescription>

                <ButtonWrapper>
                    <StyledNotFoundButton onClick={handleGoHome}>
                        <span className="btn-text">Voltar para o início</span>
                        <span className="btn-circle" />
                    </StyledNotFoundButton>
                </ButtonWrapper>
            </NotFoundContent>
        </NotFoundSection>
    );
}

export default NotFound;