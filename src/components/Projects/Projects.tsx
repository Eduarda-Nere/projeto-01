// src/components/Projects/Projects.tsx
import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import {
    ProjectsSection,
    Wrap,
    SectionHead,
    Title,
    Subtitle,
    CardsGrid,
    Card,
    CardOverlay,
    CardContent,
    CardTag,
    CardTitle,
    CardDescription,
} from './Projects.styles';
import projeto1Img from '../../assets/img/fundo.jpg';
import projeto2Img from '../../assets/img/fundo.jpg';
import projeto3Img from '../../assets/img/fundo.jpg';

const PROJECTS = [
    {
        id: 1,
        tag: 'Lorem Ipsum',
        title: 'Lorem ipsum dolor sit amet',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        image: projeto1Img,
    },
    {
        id: 2,
        tag: 'Consectetur',
        title: 'Adipiscing elit sed do',
        description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        image: projeto2Img,
    },
    {
        id: 3,
        tag: 'Sed Do Eiusmod',
        title: 'Tempor incididunt ut labore',
        description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        image: projeto3Img,
    },
];

function Projects() {
    const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
    const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <ProjectsSection id="projetos">
            <Wrap>
                <SectionHead ref={headRef} $visible={headInView}>
                    <Title>Projetos</Title>
                    <Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </Subtitle>
                </SectionHead>

                <CardsGrid ref={gridRef} $visible={gridInView}>
                    {PROJECTS.map((project, index) => {
                        const isHovered = hoveredIndex === index;
                        return (
                            <Card
                                key={project.id}
                                $bgImage={project.image}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <CardOverlay $isHovered={isHovered}>
                                    <CardContent>
                                        <CardTag>{project.tag}</CardTag>
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription $isHovered={isHovered}>
                                            {project.description}
                                        </CardDescription>
                                    </CardContent>
                                </CardOverlay>
                            </Card>
                        );
                    })}
                </CardsGrid>
            </Wrap>
        </ProjectsSection>
    );
}

export default Projects;