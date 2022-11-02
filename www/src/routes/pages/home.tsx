import React from "react";
import DocumentTitle from "react-document-title";
import ScrollTop from "../../components/ScrollTop";
import {Page, PageTitle, SectionTitle} from "../../components/Page";

const title = 'Web Accessibility'

const Content = () => {
    const name = 'home'
    return (<Page name={name}>
        <PageTitle name={name}>{title}</PageTitle>
        <div>
            <SectionTitle name={name} section={'part1'}>
                L'accessibilité pour tous, une part de marché négligée
            </SectionTitle>
            <div>
                <p>
                    Les entreprises ont tendance, par habitude, à considérer l'accessibilité comme quelque chose qui
                    peut leur coûter cher pour pas grand monde. Hors, dans le cadre du numérique, on oublie
                    facilement que la majorité des personnes porteuses de handicap utilisent le numérique.
                </p>
                <p>
                    En effet, le numérique est un vrai accélérateur d'autonomie. Négliger l'accessibilité quand on
                    est une entreprise oeuvrant dans le numérique, ou qu'on possède juste un site internet, même un
                    site vitrine, c'est se couper de près de 10% de la population adulte en France, et donc d'une
                    part de marché considérable.
                </p>
            </div>
            <ScrollTop/>
        </div>
        <div>
            <SectionTitle name={name} section={'part2'}>
                Le web vu par un déficient visuel
            </SectionTitle>
            <div>
                <p>
                    Étant moi-même déficient visuel, j'utilise un lecteur d'écran. C'est
                    un petit logiciel qui permet à l'utilisateur d'un ordinateur ou d'un
                    téléphone portable d'utiliser les outils numériques et les sites
                    internet.
                </p>
                <p>
                    Aussi, pour amener tout à chacun à la compréhension, j'ai eu l'idée
                    de créer un petit site qui montre ce que lit un lecteur d'écran, et
                    ce qu'il ne lit pas.
                </p>
                <p>
                    Il sera continuellement enrichi de nouveaux éléments au fil du
                    temps. N'hésitez pas à y revenir régulièrement &#128522;
                </p>
            </div>
            <ScrollTop/>
        </div>
        <div>
            <SectionTitle name={name} section={'part3'}>
                L'objectif de ce site
            </SectionTitle>
            <div>
                <p>
                    L'objectif de ce projet est de pouvoir vous donner des conseils en matière d'accessibilité. Je
                    vais principalement me concentrer sur l'accessibilité au regard de la déficience visuelle.
                </p>
                <p>
                    Au fur et à mesure, j'avancerai dans ce porjet en donnant d'autres tips d'accessibilités pour
                    les différents handicaps.
                </p>
            </div>
            <ScrollTop/>
        </div>
    </Page>);
}

export default function Home() {

    return (<DocumentTitle title={title}>
        <Content/>
    </DocumentTitle>)
}
