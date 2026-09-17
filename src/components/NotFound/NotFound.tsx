import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HardHat } from 'lucide-react';
import { FlowButton } from '../ui';
import {
    NotFoundSection,
    NotFoundContent,
    NotFoundCode,
    NotFoundTitle,
    NotFoundDescription,
    NotFoundIcon,
    ButtonWrapper,
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
                    <HardHat size={56} strokeWidth={1.5} />
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
                    <FlowButton text="Voltar para o início" scrolled onClick={handleGoHome} />
                </ButtonWrapper>
            </NotFoundContent>
        </NotFoundSection>
    );
}

export default NotFound;