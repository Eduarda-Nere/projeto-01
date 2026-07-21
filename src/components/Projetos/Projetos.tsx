import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import {
    ProjectsSection,
    Wrap,
    SectionHeadCenter,
    Eyebrow,
    Title,
    Description,
    Filters,
    FilterBtn,
    ProjectGrid,
    Card,
    CardMedia,
    CardTag,
    CardInfo,
    CardExcerpt,
    CardMeta,
    ProjectsCta,
} from './Projetos.styles';
import fundoImg from '../../assets/img/fundo.jpg';

type Category = 'design' | 'desenvolvimento' | 'marketing' | 'consultoria';

const FILTERS: { key: 'all' | Category; label: string }[] = [
    { key: 'all', label: 'Todos' },
    { key: 'design', label: 'Design' },
    { key: 'desenvolvimento', label: 'Desenvolvimento' },
    { key: 'marketing', label: 'Marketing' },
    { key: 'consultoria', label: 'Consultoria' },
];

const PROJECTS: { title: string; category: Category; year: string }[] = [
    { title: 'Lorem Ipsum', category: 'design', year: '2025' },
    { title: 'Lorem Ipsum', category: 'desenvolvimento', year: '2025' },
    { title: 'Lorem Ipsum', category: 'marketing', year: '2025' },
    { title: 'Lorem Ipsum', category: 'consultoria', year: '2025' },
    { title: 'Lorem Ipsum', category: 'design', year: '2024' },
    { title: 'Lorem Ipsum', category: 'desenvolvimento', year: '2024' },
];

const CATEGORY_LABELS: Record<Category, string> = {
    design: 'Design',
    desenvolvimento: 'Desenvolvimento',
    marketing: 'Marketing',
    consultoria: 'Consultoria',
};

function Projetos() {
    const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
    const { ref: filtersRef, inView: filtersInView } = useInView<HTMLDivElement>();
    const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>();
    const { ref: ctaRef, inView: ctaInView } = useInView<HTMLDivElement>();

    const [activeFilter, setActiveFilter] = useState<'all' | Category>('all');

    const filteredProjects = PROJECTS.filter(
        (p) => activeFilter === 'all' || p.category === activeFilter
    );

    return (
        <ProjectsSection id="projetos">
            <Wrap>
                <SectionHeadCenter ref={headRef} $visible={headInView}>
                    <Eyebrow>Projetos</Eyebrow>
                    <Title>Nossos Projetos</Title>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
                        cupiditate culpa tempora incidunt veritatis suscipit fugit voluptatem
                        inventore.
                    </Description>
                </SectionHeadCenter>

                <Filters ref={filtersRef} $visible={filtersInView} role="group" aria-label="Filtros de projetos">
                    {FILTERS.map((filter) => (
                        <FilterBtn
                            key={filter.key}
                            $active={activeFilter === filter.key}
                            aria-pressed={activeFilter === filter.key}
                            onClick={() => setActiveFilter(filter.key)}
                        >
                            {filter.label}
                        </FilterBtn>
                    ))}
                </Filters>

                <ProjectGrid ref={gridRef} $visible={gridInView}>
                    {filteredProjects.map((project, i) => (
                        <Card key={project.title + project.category + i} data-category={project.category}>
                            <CardMedia>
                                <img src={fundoImg} alt={`Projeto ${i + 1}`} loading="lazy" />
                                <CardTag>{CATEGORY_LABELS[project.category]}</CardTag>
                            </CardMedia>
                            <CardInfo>
                                <h3>{project.title}</h3>
                                <CardExcerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardExcerpt>
                                <CardMeta>
                                    <span>{CATEGORY_LABELS[project.category]} · {project.year}</span>
                                    <i className="fas fa-arrow-right" aria-hidden="true" />
                                </CardMeta>
                            </CardInfo>
                        </Card>
                    ))}
                </ProjectGrid>

                <ProjectsCta ref={ctaRef} $visible={ctaInView}>
                    <a href="#">Ver todos os projetos</a>
                </ProjectsCta>
            </Wrap>
        </ProjectsSection>
    );
}

export default Projetos;