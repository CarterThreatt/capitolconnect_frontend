const FeatureDetail = (props) => {
    return (
        <div>
            <span className="feature-card-label">{props.label}</span>
            <span>{props.value}</span>
        </div>
    );
};

export default FeatureDetail;
