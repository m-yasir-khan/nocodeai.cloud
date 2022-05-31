import '../style.css';

function Button(props) {
    let data = props.data;

    let style = {
        height: data.height,
        width: data.width,
        backgroundColor: data.backgroundColor,
        color: data.textColor,
        paddingTop: data.paddingTop,
        paddingBottom: data.paddingDown,
        paddingLeft: data.paddingLeft,
        paddingRight: data.paddingRight
    }
    return (
        <div className="flow-label">
            <div className="button-node">
                <div class="square"></div>
            </div>
        </div>
    );
}

export default Button;