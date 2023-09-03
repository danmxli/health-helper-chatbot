import '../../styles/Options.css'

const Options = (props) => {
    return (
        <div className='options'>
            <div className='options-container'>
                {props.options.map((option) => {
                    return (
                        <div className='option-item'
                            onClick={option.handler}
                            key={option.id}
                        >
                            {option.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Options;