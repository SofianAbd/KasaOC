import '../../styles/components/tags.css';

function Tags(props) {
    const tags = props.tags;

    const tagList = tags.map((tag, index) => (
        <span className="tag" key={index}>{tag}</span>
    ));
    
    return (
      <div className="tags">
        {tagList}
      </div>
    );
}

export default Tags;
