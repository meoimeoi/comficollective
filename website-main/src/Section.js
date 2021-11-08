import LinkOptions from './LinkOptions';
import About from './sections/About';
import Development from './sections/Development';
import Blog from './sections/Blog';
import Playground from './sections/Playground';
import Tunes from './sections/Tunes';
import Contact from './sections/Contact';

function Section(props) {
    const section = props.section;
    const title = section.title;
    const subtext = section.subtext;
    var classname = "Meoi-link";
    if (!props.isActive) {
        return <div></div>;
    }
    switch (props.sectionName) {
        case LinkOptions.about.key: 
            return <About />;
        case LinkOptions.development.key:
            return <Development />;
        case LinkOptions.blog.key:
            return <Blog />;
        case LinkOptions.playground.key:
            return <Playground />;
        case LinkOptions.tunes.key:
            return <Tunes />;
        case LinkOptions.contact.key:
            return <Contact />;
    }
    return <div></div>;
}
export default Section;