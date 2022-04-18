import "./spinner.css";

const Spinner = () => {
    return (
        <div className="spinner">
            <div className="sk-chase">
                <div className="sk-chase-dot"/>
                <div className="sk-chase-dot"/>
                <div className="sk-chase-dot"/>
                <div className="sk-chase-dot"/>
                <div className="sk-chase-dot"/>
                <div className="sk-chase-dot"/>
            </div>
        </div>
    );
};

export default Spinner;