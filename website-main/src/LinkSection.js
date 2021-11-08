import LinkOptions from './LinkOptions';

function LinkSection(props) {
    const section = props.section;
    const title = section.title;
    const sectionName = props.sectionName;
    const subtext = section.subtext;
    var classname = "Meoi-link";
    if (props.isActive) {
        classname = "Meoi-link-selected";
    } else {
        classname = "Meoi-link";
    }
    return (
        <div className="tab"><span
            className={classname}
        >
            {title}
            {
                props.isActive ? <div className="tab-bottom"/> : <div/>
            }
        </span></div>);
}
export default LinkSection;