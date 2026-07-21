import { useState, useRef, useLayoutEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import {
    SvBlock,
    SectionHead,
    Eyebrow,
    Title,
    TabsWrap,
    TabsList,
    TabIndicator,
    TabButton,
    Panels,
    Panel,
} from './ServicosTabs.styles';

const TABS = [
    {
        key: 'planejamento',
        label: 'Planejamento',
        title: 'Título',
        desc: 'Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta eum delectus temporibus neque doloremque placeat maxime.',
        items: ['Lorem ipsum, dolor sit amet consectetur', 'Lorem ipsum, dolor sit amet consectetur', 'Lorem ipsum, dolor sit amet consectetur'],
    },
    {
        key: 'execucao',
        label: 'Execução',
        title: 'Título',
        desc: 'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta eum delectus temporibus neque doloremque placeat maxime.',
        items: ['Lorem ipsum, dolor sit amet consectetur', 'Lorem ipsum, dolor sit amet consectetur', 'Lorem ipsum, dolor sit amet consectetur'],
    },
    {
        key: 'estrutural',
        label: 'Estrutural',
        title: 'Título',
        desc: 'Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta eum delectus temporibus neque doloremque placeat maxime.',
        items: ['Lorem ipsum, dolor sit amet consectetur', 'Lorem ipsum, dolor sit amet consectetur', 'Lorem ipsum, dolor sit amet consectetur'],
    },
    {
        key: 'sustentabilidade',
        label: 'Sustentabilidade',
        title: 'Título',
        desc: 'Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta eum delectus temporibus neque doloremque placeat maxime.',
        items: ['Lorem ipsum, dolor sit amet consectetur', 'Lorem ipsum, dolor sit amet consectetur', 'Lorem ipsum, dolor sit amet consectetur'],
    },
    {
        key: 'manutencao',
        label: 'Manutenção',
        title: 'Título',
        desc: 'Lorem 5 ipsum dolor sit amet consectetur adipisicing elit. Laudantium dicta eum delectus temporibus neque doloremque placeat maxime.',
        items: ['Lorem ipsum, dolor sit amet consectetur', 'Lorem ipsum, dolor sit amet consectetur', 'Lorem ipsum, dolor sit amet consectetur'],
    },
];

function ServicosTabs() {
    const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
    const { ref: tabsRef, inView: tabsInView } = useInView<HTMLDivElement>();

    const [activeKey, setActiveKey] = useState(TABS[0].key);
    const tabsListRef = useRef<HTMLDivElement>(null);
    const [indicator, setIndicator] = useState({ top: 0, height: 0 });

    const activeTab = TABS.find((t) => t.key === activeKey)!;

    useLayoutEffect(() => {
        const list = tabsListRef.current;
        if (!list) return;

        const updateIndicator = () => {
            if (window.innerWidth <= 1024) {
                setIndicator({ top: 0, height: 0 });
                return;
            }
            const activeBtn = list.querySelector<HTMLButtonElement>(`[data-key="${activeKey}"]`);
            if (activeBtn) {
                setIndicator({ top: activeBtn.offsetTop, height: activeBtn.offsetHeight });
            }
        };

        updateIndicator();
        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [activeKey]);

    return (
        <SvBlock>
            <SectionHead ref={headRef} $visible={headInView}>
                <Eyebrow>Título</Eyebrow>
                <Title>Título Provisório</Title>
            </SectionHead>

            <TabsWrap ref={tabsRef} $visible={tabsInView}>
                <TabsList ref={tabsListRef} role="tablist" aria-orientation="vertical">
                    <TabIndicator $top={indicator.top} $height={indicator.height} />
                    {TABS.map((tab) => (
                        <TabButton
                            key={tab.key}
                            data-key={tab.key}
                            role="tab"
                            id={`tab-${tab.key}`}
                            aria-controls={`panel-${tab.key}`}
                            aria-selected={activeKey === tab.key}
                            $active={activeKey === tab.key}
                            onClick={() => setActiveKey(tab.key)}
                        >
                            {tab.label}
                        </TabButton>
                    ))}
                </TabsList>

                <Panels>
                    <Panel role="tabpanel" id={`panel-${activeTab.key}`} aria-labelledby={`tab-${activeTab.key}`}>
                        <h3>{activeTab.title}</h3>
                        <p>{activeTab.desc}</p>
                        <ul>
                            {activeTab.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </Panel>
                </Panels>
            </TabsWrap>
        </SvBlock>
    );
}

export default ServicosTabs;