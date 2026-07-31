import { useState, useRef, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import {
    MarketsSection,
    Wrap,
    SectionHead,
    Eyebrow,
    Title,
    Description,
    CarouselOuter,
    CarouselWrap,
    Track,
    Item,
    Controls,
    Arrows,
    ArrowBtn,
    Dots,
    Dot,
} from './ServicosCarrossel.styles';
import fundoImg from '../../assets/img/fundo.jpg';

const ITEMS = Array.from({ length: 8 }, (_, i) => ({
    alt: `Serviço ${i + 1}`,
}));

function getVisibleCount() {
    const width = window.innerWidth;
    if (width < 480) return 1;
    if (width < 768) return 2;
    if (width < 1024) return 3;
    return 4;
}

function ServicosCarrossel() {
    const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
    const { ref: carouselRef, inView: carouselInView } = useInView<HTMLDivElement>();

    const trackRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(() => {
        const visible = getVisibleCount();
        return Math.max(1, Math.ceil(ITEMS.length / visible));
    });
    const isDragging = useRef(false);
    const startX = useRef(0);
    const startScroll = useRef(0);

    useEffect(() => {
        let mounted = true;
        const update = () => {
            if (mounted) {
                const visible = getVisibleCount();
                const newTotal = Math.max(1, Math.ceil(ITEMS.length / visible));
                setTotalPages(newTotal);
                setPage(prev => Math.min(prev, newTotal - 1));
            }
        };

        update();
        window.addEventListener('resize', update);
        return () => {
            mounted = false;
            window.removeEventListener('resize', update);
        };
    }, []);

    const scrollToPage = (targetPage: number) => {
        const track = trackRef.current;
        if (!track) return;
        const clamped = Math.min(Math.max(0, targetPage), totalPages - 1);
        const visible = getVisibleCount();
        const firstItem = track.querySelector<HTMLDivElement>('div');
        if (!firstItem) return;
        const itemWidth = firstItem.getBoundingClientRect().width + 24;
        const maxIndex = ITEMS.length - visible;
        const scrollIndex = Math.min(clamped * visible, maxIndex);
        track.scrollTo({ left: scrollIndex * itemWidth, behavior: 'smooth' });
        setPage(clamped);
    };

    const handleTrackScroll = () => {
        const track = trackRef.current;
        if (!track || isDragging.current) return;
        const visible = getVisibleCount();
        const firstItem = track.querySelector<HTMLDivElement>('div');
        if (!firstItem) return;
        const itemWidth = firstItem.getBoundingClientRect().width + 24;
        const scrollIndex = Math.round(track.scrollLeft / itemWidth);
        const newPage = Math.floor(scrollIndex / visible);
        if (newPage !== page && newPage >= 0 && newPage < totalPages) {
            setPage(newPage);
        }
    };

    const handlePointerDown = (e: React.PointerEvent) => {
        const track = trackRef.current;
        if (!track) return;
        isDragging.current = true;
        startX.current = e.clientX;
        startScroll.current = track.scrollLeft;
        track.setPointerCapture(e.pointerId);
        track.classList.add('dragging');
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        const track = trackRef.current;
        if (!track || !isDragging.current) return;
        const walk = (e.clientX - startX.current) * 1.2;
        track.scrollLeft = startScroll.current - walk;
    };

    const handlePointerUp = () => {
        const track = trackRef.current;
        if (!track) return;
        isDragging.current = false;
        track.classList.remove('dragging');
        handleTrackScroll();
    };

    return (
        <MarketsSection id="servicos">
            <Wrap>
                <SectionHead ref={headRef} $visible={headInView}>
                    <Eyebrow>Serviços</Eyebrow>
                    <Title>Nossos Serviços</Title>
                    <Description>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit porro qui quos
                        fugit veritatis aperiam esse, illum doloremque dolorum adipisci in
                        voluptatibus cupiditate.
                    </Description>
                </SectionHead>

                <CarouselOuter ref={carouselRef} $visible={carouselInView}>
                    <CarouselWrap>
                        <Track
                            ref={trackRef}
                            onScroll={handleTrackScroll}
                            onPointerDown={handlePointerDown}
                            onPointerMove={handlePointerMove}
                            onPointerUp={handlePointerUp}
                            onPointerLeave={handlePointerUp}
                        >
                            {ITEMS.map((item) => (
                                <Item key={item.alt}>
                                    <img src={fundoImg} alt={item.alt} loading="lazy" />
                                </Item>
                            ))}
                        </Track>
                    </CarouselWrap>

                    <Controls>
                        <Arrows>
                            <ArrowBtn
                                aria-label="Anterior"
                                $disabled={page <= 0}
                                onClick={() => scrollToPage(page - 1)}
                            >
                                <i className="fas fa-chevron-left" aria-hidden="true" />
                            </ArrowBtn>
                            <ArrowBtn
                                aria-label="Próximo"
                                $disabled={page >= totalPages - 1}
                                onClick={() => scrollToPage(page + 1)}
                            >
                                <i className="fas fa-chevron-right" aria-hidden="true" />
                            </ArrowBtn>
                        </Arrows>

                        <Dots role="tablist" aria-label="Navegação do carrossel">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <Dot
                                    key={i}
                                    role="tab"
                                    aria-selected={i === page}
                                    aria-label={`Ir para página ${i + 1}`}
                                    $active={i === page}
                                    onClick={() => scrollToPage(i)}
                                />
                            ))}
                        </Dots>
                    </Controls>
                </CarouselOuter>
            </Wrap>
        </MarketsSection>
    );
}

export default ServicosCarrossel;